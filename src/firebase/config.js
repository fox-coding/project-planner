// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxSHfvZkVz59LOcoBcgoObNEEWIsT6CXk",
  authDomain: "fox-projects.firebaseapp.com",
  projectId: "fox-projects",
  storageBucket: "fox-projects.appspot.com",
  messagingSenderId: "721746333824",
  appId: "1:721746333824:web:db213dc6d9154c301d9665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }