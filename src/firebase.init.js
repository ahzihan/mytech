// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9TY4KL1O19WQ5PAuXmi7STEijVZC1zYM",
    authDomain: "mytech-15715.firebaseapp.com",
    projectId: "mytech-15715",
    storageBucket: "mytech-15715.appspot.com",
    messagingSenderId: "1096387445976",
    appId: "1:1096387445976:web:3e34eb03a9ea0b5a5903ad",
    measurementId: "G-ED5FRNK4DD"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );
const auth = getAuth( app );
export default auth;