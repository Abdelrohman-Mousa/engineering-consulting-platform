import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "src/firebase/firebaseConfig";

export const getUsersAnalytics = async () => {

    try {

        const usersRef = collection(db, "users");

        const snapshot = await getDocs(usersRef);

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const result = days.map((day) => ({
            day,
            count: 0,
        }));

        snapshot.forEach((doc) => {

            const data = doc.data();

            if (!data.createdAt) return;

            const date = data.createdAt.toDate();

            const dayIndex = date.getDay();

            result[dayIndex].count += 1;
        });

        return result;

    } catch (error) {

        console.log(error);

        return [];
    }
};


// =============Consultation=============

export const getConsultationsAnalytics = async () => {

    try {

        const consultationsRef = collection(db, "consultations");

        const snapshot = await getDocs(consultationsRef);

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const result = days.map((day) => ({
            day,
            count: 0,
        }));

        snapshot.forEach((doc) => {

            const data = doc.data();

            if (!data.createdAt) return;

            const date = data.createdAt.toDate();

            const dayIndex = date.getDay();

            result[dayIndex].count += 1;
        });

        return result;

    } catch (error) {

        console.log(error);

        return [];
    }
};