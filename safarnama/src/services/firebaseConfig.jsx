// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA88FBG97XWYWfxANlRIC-QRLiSYgGcLNo",
  authDomain: "safarnama-54d7e.firebaseapp.com",
  projectId: "safarnama-54d7e",
  storageBucket: "safarnama-54d7e.appspot.com",
  messagingSenderId: "601779205664",
  appId: "1:601779205664:web:701cd3f0ce3063ddc32e45",
  measurementId: "G-LXNSFNTLFS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db= getFirestore(app);