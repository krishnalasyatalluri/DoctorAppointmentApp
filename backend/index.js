const configureDB = require('./config/db')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const userCltr = require('./controllers/user-cltr')
const authenticateUser = require('./middlewares/authenticateUser')
const authorizeUser = require('./middlewares/authorizeUser')
const categoryCltr = require('./controllers/category-cltr')
const doctorCltr = require('./controllers/doctor-cltr')
const addressCltr = require('./controllers/address-cltr')
const paymentCltr = require('./controllers/payment-cltr')
const slotCltr = require('./controllers/slot-cltr')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
const app = express()
app.use(express.json())
app.use(bodyParser.json());
const corsOptions = {
    origin: ['http://localhost:3000', 'https://js.stripe.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions))
const PORT = 3050
configureDB()
//public routes
app.post('/api/users/register', userCltr.register)//admin,doctor,patient
app.post('/api/users/login', userCltr.login)//admin,doctor,patient
//user specific -private routes
app.get('/api/users/profile', authenticateUser, userCltr.account)//admin,doctor,patient
app.put('/api/users/profile', authenticateUser, userCltr.updateAccount)//admin,doctor,patient
//authorization - only admin
app.get('/api/all/users', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, userCltr.getAllUsers)
app.delete('/api/all/users', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, userCltr.removeUser)
//category - controller
app.get('/api/categories', categoryCltr.listAll)//admin,doctor,patient
app.post('/api/categories', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, categoryCltr.createCategory)//admin
app.put('/api/categories', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, categoryCltr.editCategory)
app.delete('/api/all/users', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['admin']
    next()
}, authorizeUser, categoryCltr.removeCategory)
//adress controller
app.post('/api/address', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['patient']
    next()
}, authorizeUser, addressCltr.address)
app.put('/api/update/address', authenticateUser, (req, res, next) => {
    req.permittedRoles = ['patient']
    next()
}, authorizeUser, addressCltr.updateAddress)
//bookings
app.post('/api/payments', paymentCltr.create)
// doctors -controller
// app.get('/api/doctors',authenticateUser,(req,res,next)=>{
//     req.permittedRoles=['doctor','admin']
//     next()
// },authorizeUser,doctorCltr.listDoctors)
app.get('/api/doctors', doctorCltr.listDoctors)

// app.post('/api/doctors',(req,res,next)=>{
//     req.permittedRoles=['doctor']
//     next()
// },authorizeUser,doctorCltr.addDoctor)
app.post('/api/doctors', doctorCltr.addDoctor)
// app.get('/api/doctor/:id',authenticateUser,(req,res,next)=>{
//     req.permittedRoles=['doctor']
//     next()
// },authorizeUser,doctorCltr.getMyDetails)
// app.post('/api/payments',paymentCltr.confirm)

//slots
app.get('/slots/:doctorId', slotCltr.findSlots)
//payment

app.get('/', (req, res) => {
    res.send('welcome to Doctor Appointment Website')
})
app.listen(PORT, () => {
    console.log('server running on port', PORT)
})