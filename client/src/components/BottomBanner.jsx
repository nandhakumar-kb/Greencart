import React from 'react';
import { assets, features } from '../assets/assets';

const BottomBanner = () => {
  return (
    <section className="relative mt-24" aria-labelledby="why-best-heading">
      <picture>
        <source media="(min-width: 768px)" srcSet={assets.bottom_banner_image} />
        <img
          src={assets.bottom_banner_image_sm}
          alt="Promotional banner"
          className="w-full object-cover h-auto"
          loading="lazy"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col items-end justify-center pt-16 md:pt-24 md:pr-24">
        <div className="text-left max-w-md bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 id="why-best-heading" className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Why We Are the Best
          </h2>

          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 mt-6 transition-transform transform hover:scale-105">
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="w-9 md:w-12 transition-transform transform hover:scale-110"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
