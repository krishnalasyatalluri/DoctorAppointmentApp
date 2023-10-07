const mongoose=require('mongoose')
const Schema=mongoose.Schema
const patientSchema=new Schema({
    patientId:{
        type:String,
    },
    firstName:{
        type:String,
        required:[true,'first name is required']
    },
    lastName:{
        type:String,
        required:[true,'last name is required']
    },
    contact:{
        type:Number,
        required:[true,'Contact is required']
    },
    alternateContact:{
        type:Number
    },
    


})
const Patient=mongoose.model('Patient',patientSchema)
module.exports = Patient

