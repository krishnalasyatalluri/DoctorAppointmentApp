import axios from 'axios';

export const createBooking = (bookingData) => async (dispatch) => {
  try {
    // Make API call to backend to create a new booking
    const response = await axios.post('/api/bookings', bookingData);

    // Dispatch action to update Redux store or handle as needed
    // For example:
    // dispatch({ type: 'BOOKING_CREATED', payload: response.data });
  } catch (error) {
    // Handle error
  }
};
