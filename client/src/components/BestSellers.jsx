import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const BestSellers = () => {
  const { products } = useAppContext();
  const bestSellers = products?.slice(0, 5);

  const isLoading = !products;

  return (
    <section className="mt-16" aria-labelledby="best-sellers-heading">
      <h2 id="best-sellers-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-left">
        Best Sellers
      </h2>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="loader"></div> {/* Spinner */}
        </div>
      ) : bestSellers.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No best-selling products available.</p>
      )}
    </section>
  );
};

export default BestSellers;
