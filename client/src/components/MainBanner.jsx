import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Background Images */}
      <img
        src={assets.main_banner_bg}
        alt="Main promotional banner background"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="Main promotional banner background mobile"
        className="w-full md:hidden"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center px-4 md:px-10 lg:px-24 pb-24 md:pb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-tight lg:leading-snug max-w-xl lg:max-w-3xl text-black">
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6 font-medium">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-primary text-white rounded hover:bg-primary-dull transition-all"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow icon"
              className="transform transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 text-primary rounded hover:underline transition-all"
          >
            Explore Deals
            <img
              src={assets.black_arrow_icon}
              alt="arrow icon"
              className="transform transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
