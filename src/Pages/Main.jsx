import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className="py-10 px-4">
      <Link to="/login">Sign In</Link>
      <h1>Bowal E-commerce Markerplace</h1>
    </section>
  );
};

export default Main;
