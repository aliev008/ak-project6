import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/category/category.types";
import { AdditionalInformation, ObjectToAdd, UserData } from "./firebase.types";

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
  userAuth: User,
  additionalInfo: AdditionalInformation = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData>>  => {
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

  return snapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}

export const addCollectionAndDocuments = async<T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: ObjectToAdd) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.map((snaphot) => snaphot.data()) as Category[];

  return categoryMap;
};
