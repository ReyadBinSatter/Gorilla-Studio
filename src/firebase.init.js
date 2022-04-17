// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3OQ4EfXifDU3sxDKLKf975vKiGmNCFQk",
  authDomain: "gorilla-studio.firebaseapp.com",
  projectId: "gorilla-studio",
  storageBucket: "gorilla-studio.appspot.com",
  messagingSenderId: "17355111330",
  appId: "1:17355111330:web:80dbd6f3cb66b8e90790fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;