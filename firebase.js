// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVUZk6fep-mATf6VbrivtY9KBTWShVhQA",
  authDomain: "clone-d85ac.firebaseapp.com",
  projectId: "clone-d85ac",
  storageBucket: "clone-d85ac.appspot.com",
  messagingSenderId: "439517393206",
  appId: "1:439517393206:web:8dde569e1deface4a7c397",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
