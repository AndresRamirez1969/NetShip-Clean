import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAn4Cl-yWkNqFxE4qvIiBbfqb-R_t6XVPA",
    authDomain: "netship-95b5a.firebaseapp.com",
    projectId: "netship-95b5a",
    storageBucket: "netship-95b5a.appspot.com",
    messagingSenderId: "1087596180120",
    appId: "1:1087596180120:web:5d474192935e24ac6f56ed"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {auth, firestore, storage};