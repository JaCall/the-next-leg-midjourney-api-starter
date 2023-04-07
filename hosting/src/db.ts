// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQea26pj-gsRN71IrLbLxB3MipMrQKN4",
authDomain: "midjourney-api-455cf.firebaseapp.com",
projectId: "midjourney-api-455cf",
storageBucket: "midjourney-api-455cf.appspot.com",
messagingSenderId: "918077772590",
appId: "1:918077772590:web:833ba198ff7cb4c51160bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
