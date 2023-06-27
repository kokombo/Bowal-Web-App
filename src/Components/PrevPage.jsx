import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const PrevPage = ({ path }) => {
  return (
    <Link to={`${path}`} relative="path">
      <BsArrowLeft />
    </Link>
  );
};

export default PrevPage;
