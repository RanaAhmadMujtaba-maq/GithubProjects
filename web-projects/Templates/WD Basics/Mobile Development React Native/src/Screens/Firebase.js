// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTV7mhc7QV8FDgopiQg8zh87IOH5N1jyY",
  authDomain: "my-app-4d725.firebaseapp.com",
  databaseURL: "https://my-app-4d725-default-rtdb.firebaseio.com",
  projectId: "my-app-4d725",
  storageBucket: "my-app-4d725.appspot.com",
  messagingSenderId: "495447664380",
  appId: "1:495447664380:web:eaf69e824225c03f659979",
  measurementId: "G-439PCQHGH2"
};


// Initialize Firestore
const app = firebase.initializeApp(firebaseConfig);
export const db=getFirestore(app);