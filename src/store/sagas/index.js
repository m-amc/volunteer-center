import { all, takeLatest, put, takeEvery, take} from 'redux-saga/effects';
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

export function* fetchPostingsAsync({ category }) {
  try {
    const connectToFirebase = getFirebaseData();

    while (true) {
      yield put(requestPostingsStart());
      const data = yield take(connectToFirebase)
      yield put(requestPostingsSuccess(data));
    }
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