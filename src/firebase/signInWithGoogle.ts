import {
    doc,
    getDoc,
    serverTimestamp,
    setDoc
} from "firebase/firestore";

import { auth, db } from "./firebaseConfig";

import {
    signInWithPopup,
    GoogleAuthProvider
} from "@firebase/auth";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {

    try {

        const result =
            await signInWithPopup(auth, provider);

        const user = result.user;

        const userRef =
            doc(db, "users", user.uid);

        const userSnap =
            await getDoc(userRef);

        // لو المستخدم جديد فقط
        if (!userSnap.exists()) {

            await setDoc(userRef, {

                email: user.email,

                name:
                    user.displayName ||
                    user.email?.split("@")[0] ||
                    "User",

                imageUrl:
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.displayName || "User"
                    )}`,

                role: "user",

                createdAt: serverTimestamp(),

                lastLogin: serverTimestamp(),
            });

        } else {

            // تحديث آخر تسجيل دخول فقط
            await setDoc(
                userRef,
                {
                    lastLogin: serverTimestamp(),
                },
                { merge: true }
            );
        }

        return user;

    } catch (err) {

        throw err;
    }
};