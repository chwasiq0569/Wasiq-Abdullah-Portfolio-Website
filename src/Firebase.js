import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAgNo123fxc6K3kXz0Bl9GXsPdksnNwxGc",
  authDomain: "wasiqabdullah-portfolio.firebaseapp.com",
  databaseURL: "https://wasiqabdullah-portfolio.firebaseio.com",
  projectId: "wasiqabdullah-portfolio",
  storageBucket: "wasiqabdullah-portfolio.appspot.com",
  messagingSenderId: "105695011561",
  appId: "1:105695011561:web:be1ceaf61cb2c1b1904678"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;