import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { checkImageUrl } from "../Utilities";

const SingleBusiness = ({
  name,
  description,
  url,
  reviews,
  rating,
  id,
  category,
}) => {
  return (
    <Link to={`/${category}/${id}`}>
      <article className="bg-main-bg w-full h-132 rounded-sm flex gap-1 shadow-xl hover:shadow-lg">
        <div>
          <img
            src={
              checkImageUrl(url) ? url : "https://i.ibb.co/TqsQ2Nj/logo1.png"
            }
            alt={name}
            className="h-full max-w-piw"
          />
        </div>

        <div className="tracking-wide p-2 flex flex-col justify-evenly gap-1 w-full">
          <h1 className="text-lg capitalize font-medium text-black">{name}</h1>

          <p className="text-sm text-light-black">{description}</p>

          <div className="text-base flex justify-between items-center text-light-black">
            <div className="flex items-center gap-1">
              <span>{rating}</span>
              <span className="text-yellow">
                <AiFillStar />
              </span>
              <span>({reviews})</span>
            </div>

            <p className="self-end">xxkm away</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default SingleBusiness;
