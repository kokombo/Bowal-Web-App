import { CiSearch } from "react-icons/ci";
import Button from "./Button";

const Search = () => {
  return (
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
  );
};

export default Search;
