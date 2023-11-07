import { call, put, takeLatest } from 'redux-saga/effects'
import { createPost } from '../../domain/api'
import { setNewPost } from './actions'
import { CREATE_POST } from './constant';

export function* doCreatePost({post}) {
    try {
        const response = yield call(createPost, post)
        yield put(setNewPost(response));
    } catch (error) {
        console.log(error);
    }
}

export default function* addSaga() {
    yield takeLatest(CREATE_POST, doCreatePost);
}