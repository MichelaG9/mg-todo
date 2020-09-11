import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYLzedbQCFDYWt4UxNqhRqEQVb34fCc3U",
    authDomain: "mg-todo-52555.firebaseapp.com",
    databaseURL: "https://mg-todo-52555.firebaseio.com",
    projectId: "mg-todo-52555",
    storageBucket: "mg-todo-52555.appspot.com",
    messagingSenderId: "639428940511",
    appId: "1:639428940511:web:13ebcec3554a3c73948f6a",
    measurementId: "G-GTD2XBHN8H"
  })

const db = firebaseApp.firestore();

export default db;