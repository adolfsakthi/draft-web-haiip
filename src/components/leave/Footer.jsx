// Footer section
export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-8 pb-4 text-[#1b2c3e] text-xs">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo and social */}
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo192.png" alt="Hezee Access Logo" className="h-7 w-7" />
            <span className="font-bold text-lg tracking-wide text-[#1b2c3e]">HEZEE <span className="text-[#00b6f3]">ACCESS</span></span>
          </div>
          <div className="flex gap-2 mb-2">
            <a href="#" className="hover:text-[#00b6f3]"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-[#00b6f3]"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-[#00b6f3]"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-[#00b6f3]"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#00b6f3]">About Us</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Careers</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Press</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Blog</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#00b6f3]">About Us</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Careers</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Press</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Blog</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#00b6f3]">About Us</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Careers</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Press</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Blog</a></li>
              <li><a href="#" className="hover:text-[#00b6f3]">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1">
              <li><span className="font-medium">📞</span> +91 8085122890</li>
              <li><span className="font-medium">✉️</span> support@hezeeaccess.com</li>
              <li><span className="font-medium">📍</span> 18/1, 1st Anthony's Road, Richmond Town, Bangalore-560034</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-8">
        © 2025 HEZEE ACCESS | INFRATECHSOLUTIONS PVT LTD. All rights reserved. &nbsp; | &nbsp;
        <a href="#" className="hover:text-[#00b6f3]">Terms of Service</a> &nbsp; | &nbsp;
        <a href="#" className="hover:text-[#00b6f3]">Privacy Policy</a> &nbsp; | &nbsp;
        <a href="#" className="hover:text-[#00b6f3]">Cookie Policy</a>
      </div>
    </footer>
  );
}
