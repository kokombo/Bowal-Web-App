import React, { Suspense } from "react";
import { FaBars } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link, useLoaderData, Await, defer } from "react-router-dom";
import { getCategories } from "../Firebase/firebase";
import {
  Banner,
  Navbar,
  PreLoader,
  SingleCategory,
  Button,
} from "../Components";
import { useGlobalContext } from "../Context/context";

export const loader = () => {
  return defer({ categories: getCategories() });
};

const Home = () => {
  const getCategoriesPromise = useLoaderData();

  const { user, openSidebar } = useGlobalContext();

  const renderCategories = (categories) => {
    const categoriesData = categories.slice(0, 6).map((item) => {
      const { category } = item;
      // const newCategory = category.replace(/ /g, "-");
      return (
        <Link key={item.id} to={`/${category}`}>
          <SingleCategory {...item} />
        </Link>
      );
    });

    return (
      <div className="grid grid-cols-3 md:grid-cols-6 py-4 gap-6 text-center">
        {categoriesData}
      </div>
    );
  };

  return (
    <Suspense fallback={<PreLoader />}>
      <section className="p-4 flex flex-col gap-6 bg-main-bg">
        <div className="flex flex-col gap-6">
          <Navbar
            leftIcon={<FaBars onClick={openSidebar} />}
            rightIcon1={<VscAccount />}
            rightIcon2={<BsCart2 />}
          />

          <h4 className="capitalize font-semibold">
            Hi, {user && user.displayName}
          </h4>

          <div className="relative w-full md:w-3/4 self-center">
            <span className="absolute left-2 md:left-6 top-3 md:top-5 text-secondary-text text-lg">
              <CiSearch />
            </span>
            <input
              placeholder="What would you like to buy?"
              className="bg-deep-white-bg w-full py-2 md:py-4 pl-8 md:pl-12 rounded-main-br border text-black outline-yellow"
            />
            <span className="absolute right-0 md:top-2 md:right-2">
              <Button
                bgColor="#FFA500"
                paddingY="7px"
                width="100px"
                text="search"
                color="#FFFFFF"
              />
            </span>
          </div>
        </div>

        <Banner />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h4 className="text-black text-lg font-bold">Categories</h4>
            <Link to="/categories">
              <p className="text-blue">See all</p>
            </Link>
          </div>

          <div>
            <Await resolve={getCategoriesPromise.categories}>
              {renderCategories}
            </Await>
          </div>
        </div>
      </section>

      <Link to="/category">Featured</Link>
    </Suspense>
  );
};

export default Home;
