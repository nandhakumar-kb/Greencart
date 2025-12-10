import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { assets, dummyOrders } from '../../assets/assets';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      // Simulate an API call (replace with real API in production)
      setIsLoading(true);
      setTimeout(() => {
        setOrders(dummyOrders);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      setError('Failed to load orders. Please try again later.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <section className="py-10 px-4 md:px-10 bg-white">
        <h2 className="pb-4 text-lg font-medium">Loading Orders...</h2>
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin border-t-2 border-blue-500 border-solid rounded-full w-10 h-10"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 px-4 md:px-10 bg-white">
        <h2 className="pb-4 text-lg font-medium text-red-600">{error}</h2>
      </section>
    );
  }

  return (
    <section className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No orders found.
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order._id || Math.random()}
            className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800 bg-white"
          >
            {/* Order Items */}
            <div className="flex gap-4">
              <img
                className="w-12 h-12 object-cover opacity-60"
                src={assets.box_icon}
                alt="Order"
              />
              <div className="flex flex-col gap-1">
                {order.items?.map((item, i) => (
                  <p key={i} className="text-sm font-medium">
                    {item.product?.name || "Unknown Product"}{' '}
                    <span className="text-primary">x {item.quantity || 0}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="text-sm leading-5">
              <p className="font-medium mb-1">
                {(order.address?.firstName || '') + ' ' + (order.address?.lastName || '')}
              </p>
              <p>
                {[order.address?.street, order.address?.city, order.address?.state, order.address?.zipcode, order.address?.country]
                  .filter(Boolean)
                  .join(', ')}
              </p>
            </div>

            {/* Amount */}
            <p className="font-semibold text-base text-black/70">₹{order.amount || 0}</p>

            {/* Payment Info */}
            <div className="flex flex-col text-sm gap-1">
              <p>Method: {order.paymentType || "N/A"}</p>
              <p>Date: {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}</p>
              <p className={order.isPaid ? 'text-green-600' : 'text-red-600'}>
                Payment: {order.isPaid ? "Paid" : "Pending"}
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Orders;
