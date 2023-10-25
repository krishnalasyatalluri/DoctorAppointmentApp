// // // // // import React from "react";
// // // // // import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";


// // // // // const PaymentForm = ({ doctor, issue }) => {
// // // // //   const stripe = useStripe();
// // // // //   const elements = useElements();

// // // // //   const handleSubmit = async (event) => {
// // // // //     event.preventDefault();

// // // // //     if (!stripe || !elements) {
// // // // //       // Stripe.js has not yet loaded.
// // // // //       return;
// // // // //     }

// // // // //     const cardElement = elements.getElement(CardElement);

// // // // //     const { token, error } = await stripe.createToken(cardElement);

// // // // //     if (error) {
// // // // //       console.error(error);
// // // // //     } else {
// // // // //       // Send the token to your server to process the payment
// // // // //       const response = await fetch("/api/payment", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //         },
// // // // //         body: JSON.stringify({
// // // // //           token: token.id,
// // // // //           amount: calculateAmount(issue), // Implement a function to calculate the payment amount based on the issue
// // // // //         }),
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         // Payment successful, handle the success case
// // // // //         console.log("Payment Successful!");
// // // // //       } else {
// // // // //         // Payment failed, handle the error case
// // // // //         console.error("Payment Failed!");
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit}>
// // // // //       <CardElement />
// // // // //       <button type="submit" disabled={!stripe}>
// // // // //         Pay
// // // // //       </button>
// // // // //     </form>
// // // // //   );
// // // // // };

// // // // // export default PaymentForm;
// // // // // PaymentForm.js
// // // // import React, { useState } from "react";
// // // // import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// // // // const PaymentForm = ({ issue, doctor, onPaymentSuccess }) => {
// // // //     const stripe = useStripe();
// // // //     const elements = useElements();
// // // //     const [error, setError] = useState(null);

// // // //     const handleSubmit = async (event) => {
// // // //         event.preventDefault();

// // // //         if (!stripe || !elements) {
// // // //             // Stripe.js has not yet loaded.
// // // //             // Make sure to disable form submission until Stripe.js has loaded.
// // // //             return;
// // // //         }

// // // //         const { token, error } = await stripe.createToken(elements.getElement(CardElement));

// // // //         if (error) {
// // // //             setError(error.message);
// // // //         } else {
// // // //             // Send the token to your server
// // // //             // You can now create a charge or save the token for later use
// // // //             // For demonstration purposes, let's assume you have an API endpoint /charge
// // // //             // Send a request to your server with the token, issue, and doctor data
// // // //             const response = await fetch("/api/charge", {
// // // //                 method: "POST",
// // // //                 headers: {
// // // //                     "Content-Type": "application/json",
// // // //                 },
// // // //                 body: JSON.stringify({
// // // //                     token: token.id,
// // // //                     issue,
// // // //                     doctor,
// // // //                 }),
// // // //             });

// // // //             const result = await response.json();

// // // //             if (result.success) {
// // // //                 // Payment successful
// // // //                 onPaymentSuccess();
// // // //             } else {
// // // //                 // Payment failed
// // // //                 setError(result.error);
// // // //             }
// // // //         }
// // // //     };

// // // //     return (
// // // //         <form onSubmit={handleSubmit}>
// // // //             <div className="form-group">
// // // //                 <label>
// // // //                     Card details
// // // //                     <CardElement className="form-control" />
// // // //                 </label>
// // // //             </div>
// // // //             <button type="submit" className="btn btn-primary">
// // // //                 Pay ${issue.price}
// // // //             </button>
// // // //             {error && <div className="alert alert-danger mt-3">{error}</div>}
// // // //         </form>
// // // //     );
// // // // };

// // // // export default PaymentForm;
// // // import React, { useState } from "react";
// // // import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// // // const PaymentForm = ({ doctor, issue, selectedDate, selectedTime, onPaymentSuccess }) => {
// // //     const stripe = useStripe();
// // //     const elements = useElements();
// // //     const [paymentError, setPaymentError] = useState(null);

// // //     const handleSubmit = async (event) => {
// // //         event.preventDefault();

// // //         if (!stripe || !elements) {
// // //             // Stripe.js has not yet loaded.
// // //             return;
// // //         }

// // //         const { token, error } = await stripe.createToken(elements.getElement(CardElement));

// // //         if (error) {
// // //             setPaymentError(error.message);
// // //         } else {
// // //             // Send the token to your server for payment processing
// // //             // Call API endpoint to process payment on the backend
// // //             // Handle successful payment and navigate to confirmation page
// // //             onPaymentSuccess(token, doctor.id, issue, selectedDate, selectedTime);
// // //         }
// // //     };

// // //     return (
// // //         <form onSubmit={handleSubmit}>
// // //             <div className="form-group">
// // //                 <label>Card Details</label>
// // //                 <CardElement className="form-control" />
// // //             </div>
// // //             {paymentError && <div className="alert alert-danger">{paymentError}</div>}
// // //             <button type="submit" className="btn btn-primary">
// // //                 Pay Now
// // //             </button>
// // //         </form>
// // //     );
// // // };

// // // export default PaymentForm;
// // // PaymentForm.js
// // import React, { useState } from "react";
// // import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// // const PaymentForm = ({ doctor, issue, selectedDate, selectedTime, onPaymentSuccess }) => {
// //     const stripe = useStripe();
// //     const elements = useElements();
// //     const [paymentError, setPaymentError] = useState(null);

// //     const handleSubmit = async (event) => {
// //         event.preventDefault();

// //         if (!stripe || !elements) {
// //             // Stripe.js has not yet loaded.
// //             return;
// //         }

// //         const { token, error } = await stripe.createToken(elements.getElement(CardElement));

// //         if (error) {
// //             setPaymentError(error.message);
// //         } else {
// //             // Send the token to your server for payment processing
// //             // Assume you have an API endpoint '/api/payment' on your backend
// //             const response = await fetch("/api/payment", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify({
// //                     token: token.id,
// //                     doctorId: doctor._id, // Assuming doctor ID is stored in the _id field
// //                     issue,
// //                     selectedDate,
// //                     selectedTime,
// //                 }),
// //             });

// //             const result = await response.json();

// //             if (result.success) {
// //                 // Payment successful
// //                 onPaymentSuccess();
// //             } else {
// //                 // Payment failed
// //                 setPaymentError(result.error);
// //             }
// //         }
// //     };

// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <div className="form-group">
// //                 <label>Card Details</label>
// //                 <CardElement className="form-control" />
// //             </div>
// //             {paymentError && <div className="alert alert-danger">{paymentError}</div>}
// //             <button type="submit" className="btn btn-primary">
// //                 Pay Now
// //             </button>
// //         </form>
// //     );
// // };

// // export default PaymentForm;
// import React, { useState } from 'react';
// import OtherPaymentMethodsForm from './otherPaymentMethods';
// import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe('"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"');
// const StripePaymentForm = ({ issue, onPaymentSuccess }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [paymentError, setPaymentError] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not yet loaded.
//             return;
//         }

//         // Use elements.getElement to get the CardElement.
//         const cardElement = elements.getElement(CardElement);

//         // Call stripe.createToken to create a token.
//         const { token, error } = await stripe.createToken(cardElement);

//         if (error) {
//             setPaymentError(error.message);
//         } else {
//             // Send the token to your server for payment processing
//             // Handle successful payment and navigate to confirmation page
//             onPaymentSuccess(token, issue);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <label>Card Details</label>
//                 <CardElement className="form-control" />
//             </div>
//             {paymentError && <div className="alert alert-danger">{paymentError}</div>}
//             <button type="submit" className="btn btn-primary">
//                 Pay Now
//             </button>
//         </form>
//     );
// };

// const PaymentForm = ({ issue, onPaymentSuccess }) => {
//     return (
//         <div>
//         <Elements stripe={stripePromise}>
//             <StripePaymentForm issue={issue} onPaymentSuccess={onPaymentSuccess} />
//         </Elements>
//         <OtherPaymentMethodsForm issue={issue} onPaymentSuccess={onPaymentSuccess} />
//         </div>
//     );
// };

// export default PaymentForm;
import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51O41DFSFsVvTCUFtjhV9dNiTe6fftJME80hsdq69lfeBFbMiG3vTKUUHwQaW90IGfELRaOHerrCDSrMdlTububOK00i2EJww8j'); // Replace with your actual Stripe publishable key

const StripePaymentForm = ({ issue, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
            setPaymentError(error.message);
        } else {
            // Send the token to your server for payment processing
            // Call your backend API to process payment using the token
            // Handle successful payment and navigate to confirmation page
            onPaymentSuccess(token, issue);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Card Details</label>
                <CardElement className="form-control" />
            </div>
            {paymentError && <div className="alert alert-danger">{paymentError}</div>}
            <button type="submit" className="btn btn-primary">
                Pay Now
            </button>
        </form>
    );
};

const PaymentForm = ({ issue, onPaymentSuccess }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <StripePaymentForm issue={issue} onPaymentSuccess={onPaymentSuccess} />
            </Elements>
            {/* Additional payment methods and components can be added here */}
        </div>
    );
};

export default PaymentForm;
