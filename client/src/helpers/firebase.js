import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getEvn } from "./getEnv";

const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "blog-platform-97b09.firebaseapp.com",
    projectId: "blog-platform-97b09",
    storageBucket: "blog-platform-97b09.firebasestorage.app",
    messagingSenderId: "173077884405",
    appId: "1:173077884405:web:646c1e518c24344e8d44bc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
