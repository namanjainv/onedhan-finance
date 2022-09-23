// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvTx2-GJ84siD6C3JKzIBMa6bD7BuzG3o",
  authDomain: "onedhan-27406.firebaseapp.com",
  projectId: "onedhan-27406",
  storageBucket: "onedhan-27406.appspot.com",
  messagingSenderId: "727233897146",
  appId: "1:727233897146:web:7e07411efec8b1151fd883",
  measurementId: "G-QHYDV05C8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };