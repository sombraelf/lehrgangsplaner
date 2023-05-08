import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDtmNtcRdL3WY38m2ZrJVJu6E3179BvQqU",
  authDomain: "lehrgangsplaner.firebaseapp.com",
  projectId: "lehrgangsplaner",
  storageBucket: "lehrgangsplaner.appspot.com",
  messagingSenderId: "329984650358",
  appId: "1:329984650358:web:54a13683aae2f2df3b0357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);