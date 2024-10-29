import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDLGYmS0Hi3i5FZsgUrqOlqIu-mRida6OI",
  authDomain: "moviesapp-f056a.firebaseapp.com",
  projectId: "moviesapp-f056a",
  storageBucket: "moviesapp-f056a.appspot.com",
  messagingSenderId: "808506452711",
  appId: "1:808506452711:web:74f343d4125aee9ede5042",
  measurementId: "G-T4C0G8HYQM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (using the modular method)
const db = getFirestore(app);

export { app, db };
