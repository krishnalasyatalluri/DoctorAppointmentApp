// const initialState = {
//     loading: false,
//     error: null,
// };

// const bookingReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'BOOKING_SUCCESS':
//             return { ...state, loading: false, error: null };
//         case 'BOOKING_FAILURE':
//             return { ...state, loading: false, error: action.error };
//         default:
//             return state;
//     }
// };

// export default bookingReducer;
const initialState = {
    // Define initial state if needed
  };
  
  const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle different booking related actions if needed
      // case 'BOOKING_CREATED':
      //   return { ...state, booking: action.payload };
      default:
        return state;
    }
  };
  
export default bookingsReducer;
  