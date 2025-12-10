import React, { useCallback } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, navigate } = useAppContext();
  const quantity = cartItems?.[product._id] || 0;

  const handleCardClick = useCallback(() => {
    navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
    scrollTo(0, 0);
  }, [navigate, product]);

  const rating = product.rating || 4;
  const totalReviews = product.totalReviews || 4;

  const renderStars = () =>
    Array(5)
      .fill('')
      .map((_, i) => (
        <img
          key={i}
          src={i < rating ? assets.star_icon : assets.star_dull_icon}
          alt={i < rating ? 'Filled star' : 'Empty star'}
          className="w-3 h-3"
        />
      ));

  return product && (
    <motion.div
      onClick={handleCardClick}
      className="border border-gray-300 rounded-md max-w-54 md:px-4 px-3 py-2 cursor-pointer hover:shadow-md transition duration-300 ease-in-out bg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="group flex items-center justify-center px-2">
        <motion.img
          src={product?.image?.[0] || assets.fallback_image}
          alt={product.name}
          className="group-hover:scale-105 transition-transform max-w-26 md:max-w-36"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="text-gray-600 text-sm mt-2">
        <p className="uppercase tracking-wide">{product.category}</p>
        <p className="text-gray-800 font-semibold text-lg truncate">{product.name}</p>

        <div className="flex items-center gap-1 mt-1" role="img" aria-label={`${rating} star rating`}>
          {renderStars()}
          <span className="text-xs text-gray-500">({totalReviews})</span>
        </div>

        <div className="flex items-end justify-between mt-3">
          <p className="text-base md:text-xl font-medium text-primary">
            {formatPrice(product.offerPrice || product.regularPrice)}
          </p>

          <div
            className="text-primary flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {quantity === 0 ? (
              <button
                className="flex items-center justify-center gap-1 bg-white border border-primary px-3 py-1 rounded text-sm text-primary-dull font-medium hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => addToCart(product._id)}
                aria-label={`Add ${product.name} to cart`}
              >
                <img src={assets.cart_icon} alt="cart" className="w-4 h-4" />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 px-2 py-1 bg-white rounded border border-primary text-sm">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="px-2"
                  aria-label={`Remove one ${product.name} from cart`}
                >
                  −
                </button>
                <span className="w-5 text-center">{quantity}</span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="px-2"
                  aria-label={`Add one more ${product.name} to cart`}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
