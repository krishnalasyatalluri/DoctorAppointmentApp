// // import NavBar from "../components/NavBar"
// // import { useHistory,useLocation } from "react-router-dom/cjs/react-router-dom.min"
// // const BookingsPage=(props)=>{
// //     const location=useLocation()
// //     const {activeCategory,issue} =location.state
// //     return(
// //         <div>
// //             <h1>bookings</h1>

// //         </div>
// //     )
// // }
// // export default BookingsPage
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createBooking } from '../redux/actions/bookingActions';
// import StripeCheckout from 'react-stripe-checkout';

// const BookingPage = ({ selectedSlot, doctor }) => {
//     const dispatch = useDispatch();
//     const [paymentStatus, setPaymentStatus] = useState(false);
//     const booking = useSelector((state) => state.booking.booking);
//     const error = useSelector((state) => state.booking.error);

//     const handleToken = (token) => {
//         // Handle payment with token details (using Stripe API)
//         // Once payment is successful, setPaymentStatus(true)
//         // Dispatch createBooking action to create a booking
//         const bookingData = {
//             date: selectedSlot.startDateTime,
//             patientId: 'patient_id', // You need to replace this with the actual patient ID
//             doctorId: doctor.id,
//             totalAmount: selectedSlot.price,
//             paymentMode: 'Stripe', // Assuming payment mode is Stripe
//             paymentStatus: true,
//             bookingCompletion: 5, // Set this to an appropriate value
//         };

//         dispatch(createBooking(bookingData));
//         setPaymentStatus(true);
//     };

//     return (
//         <div className="container mt-4">
//             {!paymentStatus ? (
//                 <StripeCheckout
//                     stripeKey="your_stripe_public_key"
//                     token={handleToken}
//                     amount={selectedSlot.price * 100} // Amount in cents
//                     name={`Appointment with Dr. ${doctor.fullName}`}
//                 />
//             ) : (
//                 <div>
//                     {booking ? (
//                         <div>
//                             <h2>Payment Successful!</h2>
//                             {/* Display booking details */}
//                             <p>Date: {booking.date}</p>
//                             <p>Total Amount: {booking.totalAmount}</p>
//                         </div>
//                     ) : (
//                         <div>
//                             <h2>Booking Failed!</h2>
//                             <p>{error}</p>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookingPage;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPaymentIntent } from '../redux/actions/bookingActions';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const BookingPage = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1000); // Example amount in cents
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  
  useEffect(() => {
    // Fetch client secret from the server when component mounts
    const getClientSecret = async () => {
      const secret = await dispatch(createPaymentIntent(amount));
      setClientSecret(secret);
    };
    getClientSecret();
  }, [dispatch, amount]);

  const handlePayment = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);
    
    // Confirm the card payment
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      console.error(error.message);
    } else {
      console.log('PaymentIntent confirmed:', paymentIntent);
      // Handle successful payment
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label>Card details</label>
          <CardElement className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Pay ${amount / 100}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
