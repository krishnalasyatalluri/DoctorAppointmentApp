// const initialState={
//     categoryList:{}
// }
// const categoryReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case 'CATEGORY_LIST':{
//             return {
//                 ...state,
//                 categoryList:action.payload
//             }

//         }
//         default:{
//             return {...state}

//         }
//     }
// }
const initialValue = []
const categoryReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "GET_All_CATEGORIES": {
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default categoryReducer