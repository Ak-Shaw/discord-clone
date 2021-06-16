
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDcun7Js5llOu_CUYvCHPDFl7aySP0Ri5s",
  authDomain: "discord-clone-bf2f3.firebaseapp.com",
  projectId: "discord-clone-bf2f3",
  storageBucket: "discord-clone-bf2f3.appspot.com",
  messagingSenderId: "806578100306",
  appId: "1:806578100306:web:5f78782703c9ed0e1a678b",
  measurementId: "G-ZR0QQYY71Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;