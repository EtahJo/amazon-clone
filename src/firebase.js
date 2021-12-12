
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9uy68cOAAmZyO-3W61VRNr7xJ9v1MIOE",
    authDomain: "challenge-9b774.firebaseapp.com",
    projectId: "challenge-9b774",
    storageBucket: "challenge-9b774.appspot.com",
    messagingSenderId: "913873567601",
    appId: "1:913873567601:web:404238481d7ca01ed600d0",
    measurementId: "G-0073SDDGD7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};
