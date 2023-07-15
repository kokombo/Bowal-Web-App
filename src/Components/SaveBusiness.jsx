import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useGlobalContext } from "../Context/context";
import { deleteDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { useSavedBusinesses } from "../Context/useSavedBusinesses";

const SaveBusiness = ({ currentVendor }) => {
  const { user } = useGlobalContext();
  const { savedBusinesses } = useSavedBusinesses();

  //saves a vendor to savedVendors in the backend
  const saveAVendor = async () => {
    try {
      await setDoc(
        doc(db, `users/${user.uid}/savedVendors`, `${currentVendor.id}`),
        {
          ...currentVendor,
          timestamp: serverTimestamp(),
        }
      );
    } catch (error) {}
  };

  //removes a vendor from savedVendors in the backend
  const removeAVendor = async () => {
    try {
      await deleteDoc(
        doc(db, `users/${user.uid}/savedVendors`, `${currentVendor.id}`)
      );
    } catch (error) {}
  };

  const existingIDs = savedBusinesses.map((savedBusiness) => savedBusiness.id);

  return (
    <button
      type="button"
      className="bg-main-bg w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
    >
      {existingIDs.includes(currentVendor.id) ? (
        <FcLike onClick={removeAVendor} />
      ) : (
        <FcLikePlaceholder onClick={saveAVendor} />
      )}
    </button>
  );
};

export default SaveBusiness;
