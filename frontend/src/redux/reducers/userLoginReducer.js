const initialState = {
    userData: {},
    isSuccess: false,
    isAuthenticated: true,
    isError: false,
    isLoading: true,
    errorMessage: '',
    token: null,
    role: null

}
const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            const { userData, token, role } = action.payload;
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                isSuccess: true,
                isAuthenticated: true,
                isError: false,
                errorMessage: null,
                token:token,
                role:role,
                userId:action.payload._id
            }
            console.log(userData)

        }
        case 'LOGIN_FAIL': {
            return {
                ...state,
                userData: null,
                isLoading: false,
                isAuthenticated: false,
                isSuccess: false,
                isError: true,
                errorMessage: action.payload,
                token: null,
                role: null

            }
        }
        default: {
            return { ...state }

        }

    }


}
export default userLoginReducer