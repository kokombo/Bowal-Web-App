import { Navbar, PreLoader, SingleBusiness } from "../Components";
import { useGlobalContext } from "../Context/context";
import { useSavedBusinesses } from "../Context/useSavedBusinesses";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const SavedBusinesses = () => {
  const { savedBusinesses, loading } = useSavedBusinesses();
  const { openSidebar } = useGlobalContext();

  return (
    <section className="p-4 flex flex-col gap-6 bg-main-bg">
      <Navbar
        text="Saved Vendors"
        leftIcon={<FaBars onClick={openSidebar} />}
        rightIcon1={<BiSearch />}
      />
      {loading ? (
        <PreLoader />
      ) : savedBusinesses < 1 ? (
        <section className=" flex items-center justify-center h-screen">
          <h2>You have not saved any business yet</h2>
        </section>
      ) : (
        <main>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {savedBusinesses.map((item) => {
              return <SingleBusiness key={item.id} {...item} />;
            })}
          </div>
        </main>
      )}
    </section>
  );
};

export default SavedBusinesses;
