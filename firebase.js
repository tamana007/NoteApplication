

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLF4GBiPrsOOQ6adMGd1_5geROss4_Grs',
  authDomain: 'noteapp-c26e2',
  projectId: 'noteapp-c26e2',
};

const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);
const auth = getAuth(app);

export { auth };