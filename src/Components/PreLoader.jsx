import React from "react";
import { Oval } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <div className="h-screen w-full fixed z-50 bottom-0 top-0 left-0 flex items-center justify-center overflow-hidden">
      <Oval
        height={60}
        width={60}
        color="#FFA500"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#FFA500"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};

export default PreLoader;
