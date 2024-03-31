import firebase from "firebase/app";
import { getCurrentUser } from "../auth";
import { subscribeToReservations } from "./SubscribeToReservations";

export const subscribeToCurrentUserReservations = cb => {
    const currentUser = getCurrentUser();
    if(!currentUser) return cb([]);

    return subscribeToReservations(currentUser.id, cb);
}