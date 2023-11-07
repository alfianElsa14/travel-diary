import { produce } from "immer";
import { SET_NEW_POST } from "./constant";

export const initialState = {
    post:[]
}

const addReducer = (state = initialState, action) => 
produce(state, (draft) => {
    switch (action.type) {
        case SET_NEW_POST:
            const newPost = [...state.post, action.post];
            draft.post = newPost; 
            break;
    
        default:
            break;
    }
})

export default addReducer;