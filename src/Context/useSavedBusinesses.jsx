import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useGlobalContext } from "./context";

export const useSavedBusinesses = () => {
  const [savedBusinesses, setSavedBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useGlobalContext();

  const getSavedBusinesses = async () => {
    try {
      const ref = collection(db, `users/${user.uid}/savedVendors`);
      const q = query(ref, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSavedBusinesses(newData);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getSavedBusinesses();
  }, [savedBusinesses]);

  return { savedBusinesses, loading };
};
