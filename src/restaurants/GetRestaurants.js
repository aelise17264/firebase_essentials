import firebase from "firebase/app";

export const getRestaurants = async (id) => {
  const restaurntDoc = await firebase
    .firestore()
    .collection("restaurants")
    .doc(id)
    .get();

  const restaurant = restaurntDoc.data();

  return {
    ...restaurant,
    id,
  };
};
