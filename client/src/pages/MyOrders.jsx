import React, { useEffect, useState } from 'react';
import { dummyOrders } from '../assets/assets';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        setLoading(true);
        setError(null);

        setTimeout(() => {
          setMyOrders(dummyOrders);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch orders. Please try again later.');
        setLoading(false);
        console.error('Error fetching orders:', err);
      }
    };

    fetchMyOrders();
  }, []);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);

  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString('en-IN') : 'N/A';

  return (
    <div className="mt-16 pb-16 px-4">
      <div className="flex flex-col w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-2xl font-semibold uppercase">My Orders</h1>
        <div className="w-32 h-1 bg-primary rounded-full mt-1" />
      </div>

      {loading && (
        <div className="text-center text-gray-500">Loading orders...</div>
      )}

      {error && (
        <div className="text-center text-red-500">{error}</div>
      )}

      {!loading && !myOrders.length && !error && (
        <div className="text-center text-gray-500">You have no orders yet.</div>
      )}

      {myOrders.map((order) => (
        <div
          key={order._id}
          className="border border-gray-300 rounded-xl mb-10 p-6 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-500 text-sm mb-4 space-y-2 md:space-y-0">
            <span>Order ID: <strong>{order._id}</strong></span>
            <span>Payment: <strong>{order.paymentType}</strong></span>
            <span>Total: <strong>{formatCurrency(order.amount)}</strong></span>
          </div>

          <div className="divide-y divide-gray-200">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between py-4"
              >
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="bg-primary/10 p-3 rounded-lg w-20 h-20 flex items-center justify-center">
                    <img
                      src={item.product.image?.[0] || '/placeholder.png'}
                      alt={item.product.name || 'Product Image'}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium">{item.product.name}</h2>
                    <p className="text-sm text-gray-400">Category: {item.product.category}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-700">
                  <p>Quantity: <strong>{item.quantity}</strong></p>
                  <p>Status: <strong>{order.status}</strong></p>
                  <p>Date: <strong>{formatDate(order.createdAt)}</strong></p>
                  <p className="text-primary font-semibold">
                    Amount: {formatCurrency(item.product.offerPrice * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
