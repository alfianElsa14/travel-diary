import { isDraft, produce } from "immer";
import { SET_POST_BY_AUTHOR } from "./constant";

export const initialState = {
    post: []
}

const profileReducer = (state = initialState, action) => 
produce(state, (draft) => {
    switch (action.type) {
        case SET_POST_BY_AUTHOR:
            draft.post = action.post
            break;
    
        default:
            break;
    }
})

export default profileReducer