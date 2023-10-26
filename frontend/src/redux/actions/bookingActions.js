// import axios from 'axios';

// export const createBooking = (bookingData) => {
//     return async (dispatch) => {
//         try {
//             // Send bookingData to the backend API endpoint
//             const response = await axios.post('/api/bookings', bookingData);
//             dispatch({ type: 'BOOKING_SUCCESS', payload: response.data.booking });
//         } catch (error) {
//             dispatch({ type: 'BOOKING_ERROR', payload: error.response.data.message });
//         }
//     };
// };
import axios from 'axios';

export const createPaymentIntent = (amount) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3050/api/create-payment-intent', {
      amount,
    });
    return response.data.clientSecret;
  } catch (error) {
    console.error(error);
  }
};
