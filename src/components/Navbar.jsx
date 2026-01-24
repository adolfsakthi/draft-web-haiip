import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleProduct = () => setIsProductOpen(!isProductOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
    ];

    const productLinks = [
        { name: 'Property Management', path: '/property-management' },
        { name: 'HR Management', path: '/hr-management' },
        { name: 'Leave Management', path: '/leave-management' },
        { name: 'Visitor Management', path: '/visitor-management' },
        { name: 'Gym Management', path: '/gym-management' },
    ];

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            {/* Placeholder Logo - Replace with actual image later */}
                            <span className="text-2xl font-bold text-gray-900">Hezee<span className="text-primary">.</span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={({ isActive }) => `text-base font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600'}`}>
                            Home
                        </NavLink>

                        {/* Product Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center text-base font-medium text-gray-600 hover:text-primary transition-colors focus:outline-none">
                                Products
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out p-2">
                                {productLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) => `block px-4 py-3 text-sm rounded-md transition-colors hover:bg-purple-50 hover:text-primary ${isActive ? 'text-primary bg-purple-50' : 'text-gray-700'}`}
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <NavLink to="/about" className={({ isActive }) => `text-base font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600'}`}>
                            About
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) => `text-base font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600'}`}>
                            Contact
                        </NavLink>
                    </div>

                    <div className="hidden md:flex items-center">
                        <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg transform active:scale-95">
                            Request Demo
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full pb-4 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                            Home
                        </NavLink>

                        <button onClick={toggleProduct} className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none">
                            Products
                            <ChevronDown className={`h-4 w-4 transform transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isProductOpen && (
                            <div className="pl-6 space-y-1 bg-gray-50/50 rounded-lg mx-2">
                                {productLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={toggleMenu}
                                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary"
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}

                        <NavLink to="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                            About
                        </NavLink>
                        <NavLink to="/contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                            Contact
                        </NavLink>

                        <div className="mt-4 px-3">
                            <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
