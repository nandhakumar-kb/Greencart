import React from 'react';
import { useAppContext } from '../context/AppContext';
import { categories } from '../assets/assets';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  // Find the category based on the category path from the URL
  const searchCategory = categories.find((item) => item.path.toLowerCase() === category);

  // Filter products based on the category path
  const filteredProducts = products.filter((product) => product.category.toLowerCase() === category);

  return (
    <div>
      {searchCategory ? (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl md:text-3xl font-medium">{searchCategory.text.toUpperCase()}</p>
          <div className="w-40 h-0.5 bg-primary rounded-full"></div>
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500">Category not found</div>
      )}

      {/* If there are no products in this category */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-lg text-gray-500 mt-6">No products available in this category</div>
      )}
    </div>
  );
};

export default ProductCategory;
