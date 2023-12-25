
export const cartReducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case "FetchData":
            console.log(action.payload);
                return {
                    categories:[...state.categories,...action.payload?.data]
                }
        
        default:
            return state;
    }
}
