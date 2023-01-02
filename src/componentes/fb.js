import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getFirestore} from "@firebase/firestore"

export const app = firebase.initializeApp({
  
    apiKey: "AIzaSyBb6AtSsBGwgaoW12S31QxcJNuL2naVTrE",
    authDomain: "movie-max-e4397.firebaseapp.com",
    projectId: "movie-max-e4397",
    storageBucket: "movie-max-e4397.appspot.com",
    messagingSenderId: "860150156533",
    appId: "1:860150156533:web:6c61653baec4e5d263c9bc"
  
});

export const db = getFirestore (app)

