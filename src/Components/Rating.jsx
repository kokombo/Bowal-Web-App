import React from "react";
import { AiFillStar } from "react-icons/ai";

const colors = {
  yellow: "#ffc107",
  grey: "#e4e5e9",
};

const Rating = ({ fontSize }) => {
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} style={{ fontSize: `${fontSize}` }}>
            <AiFillStar color={colors.grey} />
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
