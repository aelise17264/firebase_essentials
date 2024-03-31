import firebase from "firebase/app";
import { mapAsync } from "../util";
import { getUserInfo } from "../user/GetUserInfo";

export const getReviews = async (restaurantId) => {
  const querySnapshot = await firebase
    .firestore()
    .collection("reviews")
    .where("reastaurantId", "==", restaurantId)
    .get();

  const reviews = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  const populatedReviews = await mapAsync(reviews, async (review) => {
    const author = await getUserInfo(review.userId);
    return {
      ...review,
      author,
    };
  });

  return populatedReviews;
};
