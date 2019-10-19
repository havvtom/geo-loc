 import firebase from "firebase";
 import firestore from "firebase/firestore"

 var firebaseConfig = {
    apiKey: "AIzaSyCUa9Khm3eUpgD1JMzFx2NPow2ijd0e-jM",
    authDomain: "geo-loc-a8f73.firebaseapp.com",
    databaseURL: "https://geo-loc-a8f73.firebaseio.com",
    projectId: "geo-loc-a8f73",
    storageBucket: "geo-loc-a8f73.appspot.com",
    messagingSenderId: "771443880015",
    appId: "1:771443880015:web:4fc3314694fc57ea07ba3a",
    measurementId: "G-4G4H284QH1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();