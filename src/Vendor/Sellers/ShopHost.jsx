import React from "react";
import { Outlet, useLoaderData, NavLink, Link } from "react-router-dom";
import { Rating, SaveBusiness } from "../../Components";
import { TbVectorTriangle } from "react-icons/tb";
import { getVendor } from "../../Firebase/firebase";
import { BsArrowLeft } from "react-icons/bs";
import { checkImageUrl } from "../../Utilities";

export const loader = ({ params }) => {
  return getVendor(params.id);
};

const ShopHost = () => {
  const currentVendor = useLoaderData();
  // const newCurrentVendor = currentVendor.category.replace(/ /g, "-");

  const isActiveStyle = {
    borderBottom: "5px solid #023E8A",
    width: "fit-content",
  };

  return (
    <section>
      <div className="h-305 relative">
        <Link
          to={`/${currentVendor.category}`}
          className="absolute text-2xl text-white left-0 p-4"
        >
          <BsArrowLeft />
        </Link>
        <div className="absolute text-2xl text-white right-0 p-4">
          <TbVectorTriangle />
        </div>
        <div className="absolute bottom-5 right-5">
          <SaveBusiness currentVendor={currentVendor} />
        </div>
        <div className="h-full w-full flex items-center justify-center bg-black">
          <img
            src={
              checkImageUrl(currentVendor.backgroundImage)
                ? currentVendor.backgroundImage
                : "https://i.ibb.co/TqsQ2Nj/logo1.png"
            }
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="py-5 px-2 flex justify-between items-center">
        <article className="flex items-center justify-center gap-3">
          <div className="h-[65px] w-[65px] rounded-full flex items-center relative bg-black">
            <img
              src={
                checkImageUrl(currentVendor.profilePicture)
                  ? currentVendor.profilePicture
                  : "https://i.ibb.co/TqsQ2Nj/logo1.png "
              }
              className="h-full w-full rounded-full border-none"
            />
          </div>

          <div className="capitalize max-w-[151px]">
            <h1 className="text-black text-xl font-semibold">
              {currentVendor.name}
            </h1>
            <p className="text-lg text-bd-black">Ikeja, Lagos</p>
          </div>
        </article>

        <article>
          <Rating fontSize="22px" />
        </article>
      </div>

      <div className="flex justify-between px-8 md:px-14 pt-6 capitalize text-lg text-black text-center">
        <NavLink
          to="."
          aria-label="shop"
          end
          style={({ isActive }) => (isActive ? isActiveStyle : null)}
        >
          shop
        </NavLink>
        <NavLink
          to="info"
          aria-label="info"
          style={({ isActive }) => (isActive ? isActiveStyle : null)}
        >
          info
        </NavLink>
        <NavLink
          to="reviews"
          aria-label="reviews"
          style={({ isActive }) => (isActive ? isActiveStyle : null)}
        >
          reviews
        </NavLink>
      </div>

      <div className="border-0.5 w-full"></div>

      <Outlet context={{ currentVendor }} />
    </section>
  );
};

export default ShopHost;
