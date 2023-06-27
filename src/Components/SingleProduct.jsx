import React from "react";

const SingleProduct = ({
  productName,
  productImage,
  productNumber,
  productPrice,
}) => {
  return (
    <div>
      <article className="h-132 w-160 bg-secondary-bg rounded-sm flex items-center justify-center relative">
        <img src={productImage} alt={productName} />
        <article className="h-8 w-8 bg-blue flex items-center justify-center text-white text-lg font-semibold absolute top-0 right-0 rounded-tr-sm">
          {productNumber}
        </article>
      </article>

      <article className="flex flex-col mt-2 capitalize text-black text-lg">
        <span>{productName}</span>
        <span className="font-medium">N {productPrice}</span>
      </article>
    </div>
  );
};

export default SingleProduct;
