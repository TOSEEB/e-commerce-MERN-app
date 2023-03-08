// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM6oXMK2d17O4O3KwzpXm2YV8f5pscqrU",
  authDomain: "newshop-50909.firebaseapp.com",
  projectId: "newshop-50909",
  storageBucket: "newshop-50909.appspot.com",
  messagingSenderId: "944638871833",
  appId: "1:944638871833:web:8ecd1d9893cc6233255d88",
  measurementId: "G-Y9S7K2Q99S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;