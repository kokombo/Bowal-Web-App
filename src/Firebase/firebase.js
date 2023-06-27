import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const _apiKey = import.meta.env.VITE_API_KEY;
const _messagingSenderId = import.meta.env.VITE_SENDER_ID;
const _appId = import.meta.env.VITE_API_ID;
const _measurementId = import.meta.env.VITE_MEASUREMENT_ID;
const _authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const _projectId = import.meta.env.VITE_PROJECT_ID;
const _storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const _databaseUrl = import.meta.env.VITE_DATABASE_URL;

const firebaseConfig = {
  apiKey: _apiKey,
  authDomain: _authDomain,
  projectId: _projectId,
  storageBucket: _storageBucket,
  messagingSenderId: _messagingSenderId,
  appId: _appId,
  measurementId: _measurementId,
  databaseURL: _databaseUrl,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const categoriesCollectionRef = collection(db, "categories");

export async function getCategories() {
  const querySnapshot = await getDocs(categoriesCollectionRef);
  const categoriesArray = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return categoriesArray;
}

export async function getCategory(id) {
  const docRef = doc(db, "categories", id);
  const categorySnapshot = await getDoc(docRef);
  return {
    ...categorySnapshot.data(),
    id: categorySnapshot.id,
  };
}

export async function getVendors() {
  const vendorsCollectionRef = collection(db, "vendors");
  const querySnapshot = await getDocs(vendorsCollectionRef);
  const vendorsArray = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vendorsArray;
}

export async function getVendor(id) {
  const docRef = doc(db, "vendors", id);
  const vendorSnapshot = await getDoc(docRef);
  return {
    ...vendorSnapshot.data(),
    id: vendorSnapshot.id,
  };
}
