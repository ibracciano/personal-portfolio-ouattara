// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCybnXrS__B-pSLR7qqi5FHjZNKgXyCZ1Y",
    authDomain: "personal-portfolio-ouattara.firebaseapp.com",
    projectId: "personal-portfolio-ouattara",
    storageBucket: "personal-portfolio-ouattara.appspot.com",
    messagingSenderId: "740305889913",
    appId: "1:740305889913:web:fc2069e4980631992882a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Avoir la référence de notre base de données
export const db = getFirestore(app)

// Avoir la référence du service d'authentification
export const auth = getAuth(app)

// Avoir la référence du storage pour stockage des images
export const storage = getStorage(app)

// Avoir la référence du service d'authentification avec Google
export const googleProvider = new GoogleAuthProvider()