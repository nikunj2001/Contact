export const contactReducer = (state,action)=>{
        switch (action.type) {
            case "ADD_CONTACT":
                return [...state,action.newContact];
                break;
        
            case "REMOVE_CONTACT":
                return [...state,action.newContact];
                if(window.confirm("DO YOU REALLY WANT TO DELTE THIS")){
                   const filtered= state.filter(contact=>contact.id!==action.id)
                            return filtered
                    
                    
                }
                break;
        
            default:
                return state;
        }
}