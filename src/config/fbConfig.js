import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCGpZYkCl_8Wr-oKSlJYaoLPtnAfIy3Fpo",
  authDomain: "redux-plan-124d6.firebaseapp.com",
  projectId: "redux-plan-124d6",
  storageBucket: "redux-plan-124d6.appspot.com",
  messagingSenderId: "1084443459616",
  appId: "1:1084443459616:web:d2b4cda112ef5d33223c45",
  measurementId: "G-W09SRH63XZ",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
