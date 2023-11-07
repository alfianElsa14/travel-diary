import { all } from 'redux-saga/effects'
import registerSaga from './pages/Register/saga'
import homeSaga from './pages/Homes/saga'
import loginSaga from './pages/Login/saga'
import detailSaga from './pages/Detail/saga'
import addSaga from './pages/Add/saga'
import profileSaga from './pages/Profile/saga'


export default function* rootSaga() {
    yield all([
        registerSaga(),
        homeSaga(),
        detailSaga(),
        loginSaga(),
        addSaga(),
        profileSaga(),
    ])
}