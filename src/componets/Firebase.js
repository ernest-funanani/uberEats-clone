import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYzXC9GwY0Bp9F-qr-HPFzBKJbV0ex0_I",
  authDomain: "uber-eats-368910.firebaseapp.com",
  projectId: "uber-eats-368910",
  storageBucket: "uber-eats-368910.appspot.com",
  messagingSenderId: "1043806932771",
  appId: "1:1043806932771:web:2dbb7094de43ac3ddc0696",
  measurementId: "G-ZQ2H06S25F",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
