export const usersReducer=(state ,action)=>{
    // console.warn(action)
    switch(action.Ahmed){
        case "ClEAR":
            return [];
        case "AddAllUsers":
            return action.nouran;
        case "ADDNewUser":
            return [...state,action.nouran]
    }
}