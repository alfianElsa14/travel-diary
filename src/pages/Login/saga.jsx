import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllUser } from '../../domain/api';
import { loginFailed, loginSuccess } from './actions';
import { LOGIN_REQUEST } from './constant';

function* doLogin(action) {
    try {
        const users = yield call(getAllUser);
        const userValidate = users.find((user) => user.email === action.payload.email && user.password === action.payload.password)
        if(!userValidate) {
            yield put(loginFailed("invalid input"))
        } else {
            localStorage.setItem("user", JSON.stringify(userValidate));
            yield put(loginSuccess(userValidate))
        }
    } catch (error) {
        yield put(loginFailed(error.message))
        console.log(error);
    }
}

export default function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, doLogin);
}



