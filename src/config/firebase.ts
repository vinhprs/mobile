// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3ZmfGPjjQHdkwpqVlnqGKnJyrHbY_KT4',
  authDomain: 'auth-e34cb.firebaseapp.com',
  projectId: 'auth-e34cb',
  storageBucket: 'auth-e34cb.appspot.com',
  messagingSenderId: '492126702145',
  appId: '1:492126702145:web:d42afc5c144541a03154c0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerFace = new FacebookAuthProvider();
export const signInWithGoogle = ()=>{
  signInWithPopup(auth,provider)
    .then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      alert(error);
    });
};
export const signInWithFacebook = ()=>{
  signInWithPopup(auth,providerFace)
    .then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      alert(error);
    });
};