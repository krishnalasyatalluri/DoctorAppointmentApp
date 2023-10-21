import axios from 'axios'
import Swal from 'sweetalert2'
export const asyncUserRegister = (registeredData,props) => {
    return async (dispatch,getState) => {
        try {
            const result = await axios.post(`http://localhost:3050/api/users/register`, registeredData)
            Swal.fire(
                'Good job!',
                `${result.data.message}`,
                'success'
            )

            dispatch(registrationSuccess(result.data))
            props.history.push('/login')

        } catch (e) {
            Swal.fire(
                'Registration Failed Try Again'
            )
            dispatch(registrationFail(e.message))
            
        }

    }
}
export const registrationSuccess = (registeredData) => {
    return { type: 'REGISTRATION_SUCCESS', payload: registeredData }
}
export const registrationFail = (error) => {
    return { type: 'REGISTRATION_FAIL', payload: error }
}