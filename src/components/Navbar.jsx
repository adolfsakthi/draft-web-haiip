import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, LayoutGrid, Building2, Monitor, CalendarDays, ScanFace, Dumbbell } from "lucide-react";
import logo from "../assets/images/layout/FinalLogo2.png";

const GRADIENT =
    "linear-gradient(225deg, #F76680 0%, #57007B 100%)";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const location = useLocation();

    const isProductActive = location.pathname.includes("management");

    const baseText =
        "relative text-sm md:text-[16px] font-normal transition-colors";

    const inactiveText = "text-[rgba(43,42,75,1)]";

    return (
        <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-9">
                    <div className="flex items-center justify-between h-14 md:h-[80px]">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Hezee Access" className="h-9 md:h-[45px]" />
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-10">

                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `${baseText} ${isActive ? "nav-link-active" : inactiveText}`
                            }
                        >
                            Home
                        </NavLink>

                        <a
                            href="/#services"
                            className={`${baseText} ${inactiveText} hover:text-black`}
                        >
                            Services
                        </a>

                        <div className="relative group">
                            <button
                                className={`${baseText} flex items-center gap-1 ${isProductActive ? "nav-link-active" : inactiveText
                                    }`}
                            >
                                Products
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {/* DROPDOWN */}
                            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

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
                                        {[
                                            { name: 'Hotel Management', Path: '/hotel-management', Icon: Building2 },
                                            { name: 'HR Management', Path: '/hr-management', Icon: Monitor },
                                            { name: 'Leave Management', Path: '/leave-management', Icon: CalendarDays },
                                            { name: 'Visitor Management', Path: '/visitor-management', Icon: ScanFace },
                                            { name: 'GYM Management', Path: '/gym-management', Icon: Dumbbell },
                                        ].map((product) => (
                                            <NavLink
                                                key={product.Path}
                                                to={product.Path}
                                                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="text-[#b91c7f] group-hover:scale-110 transition-transform">
                                                    <product.Icon size={20} strokeWidth={1.5} />
                                                </div>
                                                <span className="text-[#9d176b] font-medium text-[15px]">
                                                    {product.name}
                                                </span>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `${baseText} ${isActive ? "nav-link-active" : inactiveText}`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `${baseText} ${isActive ? "nav-link-active" : inactiveText}`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <button className="bg-[#2B2A4B] text-white px-6 py-2.5 rounded-lg">
                            Request a demo
                        </button>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
                    {["/", "/about", "/contact"].map((path, i) => (
                        <NavLink
                            key={i}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block py-2 ${isActive
                                    ? "text-transparent bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)]"
                                    : inactiveText
                                }`
                            }
                        >
                            {path === "/" ? "Home" : path.slice(1)}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
