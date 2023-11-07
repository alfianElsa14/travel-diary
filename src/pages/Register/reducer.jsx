import { produce } from 'immer'
import { SET_NEW_USER } from './constant';

export const initialState = {
    users: [],
}

const registerReducer = (state = initialState, action) => 
produce(state, (draft) => {
    switch (action.type) {
        case SET_NEW_USER:
            const newUser = [...state.users, action.user];
            draft.users = newUser
            break;
        default:
            break;
    }
})

export default registerReducer