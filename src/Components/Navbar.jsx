import React from "react";

const Navbar = ({ leftIcon, rightIcon1, rightIcon2, text }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl text-blue">{leftIcon}</div>

      <span className="text-xl text-black capitalize">{text}</span>

      <div className="flex justify-between items-center gap-5 text-2xl text-blue">
        {rightIcon1}
        {rightIcon2}
      </div>
    </div>
  );
};

export default Navbar;
