// const SlotsPage=(props)=>{
//     return(
//         <div>
//             slots
//         </div>
//     )
// }
// export default SlotsPage
import React, { useState } from 'react';
import axios from 'axios';

const SlotsPage = (props) => {
    const [doctorId, setDoctorId] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        // Send a request to create a new slot
        axios.post('http://localhost:3050/api/create-slot', { doctorId, startDateTime, endDateTime })
            .then(response => {
                console.log(response.data.message);
                // Clear the form after successful slot creation
                setDoctorId('');
                setStartDateTime('');
                setEndDateTime('');
            })
            .catch(error => {
                console.error('Error creating slot:', error);
            });
    };

    return (
        <div>
            <h2>Create New Slot</h2>
            <form onSubmit={handleSubmit}>
                <label>Doctor ID:</label>
                <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required /><br />
                <label>Start Date and Time:</label><br />
                <input type="datetime-local" value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)} required /><br />
                <label>End Date and Time:</label><br />
                <input type="datetime-local" value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)} required /><br />
                <button type="submit">Create Slot</button>
            </form>
        </div>
    );
}

export default SlotsPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SlotsPage = () => {
//     const [slots, setSlots] = useState([]);
//     const [doctorId, setDoctorId] = useState('');
//     const [startDateTime, setStartDateTime] = useState('');
//     const [endDateTime, setEndDateTime] = useState('');
//     const [showCreateSlotForm, setShowCreateSlotForm] = useState(false);

//     useEffect(() => {
//         // Fetch slots from the server
//         axios.get('/api/slots')
//             .then(response => {
//                 setSlots(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching slots:', error);
//             });
//     }, []); // Empty dependency array ensures this effect runs once after the initial render

//     const handleCreateSlot = () => {
//         // Send a request to create a new slot
//         axios.post('/api/slots/create', { doctorId, startDateTime, endDateTime })
//             .then(response => {
//                 console.log(response.data.message);
//                 // Close the form, update the slots list, and reset form fields
//                 setShowCreateSlotForm(false);
//                 setDoctorId('');
//                 setStartDateTime('');
//                 setEndDateTime('');
//                 // Refresh slots after creating a new slot
//                 axios.get('/api/slots')
//                     .then(response => {
//                         setSlots(response.data);
//                     })
//                     .catch(error => {
//                         console.error('Error fetching slots:', error);
//                     });
//             })
//             .catch(error => {
//                 console.error('Error creating slot:', error);
//             });
//     };

//     return (
//         <div>
//             <h2>Slots</h2>
//             <button onClick={() => setShowCreateSlotForm(true)}>Create New Slot</button>

//             {showCreateSlotForm && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h2>Create New Slot</h2>
//                         <label>Doctor ID:</label>
//                         <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />
//                         <label>Start Date and Time:</label>
//                         <input type="datetime-local" value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)} required />
//                         <label>End Date and Time:</label>
//                         <input type="datetime-local" value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)} required />
//                         <button onClick={handleCreateSlot}>Create Slot</button>
//                         <button onClick={() => setShowCreateSlotForm(false)}>Cancel</button>
//                     </div>
//                 </div>
//             )}

//             <ul>
//                 {slots.map(slot => (
//                     <li key={slot._id}>
//                         {slot.startDateTime} - {slot.endDateTime}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SlotsPage;
