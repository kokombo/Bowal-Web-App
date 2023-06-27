import React from "react";
// import { checkImageUrl } from "../Utilities";
import { AiFillPlusCircle } from "react-icons/ai";

const UploadStoreImage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-black">
      {/* <img
        src={checkImageUrl(img) ? img : "https://i.ibb.co/TqsQ2Nj/logo1.png"}
        className="w-full h-full"
      /> */}

      <label className="absolute left-2 bottom-2">
        <span className="text-yellow text-2xl">
          <AiFillPlusCircle />
        </span>
        <input type="file" className="hidden" />
      </label>
    </div>
  );
};

export default UploadStoreImage;
