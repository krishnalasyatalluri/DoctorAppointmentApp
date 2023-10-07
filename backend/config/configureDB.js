const mongoose=require('mongoose')
const configureDB=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Doctor')
        .then((res)=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log('error connecting db',err)
        })
}
module.exports= configureDB