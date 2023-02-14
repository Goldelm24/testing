// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKQNuyYX6chJsfdNqp_A_LrZwLXF-LVEg",
  authDomain: "todo-list-app-ec4cd.firebaseapp.com",
  projectId: "todo-list-app-ec4cd",
  storageBucket: "todo-list-app-ec4cd.appspot.com",
  messagingSenderId: "789961586740",
  appId: "1:789961586740:web:13a1869b39b9591a3e3261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);