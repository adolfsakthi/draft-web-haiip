import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, LayoutGrid, Building2, Monitor, CalendarDays, ScanFace, Dumbbell } from "lucide-react";
import logo from "../assets/images/layout/FinalLogo2.png";

const GRADIENT =
    "linear-gradient(225deg, #F76680 0%, #57007B 100%)";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const location = useLocation();

    const isProductActive = location.pathname.includes("management");

    // Scroll spy to detect active section
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const handleScroll = () => {
            const sections = ['home', 'services', 'security-products', 'contact'];
            // Account for navbar height (80px) plus some offset
            const navbarHeight = 80;
            const offset = 200;
            const scrollPosition = window.scrollY + navbarHeight + offset;

            // Check if we're at the very top
            if (window.scrollY < 100) {
                setActiveSection('home');
                return;
            }

            // Check if we're near the bottom of the page
            const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

            if (isNearBottom) {
                setActiveSection('contact');
                return;
            }

            // Check sections in reverse order (bottom to top) for better detection
            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i];
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;

                    if (scrollPosition >= elementTop) {
                        setActiveSection(sectionId);
                        return;
                    }
                }
            }

            // Fallback to home if no section matched
            setActiveSection('home');
        };

        handleScroll(); // Check on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

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
                            onClick={(e) => {
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    document.getElementById('home')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            }}
                            className={({ isActive }) => {
                                // On home page, use scroll-based active state
                                if (location.pathname === '/') {
                                    return `${baseText} ${activeSection === 'home' ? 'nav-link-active' : inactiveText}`;
                                }
                                // On other pages, use route-based active state
                                return `${baseText} ${isActive ? 'nav-link-active' : inactiveText}`;
                            }}
                        >
                            Home
                        </NavLink>


                        <button
                            onClick={() => {
                                document.getElementById('services')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                            className={`${baseText} ${activeSection === 'services' ? 'nav-link-active' : inactiveText} hover:text-black cursor-pointer`}
                        >
                            Services
                        </button>


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
                                    {/* <div className="bg-[#fcf5fd] rounded-lg p-3 mb-2 flex items-center gap-3">
                                        <div className="text-[#b91c7f]">
                                            <LayoutGrid size={20} />
                                        </div>
                                        <span className="font-bold text-[#b91c7f] text-[15px]">Product category</span>
                                    </div> */}

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
                            onClick={(e) => {
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            }}
                            className={({ isActive }) => {
                                // On home page, use scroll-based active state
                                if (location.pathname === '/') {
                                    return `${baseText} ${activeSection === 'contact' ? 'nav-link-active' : inactiveText}`;
                                }
                                // On other pages, use route-based active state
                                return `${baseText} ${isActive ? 'nav-link-active' : inactiveText}`;
                            }}
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Right Side: Phone + CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Phone Number */}
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38A12.035 12.035 0 016.68 8.963a1.125 1.125 0 00.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L7.664 1.187A1.125 1.125 0 006.573.335H5.25A2.25 2.25 0 003 2.585V6.75z"
                                />
                            </svg>
                            <span>+91 9036122890</span>
                        </div>

                        {/* CTA */}
                        <button className="bg-[#0F161E] text-white px-[16px] py-[12px] rounded-[6px] border-[2px] border-[#0F161E] font-medium transition hover:bg-gray-800">
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
