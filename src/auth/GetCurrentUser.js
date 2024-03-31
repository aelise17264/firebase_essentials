import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

export const getCurrentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) return null;
  return {
    id: user.uid,
  };
};
