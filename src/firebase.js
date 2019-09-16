import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDa0IcC3iDCKJik51PyUnv8lzG_3skRNaA",
  authDomain: "todoist-clone-94e36.firebaseapp.com",
  databaseURL: "https://todoist-clone-94e36.firebaseio.com",
  projectId: "todoist-clone-94e36",
  storageBucket: "todoist-clone-94e36.appspot.com",
  messagingSenderId: "552019334852",
  appId: "1:552019334852:web:62f90e8fabe4897eab1b91"
});

export { firebaseConfig as firebase };
