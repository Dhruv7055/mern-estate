// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-e4a4c.firebaseapp.com',
  projectId: 'mern-estate-e4a4c',
  storageBucket: 'mern-estate-e4a4c.appspot.com',
  messagingSenderId: '180822543211',
  appId: '1:180822543211:web:902e10df158127045a5a2e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
