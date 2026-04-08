import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAELJkR596DfaBEyNnZuNVQkjjb93EkgWg",
  authDomain: "portoflio-karolo.firebaseapp.com",
  projectId: "portoflio-karolo",
  storageBucket: "portoflio-karolo.firebasestorage.app",
  messagingSenderId: "426465102834",
  appId: "1:426465102834:web:d9a00c8c54afbe9286796b",
  measurementId: "G-ZQVZNNKCLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const msgCollection = collection(db, "message-board");

export {db, msgCollection, addDoc, getDoc, doc};