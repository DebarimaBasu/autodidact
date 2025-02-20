import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyAMtPPTWvZrX3YXAuigYV4Qn4iGEQLcLbk",
  authDomain: "autodidact-1df11.firebaseapp.com",
  projectId: "autodidact-1df11",
  storageBucket: "autodidact-1df11.firebasestorage.app",
  messagingSenderId: "581543974180",
  appId: "1:581543974180:web:44617c97faf9abe79c4fb1",
  measurementId: "G-W8KBJ4EJB3"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);



export { db };