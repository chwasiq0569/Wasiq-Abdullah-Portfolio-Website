import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB5GmGuLWhoyCEhTzt3CcYLMWWCw1PIULE",
  authDomain: "wasiqabdullah-b1cad.firebaseapp.com",
  databaseURL: "https://wasiqabdullah-b1cad.firebaseio.com",
  projectId: "wasiqabdullah-b1cad",
  storageBucket: "wasiqabdullah-b1cad.appspot.com",
  messagingSenderId: "991780436069",
  appId: "1:991780436069:web:60d8bac6398893ae6dee8c"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;