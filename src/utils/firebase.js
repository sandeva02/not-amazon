import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8WTZwZFmBL18V5EcKsB9u-BLHXT8mqg4",
  authDomain: "not-amzn.firebaseapp.com",
  databaseURL: "https://not-amzn.firebaseio.com",
  projectId: "not-amzn",
  storageBucket: "not-amzn.appspot.com",
  messagingSenderId: "551683448894",
  appId: "1:551683448894:web:b33891c1ef57365164f16f",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
