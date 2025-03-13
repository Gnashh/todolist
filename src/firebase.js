import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAs_tU6_DhRyxSWIIZzwkz9QVKwB2jtvcI",
  authDomain: "l4cc-test.firebaseapp.com",
  projectId: "l4cc-test",
  storageBucket: "l4cc-test.firebasestorage.app",
  messagingSenderId: "293641056072",
  appId: "1:293641056072:web:69fa9178cfaef9ff9e8d7d",
  measurementId: "G-S1WZ088D7L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 
