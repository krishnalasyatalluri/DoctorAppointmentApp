import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const OtherPaymentMethodsForm = ({ issue, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);

    const handleGooglePayPayment = async () => {
        const paymentRequest = stripe.paymentRequest({
            country: 'INDIA',
            currency: 'inr',
            total: {
                label: 'Total',
                amount: issue.price * 100, // Stripe expects amount in cents
            },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        const { paymentMethod, error } = await stripe.confirmPaymentIntent({
            payment_method: paymentRequest.paymentMethod.id,
            confirmation_method: 'manual',
        });

        if (error) {
            setPaymentError(error.message);
        } else {
            // Send paymentMethod.id to your server for further processing
            // Handle successful payment and navigate to confirmation page
            onPaymentSuccess(paymentMethod);
        }
    };

    return (
        <div>
            <h3>Other Payment Methods</h3>
            <button onClick={handleGooglePayPayment}>Pay with Google Pay</button>

            {paymentError && <div className="alert alert-danger">{paymentError}</div>}
        </div>
    );
};

export default OtherPaymentMethodsForm;
