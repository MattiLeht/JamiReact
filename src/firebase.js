// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx4nHyg5cvNE_U44-bndgojg4a9hTZcuA",
    authDomain: "chat-app-9f952.firebaseapp.com",
    projectId: "chat-app-9f952",
    storageBucket: "chat-app-9f952.appspot.com",
    messagingSenderId: "580765070474",
    appId: "1:580765070474:web:ed05f9d10b105aaafd6973"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
