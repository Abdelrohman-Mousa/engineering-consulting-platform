import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const subscribeUsersAnalytics = (callback) => {

    const ref = collection(db, "users");

    return onSnapshot(ref, (snapshot) => {

        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        const result = days.map(day => ({
            day,
            count: 0
        }));

        snapshot.forEach(doc => {

            const data = doc.data();
            if (!data.createdAt) return;

            const date = data.createdAt.toDate();
            const dayIndex = date.getDay();

            result[dayIndex].count += 1;
        });

        callback(result);
    });
};

// =============Consultation=============

export const subscribeConsultationsAnalytics = (callback) => {

    const ref = collection(db, "consultations");

    return onSnapshot(ref, (snapshot) => {

        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        const result = days.map(day => ({
            day,
            count: 0
        }));

        snapshot.forEach(doc => {

            const data = doc.data();
            if (!data.createdAt) return;

            const date = data.createdAt.toDate();
            const dayIndex = date.getDay();

            result[dayIndex].count += 1;
        });

        callback(result);
    });
};