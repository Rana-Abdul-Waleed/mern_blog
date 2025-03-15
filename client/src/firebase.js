// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c368e.firebaseapp.com",
  projectId: "mern-blog-c368e",
  storageBucket: "mern-blog-c368e.firebasestorage.app",
  messagingSenderId: "120321945702",
  appId: "1:120321945702:web:c530c5a890a7c2fa87fda7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
