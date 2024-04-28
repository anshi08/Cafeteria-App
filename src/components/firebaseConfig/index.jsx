import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDybdpOGMMprPKP6kY_b4GHOFkJqLA7Mlo",
    authDomain: "jiit-df1fb.firebaseapp.com",
    databaseURL: "https://jiit-df1fb-default-rtdb.firebaseio.com",
    projectId: "jiit-df1fb",
    storageBucket: "jiit-df1fb.appspot.com",
    messagingSenderId: "71363653006",
    appId: "1:71363653006:web:1f684a32c15bf4c17a08df",
    measurementId: "G-65WEQPJ7FF",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
}

export default StartFirebase;