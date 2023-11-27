import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
import 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyBgLYHwUJLkNWRX4kMg2jTbj8LFHs8kqvg",
    authDomain: "spacemission-d8661.firebaseapp.com",
    databaseURL: "https://spacemission-d8661-default-rtdb.firebaseio.com",
    projectId: "spacemission-d8661",
    storageBucket: "spacemission-d8661.appspot.com",
    messagingSenderId: "1072028979569",
    appId: "1:1072028979569:web:48a67a3b161ab19599e6d0",
    measurementId: "G-H9GGJZD0RQ"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref = firebase.database();
  export default firebase;