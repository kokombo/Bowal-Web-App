import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisibilityOn, setIsVisibilityOn] = useState(false);
  const [preLoading, setPreLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [savedBusinesses, setSavedBusinesses] = useState([]);

  const visibility = () => {
    setIsVisibilityOn(!isVisibilityOn);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        visibility,
        isVisibilityOn,
        preLoading,
        isButtonLoading,
        setIsButtonLoading,
        user,
        vendors,
        savedBusinesses,
        setSavedBusinesses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
