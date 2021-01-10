import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-7sjRUi6h-nBTsZFVH0ciwNpvh76FcTM",
  authDomain: "facebook-clone-bef9b.firebaseapp.com",
  projectId: "facebook-clone-bef9b",
  storageBucket: "facebook-clone-bef9b.appspot.com",
  messagingSenderId: "255126037797",
  appId: "1:255126037797:web:70ad529d330c91b33b26cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
