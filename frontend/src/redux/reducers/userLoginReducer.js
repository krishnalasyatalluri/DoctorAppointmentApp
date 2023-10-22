const initialState={
    userData:{},
    isSuccess:false,
    isAuthenticated:true,
    isError:false,
    isLoading:true,
    errorMessage:''

}
const userLoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':{
            return {
                ...state,
                userData:action.payload,
                isLoading:false,
                isSuccess:true,
                isAuthenticated:true,
                isError:false,
                errorMessage:null 
            }

        }
        case 'LOGIN_FAIL':{
            return {
                ...state,
                userData:null,
                isLoading:false,
                isAuthenticated:false,
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
export default userLoginReducer