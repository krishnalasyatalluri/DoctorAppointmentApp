
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userLoginReducer from '../reducers/userLoginReducer'
import userRegisterReducer from '../reducers/userRegisterReducer'
import categoryReducer from '../reducers/categoryReducer'
import doctorsReducer from '../reducers/doctorsReducer'
import bookingsReducer from '../reducers/bookingReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        registrationInfo:userRegisterReducer,
        loginInfo:userLoginReducer,
        categories:categoryReducer,
        doctors:doctorsReducer,
        bookings:bookingsReducer
    
    }),applyMiddleware(thunk))
    return store
}
export default configureStore