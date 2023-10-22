const mongoose=require('mongoose')
const Schema=mongoose.Schema
const doctorSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true 
    },
    fullName:{
        type:String,
        required:[true,'full name is required']
    },
    contact:{
        type:Number,
        required:[true,'Contact is required']
    },
    email:{
        type:String,
        required:true
    },
    alternateContact:{
        type:Number
    },
    specialization:{
        type:String,
        enum:['Primary Care','Minor Injuries','Women Health','Mental and Behavioral Health','Children Health','Health Education and Counseling','Infections'],
        required:[true,' specialization is required']
    },
    qualification:{
        type:String,
        required:[true,' qualification is required']
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },


    experience:{
        type:Number,
        required:[true,'experience is required']
    }



},{timestamps:true})
const Doctor=mongoose.model('Doctor',doctorSchema)
module.exports = Doctor

