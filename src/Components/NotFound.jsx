import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="py-10 px-4">
      <h1 className="text-2xl">This page is not available yet</h1>
      <Link to="/" className="underline">
        Please go to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
