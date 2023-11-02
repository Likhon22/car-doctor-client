// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuxlM04I9WRs8ZouWjAgSAnWpg-Xv4uzM",
  authDomain: "car-doctor-cb88e.firebaseapp.com",
  projectId: "car-doctor-cb88e",
  storageBucket: "car-doctor-cb88e.appspot.com",
  messagingSenderId: "695181940856",
  appId: "1:695181940856:web:a2e3c52b602fa90d2fb58d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
