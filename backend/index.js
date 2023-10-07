const configureDB=require('./config/configureDB')
const express=require('express')
const cors=require('cors')
const app=express()
const PORT=4050
configureDB()
app.get('/',(req,res)=>{
    res.send('welcome to Doctor Appointment Website')
})
app.listen(PORT,()=>{
    console.log('server running on port', PORT)
})