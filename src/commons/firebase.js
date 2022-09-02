// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKLtIr81b437B1Mae3EvJWZ24Z_7Jp3BE",
  authDomain: "tinder-clone-aac13.firebaseapp.com",
  projectId: "tinder-clone-aac13",
  storageBucket: "tinder-clone-aac13.appspot.com",
  messagingSenderId: "1010330508855",
  appId: "1:1010330508855:web:0a548ee87d1f6b14ac69b2",
  measurementId: "G-SECVGZLPS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
