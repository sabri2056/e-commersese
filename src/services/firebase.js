// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpKzhXwJpLPN3FgnGtWv65UfUphESvNH4",
  authDomain: "coderhause-comerse.firebaseapp.com",
  projectId: "coderhause-comerse",
  storageBucket: "coderhause-comerse.appspot.com",
  messagingSenderId: "271088319143",
  appId: "1:271088319143:web:e99eedad2fb0d034fc3982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;