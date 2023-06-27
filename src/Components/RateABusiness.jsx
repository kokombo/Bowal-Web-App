import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const colors = {
  yellow: "#ffc107",
  grey: "#e4e5e9",
};

const RateABusiness = ({ fontSize }) => {
  const [ratingValue, setRatingValue] = useState(null);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setRatingValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} style={{ fontSize: `${fontSize}` }}>
            <AiFillStar
              color={
                (ratingValue || hoverValue) > index
                  ? colors.yellow
                  : colors.grey
              }
              onClick={() => {
                handleClick(index + 1);
              }}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          </span>
        );
      })}
    </div>
  );
};

export default RateABusiness;
