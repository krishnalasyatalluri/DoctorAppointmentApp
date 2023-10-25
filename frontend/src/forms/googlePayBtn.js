import React from 'react';

const GooglePayButton = ({ onGooglePayClick }) => {
    const handleGooglePayClick = () => {
        // Call Google Pay API and handle payment logic here
        // Example: onGooglePayClick();
    };

    return (
        <button onClick={handleGooglePayClick} className="btn btn-primary">
            Pay with Google Pay
        </button>
    );
};

export default GooglePayButton;
