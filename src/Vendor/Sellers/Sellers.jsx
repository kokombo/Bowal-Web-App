import React, { Suspense } from "react";
import { useLoaderData, Await, defer } from "react-router-dom";
import { getVendors } from "../../Firebase/firebase";
import { PreLoader, SingleBusiness, Navbar, PrevPage } from "../../Components";
import { BiSearch } from "react-icons/bi";
import { useParams } from "react-router-dom";

export const loader = () => {
  return defer({ vendors: getVendors() });
};

const Sellers = () => {
  const getVendorsPromise = useLoaderData();
  const renderVendors = (vendors) => {
    const { category } = useParams();

    const displayedVendors = vendors.filter(
      (vendor) => vendor.category === category
    );

    const vendorsData = displayedVendors.map((item) => {
      return <SingleBusiness key={item.id} {...item} />;
    });

    return (
      <div className="grid gap-5">
        <Navbar
          leftIcon={<PrevPage path="/categories" />}
          text={category}
          rightIcon1={<BiSearch />}
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {vendorsData}
        </div>
      </div>
    );
  };

  return (
    <section className="px-4 mt-4">
      <Suspense fallback={<PreLoader />}>
        <Await resolve={getVendorsPromise.vendors}>{renderVendors}</Await>
      </Suspense>
    </section>
  );
};

export default Sellers;
