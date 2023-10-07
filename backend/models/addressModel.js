const mongoose=require('mongoose')
const Schema=mongoose.Schema
const addressSchema=new Schema({
    patientId:{
        type:Schema.Types.patientId,
        ref:'Patient',
        required:true

    },
    city:{
        type:String,
        required:[true,'city is required']

    },
    state:{
        type:String,
        required:[true,'state is required']
    },
    contact:{
        type:Number,
        required:[true,'Contact is required']
    },
    landmark:{
        type:String,
        required:[true,'landmark is required']
    },
    street:{
        type:String,
        required:[true,'street is required']
    },
    pincode:{
        type:Number,
        required:[true,'pincode is required']
    },
    
    


})
const Address=mongoose.model('Address',addressSchema)
module.exports =Address 

