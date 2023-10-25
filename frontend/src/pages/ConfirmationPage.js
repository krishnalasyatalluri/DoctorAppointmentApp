// const ConfirmationPage=(props)=>{
//     return (
//         <div>
//             confirm
//         </div>
//     )
// }
// export default ConfirmationPage
import React from 'react';

const ConfirmationPage = () => {
    return (
        <div className="container mt-4">
            <h2>Booking Confirmation</h2>
            <p>Your appointment has been successfully booked!</p>
            <p>Thank you for choosing our service.</p>
            {/* Additional confirmation details can be added here */}
        </div>
    );
};

export default ConfirmationPage;
