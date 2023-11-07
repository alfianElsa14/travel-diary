import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, SET_NEW_USER } from "./constant";

export const registerRequest = (user) => ({
    type: REGISTER_REQUEST,
    payload: user,
  });
  
  export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
  });
  
  export const registerFailed = (error) => ({
    type: REGISTER_FAILED,
    payload: error,
  });

  export const setNewUser = (user) => ({
    type: SET_NEW_USER,
    user
  })