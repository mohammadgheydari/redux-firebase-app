import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4p3OpURmaMpViT4iFuvJV6ktk39Ov_RI",
  authDomain: "marioplan-db-2018.firebaseapp.com",
  databaseURL: "https://marioplan-db-2018.firebaseio.com",
  projectId: "marioplan-db-2018",
  storageBucket: "",
  messagingSenderId: "416009291280"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
