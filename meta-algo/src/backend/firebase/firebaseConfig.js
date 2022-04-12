// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCktre93cUTab3E-t5MUpxW1yc0RKZt1aw",
  authDomain: "meta-algo.firebaseapp.com",
  projectId: "meta-algo",
  storageBucket: "meta-algo.appspot.com",
  messagingSenderId: "318072213174",
  appId: "1:318072213174:web:2ec1244cd1050c1615e017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()