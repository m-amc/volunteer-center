import { all, takeLatest, put , call, takeEvery} from 'redux-saga/effects';
import {
  REQUEST_POSTINGS,
  ADD_POSTING
} from '../actions/actionTypes';
import {
  requestPostingsSuccess,
  requestPostingsError,
  addPostingSuccess,
  requestPostings,
  filterPostings
} from '../actions/postingActions';
import firebase from 'firebase/app';

const getFirebaseData = () => {
  return new Promise(function (resolve, reject) {
    let postingData = []

    firebase.ref('posting').once("value").then(snap => {
      const dataRef = snap.val();
      Object.keys(dataRef).map(
        d => postingData.push(dataRef[d])
      )
      resolve(postingData)
    })
  })
}

function* fetchPostings({ payload }) {
  try {    
    const data = yield call(getFirebaseData)
    yield put(requestPostingsSuccess(data, payload.filter))
    yield put(filterPostings({ category: payload.filter }))
  } catch (error) {
    yield put(requestPostingsError)
  }
}

function* addNewPosting({ payload }) {
  const newPostRef = yield firebase.ref('posting').push();
  const data = { ...payload.posting[0], id: newPostRef.key };
  yield newPostRef.set(data)
  yield put(addPostingSuccess(data))
  yield put(requestPostings({ filter: payload.posting[0].category }))

}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_POSTINGS, fetchPostings),
    takeEvery(ADD_POSTING, addNewPosting)
  ])
}