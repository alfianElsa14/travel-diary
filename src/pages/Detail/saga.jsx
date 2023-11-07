import { call, put, takeLatest } from 'redux-saga/effects'
import { getPostById } from '../../domain/api'
import { setPostById } from './actions';
import { GET_POST_BY_ID } from './constant';


export function* doGetPostById({id}) {
    try {
        const response = yield call(getPostById, id)
        yield put(setPostById(response))
        console.log(response, "<<< ini response");
    } catch (error) {
        console.log(error);
    }
}

export default function* detailSaga() {
    yield takeLatest(GET_POST_BY_ID, doGetPostById);
}