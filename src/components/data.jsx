// /import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database'; // Import only the database module from firebase

// const FirebaseDataFetcher = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Firebase configuration
//     const firebaseConfig = {
//         apiKey: "AIzaSyDRhxN4Qx3lz2fk78DTazhYCZTr4C6PwSI",
//         authDomain: "reactcafeorder.firebaseapp.com",
//         databaseURL: "https://reactcafeorder-default-rtdb.firebaseio.com",
//         projectId: "reactcafeorder",
//         storageBucket: "reactcafeorder.appspot.com",
//         messagingSenderId: "143175694190",
//         appId: "1:143175694190:web:d504d4f8421a60d89c737f",
//         measurementId: "G-EGK4JPLB1Z"
//     };

//     // Initialize Firebase
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }

//     // Reference to your Firebase database
//     const dbRef = firebase.database().ref('DevilHunter');

//     // Fetch data from Firebase
//     dbRef.on('value', (snapshot) => {
//       const firebaseData = snapshot.val();
//       setData(firebaseData);
//     });

//     // Cleanup function
//     return () => {
//       dbRef.off(); // Unsubscribe from the database reference when component unmounts
//     };
//   }, []); // Empty dependency array means this effect runs only once after initial render

//   return (
//     <div>
//       <h2>Data from Firebase:</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default FirebaseDataFetcher;
