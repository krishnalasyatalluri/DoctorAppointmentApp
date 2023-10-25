
// // // // import React, { useState } from 'react';
// // // // import { useLocation, useHistory } from 'react-router-dom';
// // // // import PaymentForm from '../forms/paymentForm'; // Assuming you have a PaymentForm component
// // // // import { Button } from 'reactstrap';

// // // // const BookingsPage = (props) => {
// // // //     const location = useLocation();
// // // //     const history = useHistory();
// // // //     const { activeCategory, issue } = location.state;
// // // //     const [isPaymentOpen, setIsPaymentOpen] = useState(false);

// // // //     const handlePaymentSuccess = () => {
// // // //         // Handle successful payment logic (e.g., store the booking, show confirmation message)
// // // //         history.push('/confirmation'); // Redirect to confirmation page after successful payment
// // // //     };

// // // //     return (
// // // //         <div className="container mt-4">
// // // //             <h2>Confirm Your Booking</h2>
// // // //             <h3>Selected Health Issue: {issue.title}</h3>
// // // //             <h4>Category: {activeCategory.title}</h4>
// // // //             <p>Price: Rs. {issue.price}</p>

// // // //             {/* Button to open payment form */}
// // // //             <Button color="primary" onClick={() => setIsPaymentOpen(true)}>
// // // //                 Make an Appointment
// // // //             </Button>

// // // //             {/* Payment Form */}
// // // //             {isPaymentOpen && (
// // // //                 <div className="mt-4">
// // // //                     <h4>Payment Details</h4>
// // // //                     <PaymentForm issue={issue} onPaymentSuccess={handlePaymentSuccess} />
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default BookingsPage;
// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useHistory } from 'react-router-dom';
// // import PaymentForm from '../forms/paymentForm';
// // import { Button, Alert, Spinner } from 'reactstrap';

// // const BookingsPage = () => {
// //     const location = useLocation();
// //     const history = useHistory();
// //     const { activeCategory, issue } = location.state;
// //     const [isPaymentOpen, setIsPaymentOpen] = useState(false);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const [paymentError, setPaymentError] = useState(null);

// //     const handlePaymentSuccess = () => {
// //         setIsLoading(true);
// //         // Simulate payment processing delay
// //         setTimeout(() => {
// //             setIsLoading(false);
// //             // Handle successful payment logic (e.g., store the booking, show confirmation message)
// //             history.push('/confirmation'); // Redirect to confirmation page after successful payment
// //         }, 2000);
// //     };

// //     useEffect(() => {
// //         if (paymentError) {
// //             // Scroll to the top of the page to show error message
// //             window.scrollTo(0, 0);
// //         }
// //     }, [paymentError]);

// //     return (
// //         <div className="container mt-4">
// //             <h2>Confirm Your Booking</h2>
// //             <h3>Selected Health Issue: {issue.title}</h3>
// //             <h4>Category: {activeCategory.title}</h4>
// //             <p>Price: Rs. {issue.price}</p>

// //             {/* Button to open payment form */}
// //             <Button color="primary" onClick={() => setIsPaymentOpen(true)}>
// //                 Make an Appointment
// //             </Button>

// //             {/* Loading Spinner */}
// //             {isLoading && <Spinner color="primary" className="mt-3" />}

// //             {/* Payment Form */}
// //             {isPaymentOpen && !isLoading && (
// //                 <div className="mt-4">
// //                     <h4>Payment Details</h4>
// //                     {paymentError && <Alert color="danger">{paymentError}</Alert>}
// //                     <PaymentForm issue={issue} onPaymentSuccess={handlePaymentSuccess} onError={setPaymentError} />
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default BookingsPage;
// // // import React, { useState } from 'react';
// // // import PaymentForm from '../forms/paymentForm'; // Import the PaymentForm component

// // // const BookingsPage = ({ activeCategory, issue }) => {
// // //     const [isPaymentOpen, setIsPaymentOpen] = useState(false);

// // //     const handlePaymentSuccess = (token, issue) => {
// // //         // Call your backend API to create a booking using the token and issue details
// // //         // Handle booking creation logic and show confirmation message
// // //     };

// // //     return (
// // //         <div className="container mt-4">
// // //             <h2>Confirm Your Booking</h2>
// // //             <h3>Selected Health Issue: {issue}</h3>
// // //             <h4>Category: {activeCategory}</h4>
// // //             <p>Price: Rs. {issue}</p>

// // //             {/* Button to open payment form */}
// // //             <button className="btn btn-primary" onClick={() => setIsPaymentOpen(true)}>
// // //                 Make an Appointment
// // //             </button>

// // //             {/* Payment Form */}
// // //             {isPaymentOpen && <PaymentForm issue={issue} onPaymentSuccess={handlePaymentSuccess} />}
// // //         </div>
// // //     );
// // // };

// // // export default BookingsPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; // Assuming you are using Bootstrap for styling

// const BookingsPage = () => {
//     const [availableSlots, setAvailableSlots] = useState([]);
//     const [selectedSlot, setSelectedSlot] = useState(null);
//     const [selectedDate, setSelectedDate] = useState('');
//     const [selectedTime, setSelectedTime] = useState('');

//     useEffect(() => {
//         const fetchAvailableSlots = async () => {
//             try {
//                 const response = await axios.get(`/api/slots/${doctorId}`);
//                 setAvailableSlots(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchAvailableSlots();
//     }, [doctorId]);

//     const handleSlotSelect = (slot) => {
//         setSelectedSlot(slot);
//     };

//     const handleBookingSubmit = async (event) => {
//         event.preventDefault();
//         if (!selectedSlot || !selectedDate || !selectedTime) {
//             // Handle error, show a message to the user
//             return;
//         }

//         try {
//             // Send a request to your backend API to create the booking
//             const response = await axios.post('/api/bookings', {
//                 slotId: selectedSlot._id,
//                 date: selectedDate,
//                 time: selectedTime,
//                 // You may need to include other necessary data for the booking, like patient ID, doctor ID, etc.
//             });

//             if (response.data.success) {
//                 // Booking successful, redirect to confirmation page
//                 history.push('/confirmation'); // Assuming you have access to history object from React Router
//             } else {
//                 // Booking failed, handle the error, show a message to the user
//                 // You can set an error state and display an error message to the user
//             }
//         } catch (error) {
//             // Handle the error, show a message to the user
//             // You can set an error state and display an error message to the user
//             console.error(error);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Confirm Your Booking</h2>

//             {/* Display available slots as buttons */}
//             {availableSlots.map((slot) => (
//                 <Button key={slot._id} color="primary" onClick={() => handleSlotSelect(slot)}>
//                     {new Date(slot.startDateTime).toLocaleString()} - {new Date(slot.endDateTime).toLocaleString()}
//                 </Button>
//             ))}

//             {/* Booking Form */}
//             {selectedSlot && (
//                 <Form className="mt-4" onSubmit={handleBookingSubmit}>
//                     <FormGroup>
//                         <Label for="date">Date:</Label>
//                         <Input type="date" id="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="time">Time:</Label>
//                         <Input type="time" id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
//                     </FormGroup>
//                     <Button type="submit" color="success">
//                         Book Slot
//                     </Button>
//                 </Form>
//             )}
//         </div>
//     );
// };

// export default BookingsPage;
