// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAT8vNPpgnAiYcmC0f_uEV-JpOxN6XXlxE",
  authDomain: "biblio-99238.firebaseapp.com",
  databaseURL: "https://biblio-99238-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "biblio-99238",
  storageBucket: "biblio-99238.firebasestorage.app",
  messagingSenderId: "655878418653",
  appId: "1:655878418653:web:8be1a1632b1728207d6b34"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);