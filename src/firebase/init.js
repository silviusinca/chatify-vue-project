import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyABUT5V1BsXr5PtU-ChP464PrvqCN7qYLk",
  authDomain: "chatify-vue.firebaseapp.com",
  databaseURL: "https://chatify-vue.firebaseio.com",
  projectId: "chatify-vue",
  storageBucket: "chatify-vue.appspot.com",
  messagingSenderId: "372848092627"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()