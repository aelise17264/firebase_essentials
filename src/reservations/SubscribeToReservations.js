import firebase from "firebase/app";
import { getRestaurants } from "../restaurants";
import { mapAsync } from "../util";

export const subscribeToReservations = (userId, cb) => {
  const callback = async (querySnapshot) => {
    const reservations = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const populatedReservations = await mapAsync(
      reservations,
      async (reservation) => {
        const restaurant = await getRestaurants(reservation.restaurantId);
        return firebase
          .firestore()
          .collection("reservations")
          .where("userId", "==", userId)
          .onSnapshot(callback);
      },
    );
  };
};
