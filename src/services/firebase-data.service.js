import firebase from 'firebase/app';
import { eventChannel } from 'redux-saga';

export const createEventChannel = () => {
  const listener = eventChannel(
    emit => {
      firebase.ref('postings')
        .on('value', snap => {
          const dataRef = snap.val();
          emit(dataRef)
        })
      return () => firebase.ref('postings').off(listener)
    }
  )

  return listener
}

export const firebasePush = () => {
  return firebase.ref('postings').push()
}

export const firebaseSetData = (payload, newPostRef) => {
  const data = { ...payload.posting[0], id: newPostRef.key };
  newPostRef.set(data)
  return data
}