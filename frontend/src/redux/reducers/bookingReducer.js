// const initialState = {
//     booking: null,
//     error: null,
// };

// const bookingReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'BOOKING_SUCCESS':
//             return { ...state, booking: action.payload, error: null };
//         case 'BOOKING_ERROR':
//             return { ...state, booking: null, error: action.payload };
//         default:
//             return state;
//     }
// };

// export default bookingReducer;
const initialState = {
    clientSecret: null,
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CLIENT_SECRET':
        return { ...state, clientSecret: action.payload };
      default:
        return state;
    }
  };
  
export default bookingReducer;
  
