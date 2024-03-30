import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const addAuthListener = (cb) => {
  //   const onChange = (user) => {
  //     if (user) {
  //       cb({});
  //     } else {
  //       cb(null);
  //     }
  //   };
  //   return getAuth.onAuthStateChanged(onChange);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      cb({});
    } else {
      cb(null);
    }
  });
};
