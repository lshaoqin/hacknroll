// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const port = 3000;


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkp-_Yuc32A9_sGUB0QDWHsyJXP9sBsII",
  authDomain: "hacknroll-5b470.firebaseapp.com",
  projectId: "hacknroll-5b470",
  storageBucket: "hacknroll-5b470.appspot.com",
  messagingSenderId: "32324709393",
  appId: "1:32324709393:web:cc39609643d33c8d3855b0",
  measurementId: "G-159W93FBQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
  };