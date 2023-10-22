const initialValue=[]
const doctorsReducer=(state=initialValue,action)=>{
    switch(action.type){
        case "GET_ALL_DOCTORS":{
            return [...action.payload]
        }
        default:
            return [...state]
    }

    
}
export default doctorsReducer