// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLYIQ5KsMs3q0ict00iLQsWUBcy0cFyJg",
  authDomain: "ecaproject-46823.firebaseapp.com",
  projectId: "ecaproject-46823",
  storageBucket: "ecaproject-46823.firebasestorage.app",
  messagingSenderId: "602039577189",
  appId: "1:602039577189:web:e601bcb84a64e5836df48c",
  measurementId: "G-8LMJ2WKNP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);