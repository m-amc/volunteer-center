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
import firebase from 'firebase/app';

const getFirebaseData = () => {
  return new Promise(function (resolve, reject) {
    let postingData = []

    firebase.ref('postings').once("value").then(snap => {
      const dataRef = snap.val();
      Object.keys(dataRef).map(
        d => postingData.push(dataRef[d])
      )
      resolve(postingData)
    })
  })
}

function* fetchPostingsAsync({category}) {
  try {
    yield put(requestPostingsStart());
    const data = yield call(getFirebaseData)
    yield put(requestPostingsSuccess(data));
  } catch (error) {
    yield put(requestPostingsError)
  }
}

function* addNewPosting({ payload }) {
  const newPostRef = yield firebase.ref('postings').push();
  const data = { ...payload.posting[0], id: newPostRef.key };
  yield newPostRef.set(data)
  yield put(addPostingSuccess(data))
}

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_POSTINGS, fetchPostingsAsync),
    takeEvery(ADD_POSTING_START, addNewPosting)
  ])
}