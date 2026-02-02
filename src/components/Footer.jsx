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
                    className="text-center"
                    style={{
                        width: '1440px',
                        height: '340px',
                        paddingTop: '32px',
                        paddingRight: '185px',
                        paddingBottom: '32px',
                        paddingLeft: '185px',
                        opacity: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                    <h2
                        className="text-white"
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '36px',
                            fontWeight: 700,
                            lineHeight: '40px',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            marginBottom: '32px'
                        }}
                    >
                        Transform Your Business with Hezee Smart Solutions
                    </h2>

                    <p
                        className="text-white"
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: '30px',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            marginBottom: '40px',
                            maxWidth: '850px'
                        }}
                    >
                        Powerful software and reliable hardware to automate operations, improve<br />
                        productivity, and scale faster—without complexity.
                    </p>

                    <button
                        className="bg-white text-black hover:bg-gray-100 transition-colors"
                        style={{
                            width: '281px',
                            height: '56px',
                            paddingTop: '14px',
                            paddingRight: '65px',
                            paddingBottom: '14px',
                            paddingLeft: '65px',
                            borderRadius: '8px',
                            opacity: 1,
                            fontFamily: 'Poppins',
                            fontSize: '18px',
                            fontWeight: 600,
                            lineHeight: '28px',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            marginBottom: '24px'
                        }}
                    >
                        Get a Free Demo
                    </button>

                    <p
                        className="text-white"
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontWeight: 400
                        }}
                    >
                        Talk to our team today
                    </p>

                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="bg-[#f7f9fc] pt-16 pb-8">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

                    {/* TOP GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

                        {/* Brand + Social */}
                        <div
                            style={{
                                width: '214px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px', // Reduced gap significantly
                                opacity: 1
                            }}
                            className="lg:col-span-1"
                        >
                            {/* Logo Wrapper */}
                            <div style={{ width: '214px' }}>
                                <img
                                    src="/footer/Frame 1261155073.png"
                                    alt="Hezee Access"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>

                            {/* Social Icons Container */}
                            <div
                                style={{
                                    width: '214px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    opacity: 1
                                }}
                            >
                                <SocialIcon icon={Linkedin} />
                                <SocialIcon icon={Twitter} />
                                <SocialIcon icon={Facebook} />
                                <SocialIcon icon={Instagram} />
                            </div>
                        </div>

                        {/* Company Column 1 */}
                        <div className="ml-28">
                            <FooterColumn title="Company" />
                        </div>

                        {/* Company Column 2 */}
                        <div className="ml-10">
                            <FooterColumn title="Company" />
                        </div>

                        {/* Company Column 3 */}
                        <div className="-ml-8">
                            <FooterColumn title="Company" />
                        </div>

                        <div className="lg:col-span-1 -ml-20" style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 1 }}>
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
                                Contact
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
    <div style={{ width: '70px', height: '184px', opacity: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
