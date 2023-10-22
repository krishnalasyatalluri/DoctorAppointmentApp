// import NavBar from "../components/NavBar"
// const BookingsPage=(props)=>{
//     return(
//         <div>
//             <h1>bookings</

//         </div>
//     )
// }
// export default BookingsPage
import React, { useState } from 'react';

const BookingsPage = ({ location }) => {
    const { category, issue, activeCategory } = location.state;
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        notes: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and appointment booking logic here
        // Send formData to the backend API to book the appointment
    };

    return (
        <div className="container mt-4">
            <h2>Book an Appointment</h2>
            <h3>Category: {category.title}</h3>
            <h4>Issue: {issue.title}</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input type="date" className="form-control" id="date" name="date" onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Time:</label>
                    <input type="time" className="form-control" id="time" name="time" onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="notes" className="form-label">Additional Notes:</label>
                    <textarea className="form-control" id="notes" name="notes" rows="3" onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookingsPage;
