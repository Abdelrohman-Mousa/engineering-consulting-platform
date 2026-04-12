import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {auth, db} from "./firebaseConfig";
import {doc, serverTimestamp, setDoc} from "firebase/firestore";

//Sign In
export const signup = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", res.user.uid);
    const username = res.user.email.split("@")[0];

    await setDoc(userRef, {
        email: res.user.email,
        name: username,
        imageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}`,
        role: "user",
        createdAt: serverTimestamp(),
    });

    return res.user;
};

// 🔵 Login
export const loginWithEmail = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

// 🔴 Logout
export const logout = async () => {
    return await signOut(auth);
};