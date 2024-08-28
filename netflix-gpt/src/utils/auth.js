import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export const createUser = async ({ email, password, userName: displayName }) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    user = await updateProfile(auth.currentUser, { displayName });
    return user;
  } catch (error) {
    return {
      error: "Email already in use"
    }
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return {
      error: "Sign in Failure"
    }
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};