import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

const SellerLayout = () => {
  const { setIsSeller } = useAppContext();
  const navigate = useNavigate();  // Hook to navigate programmatically

  const sidebarLinks = [
    { name: "Add Product", path: "/seller/add-products", icon: assets.add_icon },
    { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  const handleLogout = () => {
    setIsSeller(false);
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-3 bg-white border-b border-gray-300">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-28 md:w-36 cursor-pointer" />
        </Link>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <span>Hi! Admin</span>
          <button
            onClick={handleLogout}
            className="px-4 py-1 border rounded-full hover:bg-gray-100 transition"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-16 md:w-64 border-r border-gray-300 bg-white pt-4">
          <nav className="flex flex-col">
            {sidebarLinks.map(({ name, path, icon }) => (
              <NavLink
                to={path}
                key={name}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 transition-colors
                  ${isActive
                    ? "bg-primary/10 text-primary border-r-4 md:border-r-[6px] border-primary"
                    : "text-gray-700 hover:bg-gray-100/90 border-white"
                  }`
                }
                aria-label={name}
              >
                <img src={icon} alt={`${name} icon`} className="w-6 h-6" />
                <span className="hidden md:inline">{name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
