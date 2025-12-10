import React, { useState } from 'react';
import { assets, categories } from '../../assets/assets';

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const [formError, setFormError] = useState('');

  const handleImageChange = (e, index) => {
    const updatedFiles = [...files];
    updatedFiles[index] = e.target.files[0];
    setFiles(updatedFiles);
  };

  const validateForm = () => {
    if (!name || !description || !category || !price || !offerPrice) {
      setFormError('All fields are required');
      return false;
    }
    if (Number(offerPrice) > Number(price)) {
      setFormError('Offer price cannot be greater than product price');
      return false;
    }
    return true;
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setFormError(''); // Reset form error
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted', { name, description, category, price, offerPrice, files });
      // Reset form after successful submission
      setName('');
      setDescription('');
      setCategory('');
      setPrice('');
      setOfferPrice('');
      setFiles([]);
    }
  };

  return (
    <div className="py-10 px-4 md:px-10 bg-white">
      <form
        onSubmit={onSubmitHandler}
        className="max-w-2xl mx-auto space-y-6"
      >
        {/* Image Upload */}
        <div>
          <label className="block text-base font-medium mb-2">Product Images</label>
          <div className="flex flex-wrap gap-4">
            {Array(4).fill('').map((_, index) => (
              <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                <input
                  id={`image${index}`}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleImageChange(e, index)}
                />
                <img
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : assets.upload_area
                  }
                  alt="Upload preview"
                  className="w-24 h-24 object-cover border rounded"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div>
          <label htmlFor="product-name" className="block font-medium mb-1">Product Name</label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 outline-primary"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="product-description" className="block font-medium mb-1">Product Description</label>
          <textarea
            id="product-description"
            rows={4}
            placeholder="Type here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 outline-primary resize-none"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block font-medium mb-1">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 outline-primary"
          >
            <option value="">Select Category</option>
            {categories.map((item, idx) => (
              <option key={idx} value={item.path}>
                {item.path}
              </option>
            ))}
          </select>
        </div>

        {/* Pricing */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[120px]">
            <label htmlFor="product-price" className="block font-medium mb-1">Product Price</label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 outline-primary"
              required
            />
          </div>

          <div className="flex-1 min-w-[120px]">
            <label htmlFor="offer-price" className="block font-medium mb-1">Offer Price</label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 outline-primary"
              required
            />
          </div>
        </div>

        {/* Form Error */}
        {formError && <div className="text-red-500 text-sm">{formError}</div>}

        {/* Submit */}
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2.5 rounded font-medium hover:bg-primary/90 transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
