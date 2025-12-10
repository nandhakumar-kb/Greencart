import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const ProductList = () => {
    const { products } = useAppContext();
    const [stockStatus, setStockStatus] = useState(
        products.reduce((acc, product) => {
            acc[product._id] = true; // Default to in stock
            return acc;
        }, {})
    );

    const toggleStockStatus = (productId) => {
        setStockStatus((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }));

        // Optional: Send status update to backend
        // await axios.put(`/api/products/${productId}/stock`, { inStock: !stockStatus[productId] });
    };

    if (!products.length) {
        return (
            <div className="flex-1 py-10 px-4 text-center text-gray-500">
                No products found.
            </div>
        );
    }

    return (
        <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>

                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-300 shadow-sm">
                    <table className="w-full text-sm table-fixed md:table-auto">
                        <thead className="text-gray-900 bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 font-semibold text-left truncate">Product</th>
                                <th className="px-4 py-3 font-semibold text-left truncate">Category</th>
                                <th className="px-4 py-3 font-semibold text-left truncate hidden md:table-cell">Selling Price</th>
                                <th className="px-4 py-3 font-semibold text-left truncate">In Stock</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {products.map((product) => (
                                <tr key={product._id} className="border-t border-gray-200 hover:bg-gray-50">
                                    <td className="px-4 py-3 flex items-center gap-3">
                                        <div className="border border-gray-200 rounded p-1">
                                            <img
                                                src={product.image[0]}
                                                alt={product.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        </div>
                                        <span className="truncate">{product.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3 hidden md:table-cell">₹{product.offerPrice}</td>
                                    <td className="px-4 py-3">
                                        <div className="relative">
                                            <label className="inline-flex items-center cursor-pointer" aria-label="Toggle Stock Status">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={stockStatus[product._id]}
                                                    onChange={() => toggleStockStatus(product._id)}
                                                />
                                                <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-primary transition-colors"></div>
                                                <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-5"></div>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
