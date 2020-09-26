// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAOozRFYMCWRQYQ4DZg19LB-8naEiL7vWE",
  authDomain: "instagram-clone-react-cc16f.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-cc16f.firebaseio.com",
  projectId: "instagram-clone-react-cc16f",
  storageBucket: "instagram-clone-react-cc16f.appspot.com",
  messagingSenderId: "602189635954",
  appId: "1:602189635954:web:d2d9096d64c7739101bdeb",
  measurementId: "G-CW4M24YMTZ",
});

const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
