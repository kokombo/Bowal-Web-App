import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useGlobalContext } from "../Context/context";

const RequireAuth = () => {
  const { user } = useGlobalContext();

  if (!user) {
    return (
      <Navigate to="/login" state={{ message: "You must log in first" }} />
    );
  }

  return <Outlet />;
};

export default RequireAuth;
