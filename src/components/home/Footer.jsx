import React from 'react';
import { Logo } from './Logo';
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
    <footer className="bg-[#f7f9fc] pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 mb-20">

          {/* Brand + Social */}
          <div className="space-y-6 lg:col-span-1">
            <Logo />

            <div className="flex items-center gap-4 pt-2">
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* Company Column 1 */}
          <FooterColumn title="Company" />

          {/* Company Column 2 */}
          <FooterColumn title="Company" />

          {/* Company Column 3 */}
          <FooterColumn title="Company" />

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#0f172a] mb-6">Contact</h4>

            <ul className="space-y-5 text-sm text-gray-600">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                <span className="ml-5 leading-relaxed">
                  (+91) 9036122890
                </span>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                <span className="ml-5 leading-relaxed">
                  support@hezee.co.in
                </span>
              </li>

              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                <span className="ml-5 leading-relaxed">
                  Richi Complex, No-131, St. Anthony’s Road, 5th Main, 4th Cross,
                  Chinnappa Layout, Kammanahalli, St. Thomas Town,
                  Bangalore – 560084
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* GRADIENT DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-pink-500 to-purple-600 mb-8" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © 2026 HEZEE ACCESS IT INFRASTRUCTURE PVT LTD. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ================= HELPERS ================= */

const FooterColumn = ({ title }) => (
  <div>
    <h4 className="font-bold text-[#0f172a] mb-6">{title}</h4>
    <ul className="space-y-4 text-sm text-gray-600">
      <li><a href="#" className="hover:text-[#10b946]">About Us</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Careers</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Press</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Blog</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Partners</a></li>
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
