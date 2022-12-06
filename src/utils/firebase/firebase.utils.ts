import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
  
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByEJWgDNVukW3fo6ILIPUsrDN9yZKNOhY",
  authDomain: "ak-project6.firebaseapp.com",
  projectId: "ak-project6",
  storageBucket: "ak-project6.appspot.com",
  messagingSenderId: "388342363465",
  appId: "1:388342363465:web:4bab323bdce6d931dd9698",
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const db = getFirestore();
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInfo: {} = {}
) => {
  const docRef = await doc(db, "users", userAuth.uid);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth,
      date = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        date,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(`error creating the user`, error);
    }
  }

  return docRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

 export const signInUserWithEmailAndPassword = async(email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
 }

 export const signOutUser = async () => {
  await signOut(auth);
 }
