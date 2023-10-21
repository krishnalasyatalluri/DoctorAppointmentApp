import axios from 'axios'
export const asyncGetAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            const doctors = await axios.get('http://localhost:3050/api/doctors')
            console.log(doctors.data)
            dispatch(getDoctors(doctors.data))
        } catch (e) {
            console.log(e)

        }

    }

}
export const getDoctors=(doctorsData)=>{
    return{
        type:'GET_ALL_DOCTORS',
        payload:doctorsData

    }

}