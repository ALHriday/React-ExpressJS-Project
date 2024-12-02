// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-91vp06kuQ7ltKJ-BLb2WikxJfjUMzF0",
  authDomain: "coffee-store-8e439.firebaseapp.com",
  projectId: "coffee-store-8e439",
  storageBucket: "coffee-store-8e439.firebasestorage.app",
  messagingSenderId: "750453930135",
  appId: "1:750453930135:web:e97d1b09cd56c64fe5d1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

