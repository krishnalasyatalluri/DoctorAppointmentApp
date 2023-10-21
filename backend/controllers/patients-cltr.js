const bcrypt = require('bcryptjs')
const pick= require('lodash/pick')
const jwt = require('jsonwebtoken')
const Patient = require("../models/patientModel")
const patientsCltr = {}


patientsCltr.register = async (req, res) => {
    try {
        const body =pick(req.body, ['fullName', 'email', 'password'])
        const patient = new Patient(body)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(patient.password, salt)
        patient.password = hashedPassword
        const patientRecord = await patient.save()
        res.json(patientRecord)

    } catch (e) {
        res.json(e)

    }


},
patientsCltr.login = async(req, res) => {
    try {
        const body =pick(req.body, ['email', 'password'])
        const patient = await Patient.findOne({ email: body.email })
        if (patient) {
            const result = await bcrypt.compare(body.password, patient.password)
            if (result) {//email and password correct
                //generate a token and send the token
                const tokenData = {
                    id: patient._id
                }
                const token = jwt.sign(tokenData, process.env.JWT_SECRET)

                res.json({
                    token: `Bearer ${token}`
                })
            }
            else {//email is correct,password wrong
                res.status(404).json('invalid password/email')
            }
        }
        else {// user accnt not found
            res.status(404).json('invalid email/password')
        }

    } catch (e) {
        res.json(e)
    }
}
module.exports=patientsCltr