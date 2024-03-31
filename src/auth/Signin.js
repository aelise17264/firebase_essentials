import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebase from "firebase/app";

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword();
    return {};
  } catch (e) {
    throw new Error("Error signing in");
  }
};
