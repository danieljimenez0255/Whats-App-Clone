import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxCFTxApPUgl4VdLgnAoziDLrCKfDzY-4",
  authDomain: "whatsapp-clone-842a7.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-842a7.firebaseio.com",
  projectId: "whatsapp-clone-842a7",
  storageBucket: "whatsapp-clone-842a7.appspot.com",
  messagingSenderId: "395250774061",
  appId: "1:395250774061:web:26c569e2d51f6b61d9c8a4",
  measurementId: "G-6Q3EYP7PLG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const authM = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { authM, provider };
export default db;
