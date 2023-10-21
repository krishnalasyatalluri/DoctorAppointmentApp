const mongoose=require('mongoose')
const Schema=mongoose.Schema
const cateogorySchema=new Schema({
    title:{
        type:String,
        required:[true,'title is required']
    },
    healthIssues:{
        type:Array,
        required:[true,'Health issues is required'],
    },

    description: {
        type: String
      
    }
    
    
},{timestamps:true})
const Category=mongoose.model('Category',cateogorySchema)
module.exports = Category

