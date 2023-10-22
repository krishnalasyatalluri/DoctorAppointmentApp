import axios from 'axios'
import Swal from 'sweetalert2'
export const asyncUserLogin=(logInData,props)=>{
    return async(dispatch,getState)=>{
        try{
            const result=await axios.post(`http://localhost:3050/api/users/login`,logInData)
            console.log(result)
            localStorage.setItem('token',result.data.token)
            localStorage.setItem('role',result.data.role)
            dispatch(successLogin(result.data))
            Swal.fire(
                'Good job!',
                `${result.data.message}`,
                'success'
            )
            props.history.push('/home')

        }catch (error) {
            // dispatch(errorLogin(`${error.result.data.message}`))
            // Swal.fire(
            //     'Login Failed',
            //     'Try Again'
            //     `${error.result.data.message}`,
            //     {icon:'error'}
                
            // )
            alert(error)


            
        }
    

    }
}
export const successLogin = (logInData) => {
    return { type: 'LOGIN_SUCCESS', payload: logInData };
};

export const errorLogin = (error) => {
    return { type: 'LOGIN_FAIL', payload: error };
};