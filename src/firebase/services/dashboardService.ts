import {
    collection,
    onSnapshot,
} from "firebase/firestore";

import { db } from "../firebaseConfig";

export const subscribeToDashboardStats = (
    callback: (data: any) => void
) => {

    const usersRef = collection(db, "users");
    const messagesRef = collection(db, "ContactMessages");
    const consultationsRef = collection(db, "consultations");

    const unsubscribeUsers = onSnapshot(usersRef, (usersSnapshot) => {

        onSnapshot(messagesRef, (messagesSnapshot) => {

            onSnapshot(consultationsRef, (consultationsSnapshot) => {

                const totalUsers = usersSnapshot.size;

                const totalMessages = messagesSnapshot.size;

                const totalConsultations =
                    consultationsSnapshot.size;

                const now = new Date();

                const currentMonth = now.getMonth();

                const currentYear = now.getFullYear();

                const lastMonth =
                    currentMonth === 0
                        ? 11
                        : currentMonth - 1;

                const lastMonthYear =
                    currentMonth === 0
                        ? currentYear - 1
                        : currentYear;

                let currentMonthUsers = 0;
                let lastMonthUsers = 0;

                usersSnapshot.forEach((doc) => {

                    const data = doc.data();

                    if (!data.createdAt) return;

                    const date = data.createdAt.toDate();

                    const month = date.getMonth();

                    const year = date.getFullYear();

                    if (
                        month === currentMonth &&
                        year === currentYear
                    ) {
                        currentMonthUsers++;
                    }

                    if (
                        month === lastMonth &&
                        year === lastMonthYear
                    ) {
                        lastMonthUsers++;
                    }
                });

                let currentMonthMessages = 0;
                let lastMonthMessages = 0;

                messagesSnapshot.forEach((doc) => {

                    const data = doc.data();

                    if (!data.createdAt) return;

                    const date = data.createdAt.toDate();

                    const month = date.getMonth();

                    const year = date.getFullYear();

                    if (
                        month === currentMonth &&
                        year === currentYear
                    ) {
                        currentMonthMessages++;
                    }

                    if (
                        month === lastMonth &&
                        year === lastMonthYear
                    ) {
                        lastMonthMessages++;
                    }
                });

                let currentMonthConsultations = 0;
                let lastMonthConsultations = 0;

                consultationsSnapshot.forEach((doc) => {

                    const data = doc.data();

                    if (!data.createdAt) return;

                    const date = data.createdAt.toDate();

                    const month = date.getMonth();

                    const year = date.getFullYear();

                    if (
                        month === currentMonth &&
                        year === currentYear
                    ) {
                        currentMonthConsultations++;
                    }

                    if (
                        month === lastMonth &&
                        year === lastMonthYear
                    ) {
                        lastMonthConsultations++;
                    }
                });

                callback({
                    totalUsers,

                    usersJoined: {
                        currentMonth: currentMonthUsers,
                        lastMonth: lastMonthUsers,
                    },

                    totalMessages,

                    messagesSent: {
                        currentMonth: currentMonthMessages,
                        lastMonth: lastMonthMessages,
                    },

                    totalConsultations,

                    consultationsReceived: {
                        currentMonth:
                        currentMonthConsultations,

                        lastMonth:
                        lastMonthConsultations,
                    },
                });

            });

        });

    });

    return () => {
        unsubscribeUsers();
    };
};