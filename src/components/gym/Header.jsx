import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 py-4 px-4 md:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-[15px] font-medium transition-colors ${link.name === 'Home'
                                    ? 'text-black border-b-2 border-black pb-0.5'
                                    : 'text-gray-500 hover:text-black'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Side: Phone & CTA */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="tel:+919036122890" className="flex items-center text-gray-700 font-semibold text-[15px] hover:text-blue-700">
                        <Phone className="w-4 h-4 mr-2" />
                        +91 9036122890
                    </a>
                    <button className="bg-[#0f172a] text-white px-6 py-2.5 rounded text-[15px] font-medium hover:bg-opacity-90 transition-all">
                        Request a demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="tel:+919036122890" className="flex items-center text-gray-700 font-semibold py-2">
                        <Phone className="w-4 h-4 mr-2" />
                        +91 9036122890
                    </a>
                    <button className="bg-[#0f172a] text-white w-full py-3 rounded font-medium">
                        Request a demo
                    </button>
                </div>
            )}
        </header>
    );
};
