import React from "react";
import Rating from "../../components/Rating";
import CheckImage from "../../Components/CheckImage";

const Reviews = () => {
  return (
    <div className="px-4 py-8 max-w-[600px] ">
      <div className="grid place-items-center">
        <p className="text-[40px] leading-[47px] font-bold text-blue">4.0</p>
        <Rating fontSize="28px" />
      </div>

      <div className="mt-6 grid gap-8">
        {[...Array(5)].map((_, index) => (
          <article key={index}>
            <article className="flex items-center justify-between">
              <CheckImage size="50" />
              <article className="text-lg">
                <p className="text-black">Micheal Johnny</p>
                <p className="text-light-black">February 2, 2021</p>
              </article>
              <Rating fontSize="18px" />
            </article>
            <article className="mt-4">
              <p>
                Your products are quality and durable. I enjoyed using them.
              </p>
            </article>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
