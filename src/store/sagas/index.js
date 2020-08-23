import { all, takeLatest, put, takeEvery, take} from 'redux-saga/effects';
import {
  ADD_POSTING_START,
  FETCH_POSTINGS
} from '../actions/actionTypes';
import {
  requestPostingsSuccess,
  requestPostingsError,
  requestPostingsStart,
} from '../actions/postingActions';
import { createEventChannel, firebasePush, firebaseSetData } from '../../services/firebase-data.service';

export function* fetchPostingsAsync({ category }) {
  try {
    const connectToFirebase = createEventChannel();
    yield put(requestPostingsStart());

    while (true) {
      const data = yield take(connectToFirebase)
      yield put(requestPostingsSuccess(data));
    }
  } catch (error) {
    yield put(requestPostingsError(error))
  }
}

export function* addNewPosting({ payload }) {
  const newPostRef = yield firebasePush();
  yield firebaseSetData(payload, newPostRef);
  // we no longer need to call the reducer as our saga is no actively listening to firebase changes through the .on("value")
}

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_POSTINGS, fetchPostingsAsync),
    takeEvery(ADD_POSTING_START, addNewPosting)
  ])
}