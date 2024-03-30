import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const addAuthListener = (cb) => {
  const onChange = (user) => {
    if (user) {
      cb({});
    } else {
      cb(null);
    }
  };
  return onAuthStateChanged(onChange);
};
