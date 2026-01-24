import React, { useState, useRef, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, Building2, Monitor, CalendarDays, ScanFace, Dumbbell, LayoutGrid } from 'lucide-react';
import { Logo } from './Logo';
import { Link, NavLink } from 'react-router-dom';

const products = [
    {
        name: 'Hotel Management',
        path: '/hotel-management',
        icon: Building2,
    },
    {
        name: 'HR Management',
        path: '/hr-management',
        icon: Monitor,
    },
    {
        name: 'Leave Management',
        path: '/leave-management',
        icon: CalendarDays,
    },
    {
        name: 'Visitor Management',
        path: '/visitor-management',
        icon: ScanFace,
    },
    {
        name: 'GYM Management',
        path: '/gym-management',
        icon: Dumbbell,
    },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProductOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 py-4 px-4 md:px-8 border-b border-gray-100 font-sans">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-10">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `text-[15px] font-semibold transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                    >
                        Home
                    </NavLink>

                    <a href="/#services" className="text-[15px] font-medium text-gray-500 hover:text-black transition-colors">
                        Services
                    </a>

                    {/* Products Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsProductOpen(!isProductOpen)}
                            className={`flex items-center text-[15px] font-medium transition-colors focus:outline-none ${isProductOpen ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                        >
                            Products
                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isProductOpen && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-[320px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] overflow-visible animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100">

                                {/* Top Arrow/Triangle */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>

                                <div className="p-2">
                                    {/* Header Section */}
                                    <div className="bg-[#fcf5fd] rounded-lg p-3 mb-2 flex items-center gap-3">
                                        <div className="text-[#b91c7f]">
                                            <LayoutGrid size={20} />
                                        </div>
                                        <span className="font-bold text-[#b91c7f] text-[15px]">Product category</span>
                                    </div>

                                    {/* Product List */}
                                    <div className="flex flex-col space-y-1">
                                        {products.map((product) => (
                                            <NavLink
                                                key={product.path}
                                                to={product.path}
                                                onClick={() => setIsProductOpen(false)}
                                                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="text-[#b91c7f] group-hover:scale-110 transition-transform">
                                                    <product.icon size={20} strokeWidth={1.5} />
                                                </div>
                                                <span className="text-[#9d176b] font-medium text-[15px]">
                                                    {product.name}
                                                </span>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="text-[15px] font-medium text-gray-500 hover:text-black transition-colors">
                        About
                    </Link>

                    <Link to="/privacy-policy" className="text-[15px] font-medium text-gray-500 hover:text-black transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Right Side: Phone & CTA */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="tel:+919036122890" className="flex items-center text-gray-700 font-semibold text-[15px] hover:text-blue-700 transition-colors">
                        <Phone className="w-4 h-4 mr-2" />
                        +91 9036122890
                    </a>
                    <button className="bg-[#0f172a] text-white px-6 py-2.5 rounded-lg text-[15px] font-medium hover:bg-gray-800 transition-all shadow-md active:scale-95">
                        Request a demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col p-4 max-h-[85vh] overflow-y-auto">
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Home</NavLink>

                    {/* Mobile Products */}
                    <div className="px-4 py-2">
                        <div className="font-medium text-gray-900 mb-2">Products</div>
                        <div className="space-y-1 pl-2 border-l-2 border-gray-100">
                            {products.map((product) => (
                                <NavLink
                                    key={product.path}
                                    to={product.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 py-2 px-2 text-sm text-gray-600 hover:text-[#b91c7f] hover:bg-pink-50 rounded-md transition-colors"
                                >
                                    <product.icon size={16} />
                                    {product.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <a href="/#services" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Services</a>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">About</Link>
                    <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Contact</Link>

                    <div className="border-t border-gray-100 my-2 pt-2">
                        <a href="tel:+919036122890" className="flex items-center px-4 py-3 text-gray-700 font-semibold">
                            <Phone className="w-4 h-4 mr-2" />
                            +91 9036122890
                        </a>
                        <button className="w-full bg-[#0f172a] text-white py-3.5 rounded-lg font-medium mt-2 shadow-sm">
                            Request a demo
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
