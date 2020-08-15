import { all, takeLatest, put , call, takeEvery} from 'redux-saga/effects';
import {
  ADD_POSTING_START,
  FETCH_POSTINGS
} from '../actions/actionTypes';
import {
  requestPostingsSuccess,
  requestPostingsError,
  addPostingSuccess,
  requestPostingsStart,
} from '../actions/postingActions';
import { getFirebaseData, firebasePush, firebaseSetData } from '../../services/firebase-data.service';

export function* fetchPostingsAsync({category}) {
  try {
    yield put(requestPostingsStart());
    const data = yield call(getFirebaseData)
    yield put(requestPostingsSuccess(data));
  } catch (error) {
    yield put(requestPostingsError(error))
  }
}

export function* addNewPosting({ payload }) {
  const newPostRef = yield firebasePush();
  const data = yield firebaseSetData(payload, newPostRef);
  yield put(addPostingSuccess(data))
}

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_POSTINGS, fetchPostingsAsync),
    takeEvery(ADD_POSTING_START, addNewPosting)
  ])
}