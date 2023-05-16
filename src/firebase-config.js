import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbQs2wzME6ixAmX8o31EAl9RZAqnnIhUI",
  authDomain: "resume-dfec2.firebaseapp.com",
  projectId: "resume-dfec2",
  storageBucket: "resume-dfec2.appspot.com",
  messagingSenderId: "818958576444",
  appId: "1:818958576444:web:29071c00375ac9c1c00c39"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
