import { db } from "../firebaseConfig";
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    updateDoc
} from "firebase/firestore";

export const subscribeToMessages = (callback: (data: any[]) => void) => {
    const q = query(
        collection(db, "ContactMessages"),
        orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const messages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        callback(messages);
    });

    return unsubscribe;
};

export const markAsRead = async (id: string) => {
    await updateDoc(doc(db, "ContactMessages", id), {
        isRead: true
    });
};

export const updateStatus = async (id: string, status: string) => {
    await updateDoc(doc(db, "ContactMessages", id), {
        status
    });
};