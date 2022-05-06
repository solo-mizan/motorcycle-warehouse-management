// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASRcsGSvEUXfJ9d1D3ZMXo9jNizGDu3-M",
  authDomain: "warehouse-management-4eccf.firebaseapp.com",
  projectId: "warehouse-management-4eccf",
  storageBucket: "warehouse-management-4eccf.appspot.com",
  messagingSenderId: "962713979632",
  appId: "1:962713979632:web:040e5a8c98e87236979035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;