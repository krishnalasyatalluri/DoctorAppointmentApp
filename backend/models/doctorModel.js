const mongoose=require('mongoose')
const Schema=mongoose.Schema
const doctorSchema=new Schema({
    doctorId:{
        type:String
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
    specialization:{
        type:String,
        required:[true,' specialization is required']
    },
    qualification:{
        type:String,
        required:[true,' specialization is required']
    },

    experience:{
        type:Number,
        required:[true,'experience is required']
    }


})
const Doctor=mongoose.model('Doctor',doctorSchema)
module.exports = Doctor

