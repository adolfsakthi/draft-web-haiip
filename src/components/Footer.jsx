import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import {
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#f7f9fc] font-poppins w-full">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col gap-12">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

                    {/* BRAND */}
                    <div className="space-y-6">
                        <Logo />

                        <div className="flex gap-4">
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Twitter} />
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Instagram} />
                        </div>
                    </div>

                    {/* COMPANY */}
                    <FooterColumn
                        title="Company"
                        items={["About Us", "Careers", "Press", "Blog", "Partners"]}
                    />

                    {/* PRODUCTS */}
                    <FooterColumn
                        title="Products"
                        items={["Hotel PMS", "Gym Management", "POS", "Inventory"]}
                    />

                    {/* SOLUTIONS */}
                    <FooterColumn
                        title="Solutions"
                        items={["Hotels", "Gyms", "Retail", "Enterprises"]}
                    />

                    {/* CONTACT */}
                    <div>
                        <FooterTitle>Contact</FooterTitle>

                        <ul className="space-y-5 text-sm text-gray-600">
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>(+91) 9036122890</span>
                            </li>

                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>support@hezee.co.in</span>
                            </li>

                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>
                                    Richi Complex, No-131, St. Anthony’s Road, 5th Main, 4th Cross,
                                    Chinnappa Layout, Kammanahalli, St. Thomas Town, Bangalore – 560084
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

                {/* BOTTOM BAR */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2026 HEZEE ACCESS IT INFRASTRUCTURE PVT LTD. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link to="/" className="hover:text-gray-900">Terms of Service</Link>
                        <Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                        <Link to="/" className="hover:text-gray-900">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

/* ===================== HELPERS ===================== */

const FooterTitle = ({ children }) => (
    <h4 className="mb-6 font-bold text-gray-900">{children}</h4>
);

const FooterColumn = ({ title, items }) => (
    <div>
        <FooterTitle>{title}</FooterTitle>
        <ul className="space-y-4 text-sm text-gray-600">
            {items.map((item) => (
                <li key={item}>
                    <a href="#" className="hover:text-indigo-600 transition">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const SocialIcon = ({ icon: Icon }) => (
    <a
        href="#"
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
    >
        <Icon className="w-4 h-4 text-black" />
    </a>
);
