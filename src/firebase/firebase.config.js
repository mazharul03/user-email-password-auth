// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxoXWZxYrI3XpybONZIj1-63YaftWXq6c",
  authDomain: "user-email-password-auth-840ab.firebaseapp.com",
  projectId: "user-email-password-auth-840ab",
  storageBucket: "user-email-password-auth-840ab.firebasestorage.app",
  messagingSenderId: "992940831564",
  appId: "1:992940831564:web:bd69dd21cacd223852d5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;