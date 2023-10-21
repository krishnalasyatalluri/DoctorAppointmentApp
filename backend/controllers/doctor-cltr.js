
const Doctor = require("../models/doctorModel")
const doctorCltr = {}


// doctorsCltr.register = async (req, res) => {
//     try {
//         const body = pick(req.body, ['fullName', 'email', 'password'])
//         const doctor = new Doctor(body)
//         const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(doctor.password, salt)
//         doctor.password = hashedPassword
//         const doctorRecord = await doctor.save()
//         res.json(doctorRecord)

//     } catch (e) {
//         res.json(e)

//     }


// },
// doctorsCltr.login = async (req, res) => {
//     try {
//         const body =pick(req.body, ['email', 'password'])
//         const user = await Doctor.findOne({ email: body.email })
//         if (doctor) {
//             const result = await bcrypt.compare(body.password, doctor.password)
//             if (result) {//email and password correct
//                 //generate a token and send the token
//                 const tokenData = {
//                     id: patient._id
//                 }
//                 const token = jwt.sign(tokenData, process.env.JWT_SECRET)

//                 res.json({
//                     token: `Bearer ${token}`
//                 })
//             }
//             else {//email is correct,password wrong
//                 res.status(404).json('invalid password')
//             }
//         }
//         else {// user accnt not found
//             res.status(404).json('invalid email')
//         }

//     } catch (e) {
//         res.json(e)
//     }
// }
doctorCltr.listDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
        res.json(doctors)
    } catch(e) {
        res.json(e) 
    }
}

doctorCltr.addDoctor = async (req, res) => {
    const { body } = req 
    const doctor = new Doctor(body) 
    try {
        await doctor.save()
        res.json(doctor)
    } catch(e) {
        res.json(e) 
    }
}
module.exports=doctorCltr