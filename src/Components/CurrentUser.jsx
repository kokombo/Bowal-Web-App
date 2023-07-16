import React from "react";
import { useGlobalContext } from "../Context/context";

const CurrentUser = () => {
  const { user } = useGlobalContext();
  return (
    <h4 className="capitalize font-semibold">Hi, {user && user.displayName}</h4>
  );
};

export default CurrentUser;
