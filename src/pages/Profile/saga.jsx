import { call, put, takeLatest } from 'redux-saga/effects'
import { postByAuthor } from '../../domain/api'
import { setPostByAuthor } from './actions'
import { GET_POST_BY_AUTHOR } from './constant'

export function* doGetPostByAuthor({id}) {
    try {
        const response = yield call(postByAuthor, id)
        yield put(setPostByAuthor(response))
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


export default function* profileSaga() {
    yield takeLatest(GET_POST_BY_AUTHOR, doGetPostByAuthor)
} 