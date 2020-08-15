import firebase from 'firebase/app';

export const getFirebaseData = () => {
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

export const firebasePush = () => {
  return firebase.ref('postings').push()
}

export const firebaseSetData = (payload, newPostRef) => {
  const data = { ...payload.posting[0], id: newPostRef.key };
  newPostRef.set(data)
  return data
}