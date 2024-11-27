import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";



const firebaseConfig = {
    apiKey: "AIzaSyATHRD9cskUkilbt248y40lM2IO9aombu4",
    authDomain: "pos-2c5e2.firebaseapp.com",
    projectId: "pos-2c5e2",
    storageBucket: "pos-2c5e2.appspot.com",
    messagingSenderId: "191722608677",
    appId: "1:191722608677:web:b86f74ea3142e6e78047cc"
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

