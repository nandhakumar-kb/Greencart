import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import AddAddress from './pages/AddAddress';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './components/seller/SellerLayout';
import ProductList from './components/seller/ProductList';
import Orders from './components/seller/Orders';
import AddProduct from './components/seller/AddProduct';
import { useAppContext } from './context/AppContext';

const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.startsWith('/seller');
  const { showUserLogin, isSeller } = useAppContext();

  const layoutClass = isSellerPath
    ? 'seller-layout-class'
    : 'px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white';

  return (
    <div className="text-default min-h-screen bg-white text-gray-700">
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />

      <div className={`${layoutClass} relative transition-all`}>
        <Routes>
          {/* Public / User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/add-address" element={<AddAddress />} />

          {/* Seller Authentication Entry Point */}
          <Route path="/seller" element={isSeller ? <SellerLayout /> : <SellerLogin />}>
            <Route path="add-products" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-red-600 text-xl font-semibold">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
