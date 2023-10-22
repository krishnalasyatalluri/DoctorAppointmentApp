const mongoose=require('mongoose')
const Schema=mongoose.Schema
const patientSchema=new Schema({
    patientId:{
        type:Schema.Types.ObjectId,
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:[true,'first name is required']
    },
    email:{
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
    


},{timestamps:true})
const Patient=mongoose.model('Patient',patientSchema)
module.exports = Patient

