import { produce } from 'immer';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './constant';

export const initialState = {
    user: null,
    error: null
};

const loginReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case LOGIN_REQUEST:
                draft.user = null;
                draft.error = null;
                break;
            case LOGIN_SUCCESS:
                draft.user = action.payload,
                draft.error = null;
                break;
            case LOGIN_FAILED:
                draft.user = null,
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });

export default loginReducer;
