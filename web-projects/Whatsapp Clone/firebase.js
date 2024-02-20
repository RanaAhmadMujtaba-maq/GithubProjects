import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAiXH_7EsnuxM5ejuysaObVynIh6VDWpUA",
  authDomain: "wp-clone-463dd.firebaseapp.com",
  projectId: "wp-clone-463dd",
  storageBucket: "wp-clone-463dd.appspot.com",
  messagingSenderId: "1051073604746",
  appId: "1:1051073604746:web:4bc9eacea99e22b7fed173",
  measurementId: "G-DKF7XS9C2W"};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}