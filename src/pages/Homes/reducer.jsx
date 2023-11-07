import { produce } from 'immer'
import { SET_ALL_POST } from './constant'

export const initialState = {
    posts: [],
};

const homeReducer = (state = initialState, action) => 
produce(state, (draft) => {
    switch (action.type) {
        case SET_ALL_POST:
            draft.posts = action.posts;
            break;
        default:
            break;
    }
})

export default homeReducer;