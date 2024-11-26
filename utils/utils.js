

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    collection,
    setDoc,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyD2ja1nwQbg8g0r3Tlrlih3bhxskrDJQBI",
    authDomain: "food-sharing-b82e9.firebaseapp.com",
    projectId: "food-sharing-b82e9",
    storageBucket: "food-sharing-b82e9.firebasestorage.app",
    messagingSenderId: "1045181058085",
    appId: "1:1045181058085:web:b04007ab79e726f28a83cc",
    measurementId: "G-QDPRC5KXKF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export {
    auth,
    db,
    storage,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    doc,
    collection,
    setDoc,
    addDoc,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
    ref,
    uploadBytes,
    getDownloadURL,
  };

