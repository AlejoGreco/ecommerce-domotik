// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC_tb6ZW8-vySI16p4yrBE2vufXfypU2k",
  authDomain: "domotik-firebase.firebaseapp.com",
  projectId: "domotik-firebase",
  storageBucket: "domotik-firebase.appspot.com",
  messagingSenderId: "492932799219",
  appId: "1:492932799219:web:9393d955041e9838533586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);