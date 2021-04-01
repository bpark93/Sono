import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyABbLjSNmKx7p0uaaXzAB76WmyQ_SwGKk4",
    authDomain: "westernsono-library.firebaseapp.com",
    databaseURL: "https://westernsono-library.firebaseio.com",
    projectId: "westernsono-library",
    storageBucket: "westernsono-library.appspot.com",
    messagingSenderId: "479244726518",
    appId: "1:479244726518:web:ebc8b60fdb19a6e2b2fcd7",
    measurementId: "G-BKS5FXTMHT"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.auth().signInAnonymously();

export default firebase