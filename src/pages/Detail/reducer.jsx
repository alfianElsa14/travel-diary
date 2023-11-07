import { produce } from 'immer'
import { SET_POST_BY_ID, GET_POST_BY_ID } from './constant';

export const initialState = {
    post: {},
    loading: false
}

const detailReducer = (state = initialState, action) => 
produce(state, (draft) => {
    switch (action.type) {
        case GET_POST_BY_ID:
            draft.post = action.post
            break;
        case SET_POST_BY_ID:
            draft.post = action.post
            break;
        default:
            break;
    }
})

export default detailReducer;