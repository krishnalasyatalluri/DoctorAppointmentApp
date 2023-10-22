const initialState={
    userData:{},
    isSuccess:false,
    isError:false,
    isLoading:true,
    errorMessage:''

}
const userRegisterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'REGISTRATION_SUCCESS':{
            return {
                ...state,
                userData:action.payload,
                isLoading:false,
                isSuccess:true,
                isError:false,
                errorMessage:null 
            }

        }
        case 'REGISTRATION_FAIL':{
            return {
                ...state,
                userData:null,
                isLoading:false,
                isSuccess:false,
                isError:true,
                errorMessage:action.payload

            }
        }
        default:{
            return {...state}

        }
            
    }

    
}
export default userRegisterReducer