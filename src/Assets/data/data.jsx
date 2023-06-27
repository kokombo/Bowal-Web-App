import {
  MdCategory,
  MdFavorite,
  MdNotifications,
  MdAccountCircle,
  MdShoppingCart,
} from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import banner1 from "../banners/banner1.jpg";
import banner2 from "../banners/banner2.jpg";
import banner3 from "../banners/banner3.jpg";
import banner4 from "../banners/banner4.jpg";
import banner5 from "../banners/banner5.jpg";

export const sidebarData = [
  { page: "home", icon: <HiHome />, url: "/" },
  { page: "My Account", icon: <MdAccountCircle />, url: "./account" },
  { page: "our categories", icon: <MdCategory />, url: "./categories" },
  { page: "saved businesses", icon: <MdFavorite />, url: "./savedbusinesses" },
  { page: "notifications", icon: <MdNotifications />, url: "./notifications" },
  { page: "cart", icon: <MdShoppingCart />, url: "./cart" },
  { page: "help & support", icon: <MdLiveHelp />, url: "./url" },
];

export const bannerData = [
  {
    id: 1,
    img: <img src={banner1} />,
    dot: <GoPrimitiveDot />,
  },

  {
    id: 2,
    img: <img src={banner2} />,
    dot: <GoPrimitiveDot />,
  },

  {
    id: 3,
    img: <img src={banner3} />,
    dot: <GoPrimitiveDot />,
  },

  {
    id: 4,
    img: <img src={banner4} />,
    dot: <GoPrimitiveDot />,
  },

  {
    id: 5,
    img: <img src={banner5} />,
    dot: <GoPrimitiveDot />,
  },
];

export const staticCategories = [
  {
    id: 1,
    name: "men fashion",
  },
  {
    id: 1,
    name: "women fashion",
  },
  {
    id: 1,
    name: "food",
  },
  {
    id: 1,
    name: "art's & crafts",
  },
  {
    id: 1,
    name: "bags & luggae",
  },
  {
    id: 1,
    name: "gift item",
  },
];
