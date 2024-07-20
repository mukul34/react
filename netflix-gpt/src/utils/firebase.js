// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc4j8SGrUaKWyJBr83wf2TyQT1XJKqkho",
  authDomain: "netflix-gpt-3ebd1.firebaseapp.com",
  projectId: "netflix-gpt-3ebd1",
  storageBucket: "netflix-gpt-3ebd1.appspot.com",
  messagingSenderId: "23301603503",
  appId: "1:23301603503:web:f9c96b009c35f67616545a",
  measurementId: "G-3N14D9QBWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);