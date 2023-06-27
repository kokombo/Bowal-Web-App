import React from "react";
import { VscAccount } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";
import { sidebarData } from "../Assets/data/data";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen, user } = useGlobalContext();
  const navigate = useNavigate();

  const logOut = () => {
    try {
      signOut(auth);
      navigate("/login");
    } catch {
      return error;
    }
  };

  // w-3/5 sm:w-2/5 xl:w-1/5

  //w-2/5 sm:w-3/5 xl:w-4/5

  return (
    <aside
      className={`${
        isSidebarOpen ? "inline scale-up-hor-left" : "hidden"
      } fixed top-0 z-50 left-0 w-full h-full flex justify-between scroll-smooth`}
    >
      <div className=" bg-main-bg overflow-scroll min-w-sb h-screen shadow-lg font-medium">
        <nav className="relative pt-20 px-4 h-194 bg-yellow">
          <div className="flex flex-col gap-4">
            <span className="text-5xl text-white">{<VscAccount />}</span>
            <h2 className="capitalize text-white">
              {user && user.displayName}
            </h2>
          </div>

          <button onClick={closeSidebar}>
            <span className=" absolute right-5 top-10 text-2xl text-white">
              <FaTimes />
            </span>
          </button>
        </nav>

        <div className="px-4 py-6 flex flex-col gap-6">
          <h2 className="text-black text-xl font-semibold px-2">Menu</h2>

          <div className="flex flex-col gap-6">
            {sidebarData.map((item, index) => {
              const { page, icon, url } = item;
              return (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-3xl text-blue bg-icon-bg p-2 rounded-full">
                    {icon}
                  </span>
                  <Link
                    to={url}
                    onClick={closeSidebar}
                    className="capitalize text-sm"
                  >
                    {page}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="flex items-center gap-2 p-8 text-red-500"
          onClick={closeSidebar}
        >
          <FiLogOut />
          <Link onClick={logOut}>
            <h4 className="text-lg font-medium"> Log Out </h4>
          </Link>
        </div>
      </div>

      <div
        onClick={closeSidebar}
        className="h-full w-full bg-green-50 opacity-5"
      ></div>
    </aside>
  );
};

export default Sidebar;
