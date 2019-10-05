import firebase from 'firebase';

// apiKey: "AIzaSyDYZS3jKKLuglNpC9dcc6-iEdvUItaHi0A",
    // authDomain: "volunteer-center.firebaseapp.com",
    // databaseURL: "https://volunteer-center.firebaseio.com",
    // projectId: "volunteer-center",
    // storageBucket: "",
    // messagingSenderId: "893009596874",
    // appId: "1:893009596874:web:84684da9c2ec072d5eff33"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

console.log(firebaseConfig);
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;