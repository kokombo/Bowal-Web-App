import React from "react";
import { useGlobalContext } from "../Context/context";
import { SingleBusiness } from "../Components";

const FeaturedBusiness = () => {
  const { vendors } = useGlobalContext();

  return (
    <div>
      {vendors.map((item) => {
        return <SingleBusiness key={item.id} {...item} />;
      })}
    </div>
  );
};

export default FeaturedBusiness;
