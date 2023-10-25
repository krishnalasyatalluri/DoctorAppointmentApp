const mongoose=require('mongoose')
const Schema=mongoose.Schema
const slotSchema=new Schema({
    doctorId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Doctor'
       
    },
    startDateTime:{
        type:Date,
        required:true
    },
    endDateTime:{
        type:Date,
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:true
    }
    


})
const Slot=mongoose.model('Slot',slotSchema)
module.exports = Slot

