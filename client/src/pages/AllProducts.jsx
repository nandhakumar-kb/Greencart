import React, { useState, useEffect, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const { products = [], searchQuery } = useAppContext();
  const filteredProducts = useMemo(() => {
    if (searchQuery.length > 0) {
      const query = searchQuery.toLowerCase();
      return products.filter(product => 
        product.name.toLowerCase().includes(query) && product.inStock
      );
    }
    return products.filter(product => product.inStock); 
  }, [searchQuery, products]);
  return (
    <div className="mt-16 flex flex-col">
      <div className="self-start">
        <p className="text-2xl md:text-3xl font-medium">All Products</p>
        <div className="w-40 h-0.5 bg-primary rounded-full"></div>
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-lg font-semibold mt-6">No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
