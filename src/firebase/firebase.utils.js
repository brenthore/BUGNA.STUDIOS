import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWTWuMDw-_GDwmVWwTqx5OkwUDNRgeLxE",
    authDomain: "bugna-studios.firebaseapp.com",
    databaseURL: "https://bugna-studios.firebaseio.com",
    projectId: "bugna-studios",
    storageBucket: "bugna-studios.appspot.com",
    messagingSenderId: "151273342689",
    appId: "1:151273342689:web:fd04848569aebbd484d9a0",
    measurementId: "G-PH14XT2SXW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;