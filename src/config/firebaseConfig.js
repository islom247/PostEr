import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA0VWeEstk0mTmWwUWHjoEZkj6hjnBgnek",
  authDomain: "react-firebase-tutorial-f7.firebaseapp.com",
  databaseURL: "https://react-firebase-tutorial-f7.firebaseio.com",
  projectId: "react-firebase-tutorial-f7",
  storageBucket: "",
  messagingSenderId: "281411784671",
  appId: "1:281411784671:web:9418212c42b54f41447e6a",
  measurementId: "G-QJBT89EKQZ"
};
// Initialize Firebase
/*firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timeStampInSnapshots: true });*/
export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());
//export default firebase;
