import { Suspense } from "react";
import { useLoaderData, Await, defer, useSearchParams } from "react-router-dom";
import { getVendors } from "../Firebase/firebase";
import { PreLoader, SingleBusiness } from "../Components";

export const loader = () => {
  return defer({ vendors: getVendors() });
};

const HomeFeaturedVendors = () => {
  const getVendorsPromise = useLoaderData();
  const [searchCategory, setSearchCategory] = useSearchParams();

  const categoryFilter = searchCategory.get("category");

  const renderVendors = (vendors) => {
    const displayedVendors = categoryFilter
      ? vendors.filter((vendor) => vendor.category === categoryFilter)
      : vendors;

    const vendorsData = displayedVendors.map((item) => {
      return <SingleBusiness key={item.id} {...item} />;
    });

    return <div className="grid gap-6">{vendorsData}</div>;
  };

  return (
    <section className="py-6 px-4">
      <h4 className="text-black text-lg font-bold">Featured Businesses</h4>

      <div className="mt-3">
        <Suspense fallback={<PreLoader />}>
          <Await resolve={getVendorsPromise.vendors}>{renderVendors}</Await>
        </Suspense>
      </div>
    </section>
  );
};

export default HomeFeaturedVendors;
