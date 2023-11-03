import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzwDYQpLqRVe7nCd2eKDJtPHN-iaDdPqU",
  authDomain: "tensorrank-7126b.firebaseapp.com",
  projectId: "tensorrank-7126b",
  storageBucket: "tensorrank-7126b.appspot.com",
  messagingSenderId: "277734588573",
  appId: "1:277734588573:web:b5e2f66b6ef7f23c4a5474",
  measurementId: "G-Y5MYEH1X2W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)