import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDNcLZJuYpdufHb8Bx5TPiZNugakqtIJlk',
  authDomain: 'my-cv-a3163.firebaseapp.com',
  projectId: 'my-cv-a3163',
  storageBucket: 'my-cv-a3163.appspot.com',
  messagingSenderId: '156390193744',
  appId: '1:156390193744:web:4760c727362e5ab8e3ef55',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const storage = getStorage(app);
