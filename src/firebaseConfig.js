// src/firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvHCtMWAQNRF15jf4H_DMve2VpK1FTStI",
    authDomain: "event-planner-d6e09.firebaseapp.com",
    projectId: "event-planner-d6e09",
    storageBucket: "event-planner-d6e09.appspot.com",
    messagingSenderId: "60191630399",
    appId: "1:60191630399:web:1e1e42e46e70132e18048a",
    measurementId: "G-S4Q7DXMVDY"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
