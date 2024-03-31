import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, serviceWorker } from "./app/index.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

// const fbApiKey = ;
// console.log(fbApiKey);

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_ESSENTIALS_API_KEY}`,
  authDomain: "restaurant-reservations-m3024.firebaseapp.com",
  projectId: "restaurant-reservations-m3024",
  storageBucket: "restaurant-reservations-m3024.appspot.com",
  messagingSenderId: "301268353621",
  appId: "1:301268353621:web:cfffef4d1c218522c5cadc",
  measurementId: "G-G3MTNVNZHG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
