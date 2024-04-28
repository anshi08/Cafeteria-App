import React from "react";
import RealtimeData from "./components/index.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

// const firebaseConfig = {
//   apiKey: "AIzaSyAumU7FCQcTUVAGsiSVUwnQp4RWhLoE13o",
//   authDomain: "conn-facd2.firebaseapp.com",
//   databaseURL: "https://conn-facd2-default-rtdb.firebaseio.com",
//   projectId: "conn-facd2",
//   storageBucket: "conn-facd2.appspot.com",
//   messagingSenderId: "971118345970",
//   appId: "1:971118345970:web:5f3ee03ddfd0a487591a6b",
//   measurementId: "G-RD3JYGZEQ5"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <>

      <Header />
      <Outlet />
    </>


  );
}

export default App;
