import React from "react";
import { useOutletContext } from "react-router-dom";
import SingleProduct from "../../Components/SingleProduct";

const Shop = () => {
  const { currentVendor } = useOutletContext();

  if (!currentVendor.products) {
    return (
      <section className="px-4 py-8 flex justify-center items-center h-40">
        <h2>No Products available in the shop at the moment</h2>
      </section>
    );
  }

  return (
    <section className="px-4 py-8 flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold">New Arrivals</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 place-items-center">
          {currentVendor.products.newArrivals.map((item) => {
            return <SingleProduct key={item.productImage} {...item} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold">Hot Deals</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 place-items-center">
          {currentVendor.products.hotDeals.map((item) => {
            return <SingleProduct key={item.productImage} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
