import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Building2, Monitor, CalendarDays, ScanFace, Dumbbell } from 'lucide-react';
import { Logo } from './Logo';
import { Link, NavLink, useLocation } from 'react-router-dom';

const products = [
    { name: 'Hotel Management', path: '/hotel-management', icon: Building2 },
    { name: 'HR Management', path: '/hr-management', icon: Monitor },
    { name: 'Leave Management', path: '/leave-management', icon: CalendarDays },
    { name: 'Visitor Management', path: '/visitor-management', icon: ScanFace },
    { name: 'GYM Management', path: '/gym-management', icon: Dumbbell },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

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

    const isProductPath = products.some(p => location.pathname === p.path);

    const navLinkClass = ({ isActive }) =>
        `relative py-0 text-[15px] font-semibold transition-all duration-300 ${isActive ? 'text-[#b91c7f]' : 'text-[#2b2a4b] hover:text-[#b91c7f]'
        }`;

    const activeUnderline = "absolute bottom-0 left-0 w-full h-[3px] bg-[#b91c7f] transition-all duration-300 scale-x-100";
    const inactiveUnderline = "absolute bottom-0 left-0 w-full h-[3px] bg-[#b91c7f] transition-all duration-300 scale-x-0 group-hover:scale-x-100";

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 pt-6 pointer-events-none">
            <div
                className="w-full mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100/80 py-2.5 px-4 md:px-8 flex items-center justify-between pointer-events-auto transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] rounded-[13px]"
            >
                {/* Logo */}
                <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95">
                    <div className="h-10 md:h-12 flex items-center">
                        <Logo className="h-full" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-12">
                    <NavLink to="/" end className={navLinkClass}>
                        {({ isActive }) => (
                            <>
                                Home
                                <span className={isActive ? activeUnderline : inactiveUnderline} />
                            </>
                        )}
                    </NavLink>

                    {/* Products Dropdown */}
                    <div className="relative group" ref={dropdownRef}>
                        <button
                            onClick={() => setIsProductOpen(!isProductOpen)}
                            className={`relative flex items-center py-0 text-[15px] font-semibold transition-all duration-300 ${isProductPath || isProductOpen ? 'text-[#b91c7f]' : 'text-[#2b2a4b] hover:text-[#b91c7f]'
                                }`}
                        >
                            Products
                            <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${isProductOpen ? 'rotate-180' : ''}`} />
                            <span className={isProductPath || isProductOpen ? activeUnderline : inactiveUnderline} />
                        </button>

                        {/* Dropdown Menu */}
                        {isProductOpen && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-[280px] bg-white rounded-[28px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] border border-gray-100 p-2 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="space-y-1">
                                    {products.map((product) => (
                                        <NavLink
                                            key={product.path}
                                            to={product.path}
                                            onClick={() => setIsProductOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3.5 p-3.5 rounded-2xl transition-all ${isActive ? 'bg-pink-50 text-[#b91c7f]' : 'hover:bg-gray-50 text-gray-700 hover:text-[#b91c7f]'
                                                }`
                                            }
                                        >
                                            <product.icon size={20} className="text-gray-400 group-hover:text-[#b91c7f]" />
                                            <span className="font-semibold text-[14px]">{product.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to="/about" className={navLinkClass}>
                        {({ isActive }) => (
                            <>
                                About
                                <span className={isActive ? activeUnderline : inactiveUnderline} />
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/contact" className={navLinkClass}>
                        {({ isActive }) => (
                            <>
                                Contact
                                <span className={isActive ? activeUnderline : inactiveUnderline} />
                            </>
                        )}
                    </NavLink>

                    {/* Vertical Divider Line */}
                    <div className="h-7 w-[1.5px] bg-gray-200/80 mx-1" />

                    {/* CTA Button */}
                    <button className="bg-[#1a2b88] text-white px-[16px] py-[18px] rounded-[16px] text-[15px] font-bold hover:bg-[#15226e] transition-all active:scale-95 leading-none">
                        Request a demo
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-[#0f172a] hover:bg-gray-100 rounded-lg transition-colors pointer-events-auto"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden pointer-events-auto"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-md rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.25)] border border-white/50 md:hidden flex flex-col p-8 animate-in slide-in-from-top-5 duration-300 pointer-events-auto max-h-[calc(100vh-120px)] overflow-y-auto">
                    <nav className="flex flex-col space-y-2">
                        <NavLink
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-6 py-4 rounded-2xl text-xl font-semibold transition-all ${isActive ? 'bg-pink-50 text-[#b91c7f]' : 'text-[#2b2a4b] hover:bg-gray-50'}`}
                        >
                            Home
                        </NavLink>

                        <div className="py-2">
                            <div className="px-6 py-2 text-[13px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Our Products</div>
                            <div className="space-y-1">
                                {products.map((product) => (
                                    <NavLink
                                        key={product.path}
                                        to={product.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) => `flex items-center gap-4 py-4 px-6 rounded-2xl transition-all ${isActive ? 'bg-pink-50 text-[#b91c7f]' : 'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        <div className={`p-2 rounded-xl ${location.pathname === product.path ? 'bg-white shadow-sm' : 'bg-gray-50'}`}>
                                            <product.icon size={20} className={location.pathname === product.path ? 'text-[#b91c7f]' : 'text-gray-400'} />
                                        </div>
                                        <span className="font-semibold text-[16px]">{product.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <NavLink
                            to="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-6 py-4 rounded-2xl text-xl font-semibold transition-all ${isActive ? 'bg-pink-50 text-[#b91c7f]' : 'text-[#2b2a4b] hover:bg-gray-50'}`}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-6 py-4 rounded-2xl text-xl font-semibold transition-all ${isActive ? 'bg-pink-50 text-[#b91c7f]' : 'text-[#2b2a4b] hover:bg-gray-50'}`}
                        >
                            Contact
                        </NavLink>

                        <div className="pt-8 mt-4 border-t border-gray-100">
                            <button className="w-full bg-[#1a2b88] text-white py-5 rounded-2xl font-bold shadow-xl shadow-blue-900/20 active:scale-[0.98] transition-all text-lg hover:bg-[#15226e]">
                                Request a demo
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
