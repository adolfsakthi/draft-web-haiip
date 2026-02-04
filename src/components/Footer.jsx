import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import {
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    Phone,
    Mail,
    MapPin,
} from 'lucide-react';

export const Footer = () => {
    return (
        <footer>

            {/* CTA SECTION */}
            <div
                className="flex justify-center items-center"
                style={{
                    background: 'linear-gradient(92.71deg, #0EA5E9 2.27%, #22D3EE 97.73%)'
                }}
            >
                <div
                    className="text-center w-full max-w-[1440px] px-6 md:px-20 py-12 md:py-12 flex flex-col justify-center items-center opacity-1"
                >

                    <h2
                        className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
                        style={{
                            fontFamily: 'Poppins',
                            lineHeight: '1.2',
                        }}
                    >
                        Transform Your Business with <br className="hidden lg:block" /> Hezee Smart Solutions
                    </h2>

                    <p
                        className="text-white text-lg md:text-xl font-normal text-center mb-10 max-w-[850px] opacity-90"
                        style={{
                            fontFamily: 'Poppins',
                            lineHeight: '1.6',
                        }}
                    >
                        Powerful software and reliable hardware to automate operations, improve
                        productivity, and scale faster—without complexity.
                    </p>

                    <button
                        className="bg-white text-black hover:bg-gray-100 transition-all w-full md:max-w-[281px] h-16 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-900/20 active:scale-95 mb-8"
                        style={{
                            fontFamily: 'Poppins',
                        }}
                    >
                        Get a Free Demo
                    </button>

                    <p
                        className="text-white font-medium opacity-80"
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                        }}
                    >
                        Talk to our team today
                    </p>

                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="bg-[#f7f9fc] pt-20 pb-12">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

                    {/* TOP GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                        {/* Brand + Social */}
                        <div className="flex flex-col gap-8 lg:col-span-3 items-center md:items-start">
                            {/* Logo Wrapper */}
                            <div className="w-[200px]">
                                <img
                                    src="/footer/Frame 1261155073.png"
                                    alt="Hezee Access"
                                    className="w-full h-auto block"
                                />
                            </div>

                            <p className="text-gray-500 text-sm md:text-base leading-relaxed text-center md:text-left max-w-xs" style={{ fontFamily: 'Poppins' }}>
                                Delivering next-gen IT infrastructure and smart security solutions for modern businesses.
                            </p>

                            {/* Social Icons Container */}
                            <div className="flex items-center gap-4">
                                <SocialIcon icon={Linkedin} />
                                <SocialIcon icon={Twitter} />
                                <SocialIcon icon={Facebook} />
                                <SocialIcon icon={Instagram} />
                            </div>
                        </div>

                        {/* Company Column 1 */}
                        <div className="lg:col-span-2 flex justify-center md:justify-start">
                            <FooterColumn title="Company" />
                        </div>

                        {/* Company Column 2 */}
                        <div className="lg:col-span-2 flex justify-center md:justify-start">
                            <FooterColumn title="Solutions" />
                        </div>

                        {/* Company Column 3 */}
                        <div className="lg:col-span-2 flex justify-center md:justify-start">
                            <FooterColumn title="Resources" />
                        </div>

                        {/* Contact Column */}
                        <div className="lg:col-span-3 flex flex-col gap-6 items-center md:items-start">
                            <h4
                                className="text-slate-900 font-bold"
                                style={{
                                    fontFamily: 'Nunito',
                                    fontSize: '18px',
                                }}
                            >
                                Contact Us
                            </h4>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Phone
                                        size={20}
                                        strokeWidth={1.5}
                                        style={{ color: '#7C7FFE' }}
                                        className="shrink-0"
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '100%',
                                            letterSpacing: '0%',
                                            color: '#64748b'
                                        }}
                                    >
                                        (+91) 9036122890
                                    </span>
                                </li>

                                <li className="flex items-center gap-3">
                                    <Mail
                                        size={20}
                                        strokeWidth={1.5}
                                        style={{ color: '#7C7FFE' }}
                                        className="shrink-0"
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '100%',
                                            letterSpacing: '0%',
                                            color: '#64748b'
                                        }}
                                    >
                                        support@hezee.co.in
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <MapPin
                                        size={20}
                                        strokeWidth={1.5}
                                        style={{ color: '#7C7FFE' }}
                                        className="mt-0.5 shrink-0"
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: '100%',
                                            letterSpacing: '0%',
                                            color: '#64748b'
                                        }}
                                    >
                                        Richi Complex, No-131, St.Anthony's Road,<br />
                                        5th Main, 4th cross Chinnappa Layout,<br />
                                        Kammanahalli, St.Thomas Town,<br />
                                        Bangalore-560084
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* GRADIENT DIVIDER */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 mb-6" />

                    {/* BOTTOM BAR */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '20px',
                                letterSpacing: '0%',
                                color: '#94a3b8'
                            }}
                        >
                            © 2026 HEZEE ACCESS IT INFRASTRUCTURE PVT LTD. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link
                                to="/"
                                className="hover:text-gray-900"
                                style={{
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    letterSpacing: '0%',
                                    color: '#94a3b8'
                                }}
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/privacy-policy"
                                className="hover:text-gray-900"
                                style={{
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    letterSpacing: '0%',
                                    color: '#94a3b8'
                                }}
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-gray-900"
                                style={{
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    letterSpacing: '0%',
                                    color: '#94a3b8'
                                }}
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

/* ================= HELPERS ================= */

const FooterColumn = ({ title }) => (
    <div className="flex flex-col gap-3 opacity-1">
        <h4
            style={{
                fontFamily: 'Nunito',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '0%',
                color: '#0f172a',
                margin: 0
            }}
        >
            {title}
        </h4>
        <ul className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
                <a
                    href="#"
                    className="hover:text-[#10b946]"
                    style={{
                        fontFamily: 'Nunito',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#64748b',
                        textDecoration: 'none'
                    }}
                >
                    About Us
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="hover:text-[#10b946]"
                    style={{
                        fontFamily: 'Nunito',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#64748b',
                        textDecoration: 'none'
                    }}
                >
                    Careers
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="hover:text-[#10b946]"
                    style={{
                        fontFamily: 'Nunito',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#64748b',
                        textDecoration: 'none'
                    }}
                >
                    Press
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="hover:text-[#10b946]"
                    style={{
                        fontFamily: 'Nunito',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#64748b',
                        textDecoration: 'none'
                    }}
                >
                    Blog
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="hover:text-[#10b946]"
                    style={{
                        fontFamily: 'Nunito',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#64748b',
                        textDecoration: 'none'
                    }}
                >
                    Partners
                </a>
            </li>
        </ul>
    </div>
);

const SocialIcon = ({ icon: Icon }) => (
    <a
        href="#"
        style={{
            width: '32px',
            height: '32px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E9EEF2', // Matches closer to the reference light gray
            transition: 'all 0.2s ease',
            opacity: 1
        }}
        className="hover:bg-gray-300"
    >
        <Icon className="w-4 h-4 text-black" />
    </a>
);
