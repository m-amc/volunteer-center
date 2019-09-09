import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYZS3jKKLuglNpC9dcc6-iEdvUItaHi0A",
    authDomain: "volunteer-center.firebaseapp.com",
    databaseURL: "https://volunteer-center.firebaseio.com",
    projectId: "volunteer-center",
    storageBucket: "",
    messagingSenderId: "893009596874",
    appId: "1:893009596874:web:84684da9c2ec072d5eff33"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;