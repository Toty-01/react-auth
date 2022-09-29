import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "auth-84078.firebaseapp.com",
  projectId: "auth-84078",
  storageBucket: "auth-84078.appspot.com",
  messagingSenderId: "278363203479",
  appId: "1:278363203479:web:73c5a6ee6b2c5be2f4c6d2"
});

export const auth = app.auth();
export default app;