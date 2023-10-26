const bcrypt = require('bcryptjs')
const pick = require('lodash/pick')
const jwt = require('jsonwebtoken')
const User = require("../models/userModel")
const userCltr = {}


userCltr.register = async (req, res) => {
    const body = pick(req.body, ["username", "password","email","role"])
    const user = new User(body)

    try {
        const userCount=await User.countDocuments()
        if(userCount==0){
            user.role==='admin'
        }
        
        
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(body.password, salt)
        user.password = hashedPassword
        const userRecord = await user.save()
        res.status(200).json({message:'Registration Successful'})

    } catch (e) {
        res.status(400).json({message:'Registration Failed'})

    }


},

userCltr.login = async (req, res) => {
    const body = pick(req.body, ["username", "password"])
    try {
        const userDoc = await User.findOne({ username: body.username })
        if (userDoc) {
            const result = await bcrypt.compare(body.password, userDoc.password)
    
            if (result) {
                const tokenData = {
                    id: userDoc._id,
                    role: userDoc.role
                }
                const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY)
                
                res.json({ token: `Bearer ${token}`, message: "Login Successful", role: userDoc.role, id: userDoc._id ,fullName:userDoc.username,email:userDoc.email})
                
                
            } else {
                res.status(401).json({ message: "invalid username/password" })
            }
        } else {
            res.status(401).json({ message: "invalid username/password" })
        }
    } catch (err) {
        res.json(err)
    }
}
userCltr.account = async (req, res) => {
    try {
        const userDoc = await User.findOne({ id: req.user.id })
        res.json(userDoc,pick['_id','username','email'])
    }
    catch (e) {
        res.json(e)

    }

}
userCltr.updateAccount=async(req,res)=>{
    try{
        const body=req.body
        const id=req.params.id
        const userDoc=await User.findByIdAndUpdate(id,body)
        res.status(200).json({message:'account updated successfully'})
    }catch(e){
        res.json(e)
    }
}
userCltr.getAllUsers=async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch(e) {
        res.json(e) 
    }
}
userCltr.removeUser=async (req, res) => {
    const id=req.params.id 
    try {
        const userDoc = await User.findByIdAndDelete(id)
        res.json(userDoc)
    } catch(err) {
        res.json(err) 
    }
}
module.exports = userCltr