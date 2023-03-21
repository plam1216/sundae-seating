// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW7j1DGFDTySXgZTrzIWMaQeBpEdIJvoQ",
  authDomain: "sundae-seating.firebaseapp.com",
  databaseURL: "https://sundae-seating-default-rtdb.firebaseio.com",
  projectId: "sundae-seating",
  storageBucket: "sundae-seating.appspot.com",
  messagingSenderId: "108892691270",
  appId: "1:108892691270:web:402b6471159f20ad5c6347",
  measurementId: "G-MQVZGVR2P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const login = () => {
    signInWithPopup(auth, provider)
}

const logout = () => {
    const auth = getAuth();
    signOut(auth)
}

export {
    login, logout, auth, analytics
}