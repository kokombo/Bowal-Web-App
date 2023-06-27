import React from "react";
import { bannerData } from "../Assets/data/data.jsx";
import { useState, useEffect } from "react";

const Banner = () => {
  const [banners, setBanners] = useState(bannerData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = banners.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, banners]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 20000);

    return () => clearInterval(slider);
  }, [index]);

  const nextSlide = `translate-x-full`;
  const activeSlide = "translate-x-0 opacity-100";
  const prevSlide = `-translate-x-full`;

  return (
    <div className="flex relative flex-col gap-2 items-center overflow-hidden">
      <div className="relative place-items-center w-full h-194 ">
        {banners.map((banner, bannerIndex) => {
          const { id, img } = banner;

          let position = nextSlide;

          if (bannerIndex === index) {
            position = activeSlide;
          }

          if (
            bannerIndex === index - 1 ||
            (index === 0 && bannerIndex === banners.length - 1)
          ) {
            position = prevSlide;
          }

          return (
            <article
              key={id}
              className={`${position} h-full w-full transition duration-1000 absolute top-0 left-0 opacity-0`}
            >
              {img}
            </article>
          );
        })}
      </div>

      <div className="flex absolute bottom-0 text-xl text-secondary-text">
        {banners.map((banner, bannerIndex) => {
          const { id, dot } = banner;

          return (
            <button
              key={id}
              onClick={() => {
                setIndex(bannerIndex);
              }}
              className={`${index === bannerIndex && "text-blue"}`}
            >
              {dot}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
