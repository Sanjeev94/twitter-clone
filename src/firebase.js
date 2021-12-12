// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmkm0nhwI1BXM_Xd2TGZZZUO5ZW9s-2DM",
    authDomain: "twitter-clone-bb85c.firebaseapp.com",
    projectId: "twitter-clone-bb85c",
    storageBucket: "twitter-clone-bb85c.appspot.com",
    messagingSenderId: "15009698095",
    appId: "1:15009698095:web:0e50f157b3324db4fa11da",
    measurementId: "G-89LD9WYL3E"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;