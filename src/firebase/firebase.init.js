// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxJukNbkSj0iFIPYr1tTbHQupjnS8zX3Q",
  authDomain: "dragon-news-react-app-600cd.firebaseapp.com",
  projectId: "dragon-news-react-app-600cd",
  storageBucket: "dragon-news-react-app-600cd.appspot.com",
  messagingSenderId: "180672498210",
  appId: "1:180672498210:web:cbc897f68dd30ca74f187b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth