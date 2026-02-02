import React from "react";
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

export const Footer = () => {
  return (
    <footer>
      {/* CTA SECTION */}
      <div className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE]">
        <div className="max-w-[1440px] mx-auto px-6 py-20 text-center flex flex-col items-center">
          <h2 className="text-white font-[700] text-[34px] leading-[42px] mb-6">
            Transform Your Business with Hezee Smart Solutions
          </h2>

          <p className="text-white text-[18px] leading-[30px] max-w-[820px] mb-10">
            Powerful software and reliable hardware to automate operations,
            improve productivity, and scale faster—without complexity.
          </p>

          <button className="bg-white text-black font-semibold text-[18px] px-16 py-4 rounded-lg hover:bg-gray-100 transition mb-4">
            Get a Free Demo
          </button>

          <p className="text-white text-[15px]">Talk to our team today</p>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#f8fafc] pt-16 pb-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* LOGO + SOCIAL */}
            <div>
              <Logo />
              <div className="flex gap-3 mt-6">
                <SocialIcon icon={Linkedin} />
                <SocialIcon icon={Twitter} />
                <SocialIcon icon={Facebook} />
                <SocialIcon icon={Instagram} />
              </div>
            </div>

            <FooterColumn title="Company" />
            <FooterColumn title="Company" />
            <FooterColumn title="Company" />

            {/* CONTACT */}
            <div>
              <h4 className="text-[18px] font-semibold text-[#0f172a] mb-6">
                Contact
              </h4>
              <ul className="space-y-4 text-[14px] text-[#64748b]">
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-[#6366f1]" />
                  (+91) 9036122890
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-[#6366f1]" />
                  support@hezee.co.in
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#6366f1] mt-1" />
                  <span className="leading-6">
                    Richi Complex, No-131, St.Anthony's Road, 5th Main, 4th Cross,
                    Chinnappa Layout, Kammanahalli, St.Thomas Town,
                    Bangalore-560084
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-px w-full bg-gradient-to-r from-pink-400 to-purple-500 mb-6" />

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#94a3b8]">
            <p>
              © 2026 HEZEE ACCESS IT INFRASTRUCTURE PVT LTD. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ===== COMPONENTS ===== */

const FooterColumn = ({ title }) => (
  <div>
    <h4 className="text-[18px] font-semibold text-[#0f172a] mb-6">
      {title}
    </h4>
    <ul className="space-y-3 text-[14px] text-[#64748b]">
      <li><a href="#" className="hover:text-[#10b946]">About Us</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Careers</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Press</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Blog</a></li>
      <li><a href="#" className="hover:text-[#10b946]">Partners</a></li>
    </ul>
  </div>
);

const SocialIcon = ({ icon: Icon }) => (
  <a className="w-9 h-9 rounded-full bg-[#e5e7eb] flex items-center justify-center hover:bg-[#d1d5db] transition">
    <Icon className="w-4 h-4 text-black" />
  </a>
);