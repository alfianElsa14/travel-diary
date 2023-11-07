import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constant";

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
})