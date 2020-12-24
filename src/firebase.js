import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDIEz8pqLI9IAt5bgXYy90t7iw_zLtUEA",
  authDomain: "city-walker.firebaseapp.com",
  projectId: "city-walker",
  storageBucket: "city-walker.appspot.com",
  messagingSenderId: "234520776294",
  appId: "1:234520776294:web:0a9c644ab3eb85f06e67a7",
  measurementId: "G-NELH08XYYR",
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
