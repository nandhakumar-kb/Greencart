import React from 'react';
import { categories } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Categories = () => {
  const { navigate } = useAppContext();

  const handleCategoryClick = (path) => {
    navigate(`/products/${path.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="mt-16" aria-labelledby="categories-heading">
      <h1 id="categories-heading" className="text-2xl md:text-3xl font-semibold mb-6">
        Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
        {categories?.map((category) => (
          <div
            key={category.path}
            role="button"
            tabIndex={0}
            aria-label={`Browse ${category.text} category`}
            title={`Browse ${category.text}`}
            className={`group cursor-pointer p-5 rounded-lg flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50`}
            style={{ backgroundColor: category.bgColor }}
            onClick={() => handleCategoryClick(category.path)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCategoryClick(category.path);
            }}
          >
            <img
              src={category.image}
              alt={`${category.text} category`}
              className="group-hover:scale-110 transition-transform duration-300 transform max-w-28"
              loading="lazy"
            />
            <p className="font-medium mt-2 text-sm md:text-base text-gray-800">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
