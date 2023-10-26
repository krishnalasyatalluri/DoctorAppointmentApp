
// // // // // bookingCltr = {}
// // // // // bookingCltr.addNewBooking = async (req, res) => {
// // // // //     try {
// // // // //         // Extract appointment data from request body
// // // // //         const { category, issue, activeCategory, date, time, notes, userId } = req.body;

// // // // //         // Create a new appointment instance
// // // // //         const appointment = new Booking({
// // // // //             category,
// // // // //             issue,
// // // // //             activeCategory,
// // // // //             date,
// // // // //             time,
// // // // //             notes,
// // // // //             userId,
// // // // //         });

// // // // //         // Save the appointment to the database
// // // // //         await booking.save();

// // // // //         // Send a success response
// // // // //         res.status(201).json({ message: 'Appointment booked successfully!' });
// // // // //     } catch (error) {
// // // // //         // Handle errors and send an error response
// // // // //         console.error(error);
// // // // //         res.status(500).json({ error: 'Failed to book appointment.' });
// // // // //     }
// // // // // }


// // // // // module.exports = bookingCltr;
// // // // const Booking = require('../models/bookingModel');
// // // // const bookingCltr={}
// // // // bookingCltr.createBooking = async (req, res) => {
// // // //     try {
// // // //         const { date, patientId, doctorId, totalAmount, paymentMode, paymentStatus, bookingCompletion } = req.body;
// // // //         const booking = new Booking({
// // // //             date,
// // // //             patientId,
// // // //             doctorId,
// // // //             totalAmount,
// // // //             paymentMode,
// // // //             paymentStatus,
// // // //             bookingCompletion
// // // //         });

// // // //         await booking.save();
// // // //         res.status(201).json({ message: 'Booking created successfully' });
// // // //     } catch (error) {
// // // //         res.status(500).json({ error: 'Internal Server Error' });
// // // //     }
// // // // };
// // // // module.exports=bookingCltr
// // // const express = require("express");
// // // const router = express.Router();
// // // const stripe = require("stripe")("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");
// // // const Booking = require("../models/bookingModel");
// // // const bookingCltr={}

// // // bookingCltr.create( async (req, res) => {
// // //     try {
// // //         const { date, patientId, doctorId, totalAmount, paymentMethod } = req.body;
// // //         // Create a new Booking document
// // //         const booking = new Booking({
// // //             date,
// // //             patientId,
// // //             doctorId,
// // //             totalAmount,
// // //             paymentMode: "stripe",
// // //             paymentStatus: false,
// // //             bookingCompletion: 0
// // //         });

// // //         // Charge the customer using Stripe API
// // //         const paymentIntent = await stripe.paymentIntents.create({
// // //             amount: totalAmount * 100, // Amount in cents
// // //             currency: "usd", // Change to your currency code
// // //             payment_method: paymentMethod,
// // //             confirm: true
// // //         });

// // //         // If payment is successful, update booking status and save to the database
// // //         if (paymentIntent.status === "succeeded") {
// // //             booking.paymentStatus = true;
// // //             booking.bookingCompletion = 100;
// // //             await booking.save();
// // //             res.status(200).json({ success: true, booking });
// // //         } else {
// // //             res.status(400).json({ success: false, message: "Payment failed" });
// // //         }
// // //     } catch (error) {
// // //         console.error(error);
// // //         res.status(500).json({ success: false, message: "Internal Server Error" });
// // //     }
// // // });

// // // module.exports = bookingCltr;
// // // routes/bookings.js
// // const express = require('express');
// // const router = express.Router();
// // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Replace with your Stripe API key
// // const Booking = require('../models/bookingModel');
// // const bookingCltr={}
// // bookingCltr.create=( async (req, res) => {
// //   try {
// //     const { name, date, description, issue, doctorId, totalAmount, paymentMode, paymentStatus, token } = req.body;

// //     const charge = await stripe.charges.create({
// //       amount: totalAmount * 100, // Convert the amount to cents
// //       currency: 'usd', // Change to your desired currency
// //       source: token,
// //       description: `Payment for booking with ${name}`,
// //     });

// //     if (charge.paid) {
// //       const booking = new Booking({
// //         date,
// //         patientId: req.user._id, // Assuming you have user authentication
// //         doctorId,
// //         totalAmount,
// //         paymentMode,
// //         paymentStatus,
// //         bookingCompletion: 0, // Set as needed
// //       });

// //       await booking.save();
// //       res.status(200).json({ message: 'Booking created successfully' });
// //     } else {
// //       res.status(400).json({ error: 'Payment failed' });
// //     }
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // module.exports = bookingCltr;

// const paymentCltr = {}
// paymentCltr.confirm = async (req, res) => {
//   const { token, doctorId, issue, selectedDate, selectedTime } = req.body;

//   try {
//     // Create a charge using Stripe
//     const charge = await stripe.charges.create({
//       amount: 5000, // Amount in cents (you can change this)
//       currency: "usd", // Currency code (you can change this)
//       source: token.id,
//       description: `Payment for appointment with Doctor ID ${doctorId}`,
//     });

//     // Store the appointment details and payment status in your database
//     // Respond with success message
//     res.status(200).json({ message: "Payment successful. Appointment booked!" });
//   } catch (error) {
//     // Handle payment error
//     console.error(error);
//     res.status(500).json({ error: "Payment failed" });
//   }
// }
// module.exports= paymentCltr
const paymentCltr = {}
paymentCltr.create = async (req, res) => {
  try {
    const { token, doctorId, issue, selectedDate, selectedTime } = req.body;

    // Charge the customer using the Stripe token
    const charge = await stripe.charges.create({
      amount: calculateAmount(issue), // Implement a function to calculate the payment amount based on the issue
      currency: 'usd',
      source: token,
    });

    // Assuming doctorId is the MongoDB _id of the doctor whose slot is being booked
    const slot = await Slot.findOneAndUpdate(
      {
        doctorId: doctorId,
        startDateTime: selectedDate + 'T' + selectedTime, // Assuming selectedDate and selectedTime are in 'YYYY-MM-DD' and 'HH:mm' format respectively
        isAvailable: true,
      },
      { $set: { isAvailable: false } },
      { new: true }
    );

    // Handle the rest of your logic (e.g., save booking details to the database)

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Payment failed' });
  }
};
module.exports=paymentCltr