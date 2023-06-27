import React from "react";

const Button = ({ bgColor, width, paddingY, color, text }) => {
  return (
    <button
      type="submit"
      style={{
        backgroundColor: `${bgColor}`,
        width: `${width}`,
        paddingTop: `${paddingY}`,
        paddingBottom: `${paddingY}`,
        color: `${color}`,
      }}
      className="rounded-main-br text-lg capitalize font-medium tracking-wide"
    >
      {text}
    </button>
  );
};

export default Button;
