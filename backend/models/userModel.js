const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,'username is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['patient','doctor','admin'],
        default:'patient'
    }
    
    
},{timestamps:true})
const User=mongoose.model('User',userSchema)
module.exports = User

