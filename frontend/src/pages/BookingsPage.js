// // const BookingsPage=(props)=>{
// //   return(
// //     <div>

// //     </div>
// //   )
// // }
// // export default BookingsPage
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BookingsPage = (props) => {
//   const [availableSlots, setAvailableSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   // Fetch available slots from the backend
//   useEffect(() => {
//     axios.get('api/slots')
//       .then(response => {
//         setAvailableSlots(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching slots:', error);
//       });
//   }, []);

//   // Function to handle slot booking
//   const handleSlotBooking = () => {
//     if (selectedSlot) {
//       axios.post('api/slots', { slotId: selectedSlot._id })
//         .then(response => {
//           console.log(response.data.message);
//           // Refresh available slots after booking
//           axios.get('/slots')
//             .then(response => {
//               setAvailableSlots(response.data);
//             })
//             .catch(error => {
//               console.error('Error fetching slots:', error);
//             });
//         })
//         .catch(error => {
//           console.error('Error booking slot:', error);
//         });
//     } else {
//       console.log('No slot selected');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Available Slots</h1>
//       <ul>
//         {availableSlots.map(slot => (
//           <li key={slot._id}>
//             {slot.startDateTime} - {slot.endDateTime}
//             <button onClick={() => setSelectedSlot(slot)}>Book Slot</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleSlotBooking}>Book Selected Slot</button>
//     </div>
//   );
// }

// export default BookingsPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SlotsPage from './SlotsPage';
import CreateSlotForm from '../forms/CreateSlotForm';
import AvailableSlots from '../forms/availableSlots';

const BookingsPage = (props) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [userRole, setUserRole] = useState('');

  // Fetch user role from the backend
  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user.data.role'));

    // Check if user data exists in localStorage and has a role property
    if (userData && userData.role) {
      setUserRole(userData.role);
    } else {
      // Handle the case where user data is not found or does not have a role property
      console.error('Error: User data not found in localStorage or missing role property.');
    }
  }, []);

  // Fetch available slots from the backend if the user is a patient
  useEffect(() => {
    if (userRole === 'patient') {
      axios.get('/api/slots/:id')
        .then(response => {
          console.log(response.data)
          setAvailableSlots(response.data);
          
        })
        .catch(error => {
          console.error('Error fetching slots:', error);
        });
    }
  }, [userRole]);

  // Function to handle slot booking
  const handleSlotBooking = () => {
    if (userRole === 'patient' && selectedSlot) {
      axios.post('/api/bookings', { slotId: selectedSlot._id })
        .then(response => {
          console.log(response.data.message);
          // Refresh available slots after booking
          axios.get('/api/slots')
            .then(response => {
              setAvailableSlots(response.data);
            })
            .catch(error => {
              console.error('Error fetching slots:', error);
            });
        })
        .catch(error => {
          console.error('Error booking slot:', error);
        });
    } else if (userRole === 'doctor') {
      // Logic for doctors to create slots
      // ...
    } else {
      console.log('No slot selected');
    }
  };

  return (
    <div className="App">
      <h1>Available Slots</h1>
      <ul>
        {availableSlots.map(slot => (
          <li key={slot._id}>
            {slot.startDateTime} - {slot.endDateTime}
            {userRole === 'patient' && <button onClick={() => setSelectedSlot(slot)}>Book Slot</button>}
          </li>
        ))}
      </ul>
      {userRole === 'doctor' && <button onClick={CreateSlotForm}>Create Slot</button>}
      {userRole === 'patient' && <button onClick={handleSlotBooking}>Book Selected Slot</button>}
    </div>
  );
}

export default BookingsPage;
