// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOcu3alFc7R_tr9lhk7GTaEuyCJR7f4-M",
  authDomain: "thesssi.firebaseapp.com",
  projectId: "thesssi",
  storageBucket: "thesssi.appspot.com",
  messagingSenderId: "143607570934",
  appId: "1:143607570934:web:1c3db41bd2fb296982e7d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const database = getFirestore(app)