import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore'

//Configuración de firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5LNgZCaZGp7kuPD_GRwzKPLbBYBXHlSE",
  authDomain: "landingpage-wc.firebaseapp.com",
  databaseURL: "https://landingpage-wc-default-rtdb.firebaseio.com",
  projectId: "landingpage-wc",
  storageBucket: "landingpage-wc.appspot.com",
  messagingSenderId: "875445825759",
  appId: "1:875445825759:web:017d23b363706b875ef96a"
};


// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
//Conexion con auth
export const auth = fb.auth();
// Conexion con firestore
export const db = fb.firestore();


db.settings({
  timestampsInSnapshots: true,
});