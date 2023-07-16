import { Suspense } from "react";
import { getCategories } from "../Firebase/firebase";
import { Await, useLoaderData, defer, Link } from "react-router-dom";
import { Navbar, PreLoader, SingleCategory } from "../Components";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useGlobalContext } from "../Context/context";

export const loader = () => {
  return defer({ categories: getCategories() });
};

const Categories = () => {
  const getCategoriesPromise = useLoaderData();
  const { openSidebar } = useGlobalContext();

  const renderCategories = (categories) => {
    const categoriesData = categories.map((item) => {
      const { category } = item;
      // const newCategory = category.replace(/ /g, "-");

      return (
        <Link key={item.id} to={`/${category}`}>
          <SingleCategory {...item} />
        </Link>
      );
    });

    return (
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 text-center">
        {categoriesData}
      </div>
    );
  };

  return (
    <div className="m-4">
      <Navbar
        leftIcon={<FaBars onClick={openSidebar} />}
        text="Categories"
        rightIcon1={<BiSearch />}
      />

      <div className="mt-8 md:mt-16">
        <Suspense fallback={<PreLoader />}>
          <Await resolve={getCategoriesPromise.categories}>
            {renderCategories}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Categories;
