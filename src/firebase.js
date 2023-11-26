// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3rh1eDQJzFCyixrO4w1VvDXOtSL1HKUk",
  authDomain: "auth-slideit.firebaseapp.com",
  projectId: "auth-slideit",
  storageBucket: "auth-slideit.appspot.com",
  messagingSenderId: "931445373048",
  appId: "1:931445373048:web:85db3258146127a90e558d",
  measurementId: "G-XVFPK2L2VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);