import { call, put, takeLatest } from 'redux-saga/effects'
import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from './constant'
import { registerMethod } from '../../domain/api'


export function* doRegister({ user }) {
    try {
        const response = yield call(registerMethod, user);
        yield put(setNewUser(response));
    } catch (error) {
        console.log(error);
    }
}

export default function* registerSaga() {
    yield takeLatest(REGISTER_SUCCESS, doRegister)
}