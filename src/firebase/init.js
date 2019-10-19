 import firebase from "firebase";
 import firestore from "firebase/firestore"

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA-lYOEXpDgH8kNVukgKLawdNB1jvzDn_8",
    authDomain: "geo-loc-c0daf.firebaseapp.com",
    databaseURL: "https://geo-loc-c0daf.firebaseio.com",
    projectId: "geo-loc-c0daf",
    storageBucket: "geo-loc-c0daf.appspot.com",
    messagingSenderId: "359465448028",
    appId: "1:359465448028:web:7e33e38a3ca7cd53ae6c99",
    measurementId: "G-JNM0HW2LX6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();