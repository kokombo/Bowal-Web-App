import React from "react";

const SingleCategory = ({ backgroundColor, category, url }) => {
  return (
    <article className="flex flex-col gap-2 items-center hover:translate-y-1">
      <div className="relative flex items-center justify-center">
        <div
          className="h-28 w-28 rounded-sm"
          style={{ backgroundColor: `${backgroundColor}` }}
        ></div>

        <div className="absolute">
          <img src={url} alt={category} />
        </div>
      </div>
      <p className="max-w-pd text-sm font-body capitalize">{category}</p>
    </article>
  );
};

export default SingleCategory;
