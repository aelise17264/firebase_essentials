const firebase = require('firebase');
require('firebase/firestore');

const { reservations, restaurants, dateAvailabilities, reviews } = require('./testData');


const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_ESSENTIALS_API_KEY}`,
  authDomain: "restaurant-reservations-m3024.firebaseapp.com",
  projectId: "restaurant-reservations-m3024",
  storageBucket: "restaurant-reservations-m3024.appspot.com",
  messagingSenderId: "301268353621",
  appId: "1:301268353621:web:cfffef4d1c218522c5cadc",
  measurementId: "G-G3MTNVNZHG",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item;
      return db.collection(collectionName).doc(id).set(data);
    }),
  );
}

Promise.all([
  populateCollection("reservations", reservations),
  populateCollection("reviews", reviews),
  populateCollection("restaurants", restaurants),
  populateCollection("dateAvailabilities", dateAvailabilities),
])
  .then(() => {
    console.log("All Done");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });
