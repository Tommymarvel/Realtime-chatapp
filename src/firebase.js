
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyDDLWboB43RM0qGLv46uTgs82TBkLtYIj0',
  authDomain: 'chat-3c213.firebaseapp.com',
  projectId: 'chat-3c213',
  storageBucket: 'chat-3c213.appspot.com',
  messagingSenderId: '940756530145',
  appId: '1:940756530145:web:ee741039288f25097a58a0',
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()