const mongoose=require('mongoose')
const Schema=mongoose.Schema
const paymentSchema=new Schema({
    paymentId:{
        type:String
    },
    status:{
        type:Boolean,
        required:true
    }
    


})
const Payment=mongoose.model('Payment',paymentSchema)
module.exports = Payment

