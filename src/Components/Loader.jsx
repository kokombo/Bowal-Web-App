import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <ThreeDots
      height="30"
      width="30"
      radius="9"
      color="#FCFCFC"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loading;
