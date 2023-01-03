// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVGY3wV-bhvow1YJsZj_3sW4b5fUwCDQ",
  authDomain: "todo-app-42f8d.firebaseapp.com",
  projectId: "todo-app-42f8d",
  storageBucket: "todo-app-42f8d.appspot.com",
  messagingSenderId: "808574038022",
  appId: "1:808574038022:web:faee9daa55b87f40ddd387"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase