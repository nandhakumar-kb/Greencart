import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery } = useAppContext();

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate('/products');
        }
    }, [searchQuery, navigate]);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            {/* Logo */}
            <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <img className="h-9" src={assets.logo} alt="GreenCart logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/seller" className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80" aria-label="Seller Dashboard">Seller Dashboard</NavLink>
                <NavLink to="/" className="text-gray-700 hover:text-primary transition" aria-label="Home">Home</NavLink>
                <NavLink to="/products" className="text-gray-700 hover:text-primary transition" aria-label="All Products">All Products</NavLink>

                {/* Search */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        value={searchQuery}
                        placeholder="Search products"
                        aria-label="Search products"
                    />
                    <img className="w-4 h-4" src={assets.search_icon} alt="search icon" />
                </div>

                {/* Cart Icon */}
                <div onClick={() => navigate('/cart')} className="relative cursor-pointer" aria-label="Go to Cart">
                    <img className="w-6 h-6" src={assets.nav_cart_icon} alt="cart" />
                </div>

                {/* Login / User Dropdown */}
                {!user ? (
                    <button onClick={() => setShowUserLogin(true)} className="px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full" aria-label="Login">
                        Login
                    </button>
                ) : (
                    <div className="relative group">
                        <img className="w-10 cursor-pointer" src={assets.profile_icon} alt="user profile" />
                        <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                            <li onClick={() => navigate('/my-orders')} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer" aria-label="My Orders">My Orders</li>
                            <li onClick={handleLogout} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer" aria-label="Logout">Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="sm:hidden">
                <img className="w-6 h-6" src={assets.menu_icon} alt="menu icon" />
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50">
                    <NavLink to="/" onClick={() => setOpen(false)} className="block" aria-label="Home">Home</NavLink>
                    <NavLink to="/" onClick={() => setOpen(false)} className="block" aria-label="Contact">Contact</NavLink>
                    <NavLink to="/products" onClick={() => setOpen(false)} className="block" aria-label="Products">Products</NavLink>
                    {user && <NavLink to="/my-orders" onClick={() => setOpen(false)} className="block" aria-label="My Orders">My Orders</NavLink>}

                    {/* Mobile Search */}
                    <div className="flex items-center border border-gray-300 px-3 py-1 rounded-full w-full mt-3">
                        <input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent outline-none text-sm"
                            type="text"
                            value={searchQuery}
                            placeholder="Search products"
                            aria-label="Search products"
                        />
                        <img className="w-4 h-4" src={assets.search_icon} alt="search icon" />
                    </div>

                    {!user ? (
                        <button
                            onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true);
                            }}
                            className="px-6 py-2 mt-4 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                            aria-label="Login"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setOpen(false);
                                handleLogout();
                            }}
                            className="px-6 py-2 mt-4 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                            aria-label="Logout"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
