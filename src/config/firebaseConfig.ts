//not used this file
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsWW_iUlx1PsvVKod_GEvrYM0_uDhQwAI",
  authDomain: "ZAPTRIX-c3e58.firebaseapp.com",
  projectId: "ZAPTRIX-c3e58",
  storageBucket: "ZAPTRIX-c3e58.firebasestorage.app",
  messagingSenderId: "926441846934",
  appId: "1:926441846934:web:cead7928906ea4a05caab7"
};

// const firebaseConfig = {
//   apiKey: process.env.VITE_FIREBASE_API_KEY,
//   authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VITE_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); 