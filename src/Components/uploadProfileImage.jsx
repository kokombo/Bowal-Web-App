import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
// import { checkImageUrl } from "../Utilities";

const UploadProfileImage = ({ img }) => {
  return (
    <div className="h-[65px] w-[65px] rounded-full flex items-center relative bg-black">
      <label className="absolute top-0.5">
        <span className="text-yellow text-xl ">
          <AiFillPlusCircle />
        </span>
        <input type="file" className=" invisible" />
      </label>
      {/* 
      <img
        src={checkImageUrl(img) ? img : "https://i.ibb.co/TqsQ2Nj/logo1.png "}
        className="h-full w-full rounded-full border-none"
      /> */}
    </div>
  );
};

export default UploadProfileImage;
