const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bookingSchema=new Schema({
    date:{
        type:Date,
        required:true
    },
    patientId:{
        type:Schema.Types.ObjectId,
        ref:'Patient',
        required:true

    },
    doctorId:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
        required:true

    },
    totalAmount:{
        type:Number,
        required:[true,'Amount is required']
    },
    paymentMode:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:Boolean,
        required:true
    },
    

    bookingCompletion:{
        type:Number,
        required:[true,'experience is required']
    }


})
const Booking=mongoose.model('Booking',bookingSchema)
module.exports = Booking

