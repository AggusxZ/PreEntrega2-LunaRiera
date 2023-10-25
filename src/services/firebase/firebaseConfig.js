import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApd4rlXc4Fh7WLBqxjAkJ-OwczEfgGvTI",
  authDomain: "proyecto-final-f5af2.firebaseapp.com",
  projectId: "proyecto-final-f5af2",
  storageBucket: "proyecto-final-f5af2.appspot.com",
  messagingSenderId: "55528105092",
  appId: "1:55528105092:web:e26bacbd44fdb3d5afced1" 
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)