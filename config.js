import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAPcMPdwxLBQKbgweMxG5MrSJvxLAMbJhc",
  authDomain: "pro-71-e3c2e.firebaseapp.com",
  projectId: "pro-71-e3c2e",
  storageBucket: "pro-71-e3c2e.appspot.com",
  messagingSenderId: "647628158980",
  appId: "1:647628158980:web:df26a57164e58658519d51"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
