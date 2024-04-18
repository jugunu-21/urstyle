
import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCtTOE7E1qifPWqfmB__GMWqJSumkJnSj0",
  authDomain: "urstyleauth.firebaseapp.com",
  projectId: "urstyleauth",
  storageBucket: "urstyleauth.appspot.com",
  messagingSenderId: "36428529119",
  appId: "1:36428529119:web:94ba5f88de7b14c57f586a",
  measurementId: "G-PX9YREREX4"
};


const app = initializeApp(firebaseConfig);
export { app };