import React from "react";
import { useOutletContext } from "react-router-dom";

const Info = () => {
  const { currentVendor } = useOutletContext();

  return (
    <section className="px-4 py-6">
      <div className="flex flex-col gap-5">
        <article className="capitalize flex flex-col gap-3">
          <h2 className="text-base text-bd-black">Business name</h2>
          <h1 className="text-lg">{currentVendor.name}</h1>
        </article>

        <article className="flex flex-col gap-3">
          <h2 className="capitalize text-base text-bd-black">
            business description
          </h2>
          <p className="text-lg">{currentVendor.description}</p>
        </article>

        <article className="capitalize flex flex-col gap-3">
          <h2 className="text-base text-bd-black">business location</h2>
        </article>
      </div>
    </section>
  );
};

export default Info;
