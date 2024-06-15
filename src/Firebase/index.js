import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC-ei07T65YSIKOtqAnAHrT7nDZM9lskuo",
  authDomain: "loginsystem-4acbe.firebaseapp.com",
  projectId: "loginsystem-4acbe",
  storageBucket: "loginsystem-4acbe.appspot.com",
  messagingSenderId: "60647422205",
  appId: "1:60647422205:web:41330471542bdfa2ac6694"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);