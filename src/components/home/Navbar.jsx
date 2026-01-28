// Replaced react-router-dom with simple anchors to avoid dependency

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Hezee Access" className="w-47 h-11" />

        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-500 font-medium">
          <a href="#home" className="hover:text-gray-800">
            Home
          </a>
          <a href="#services" className="hover:text-gray-800">
            Services
          </a>
          <a href="#products" className="hover:text-gray-800">
            Products
          </a>
          <a href="#about" className="hover:text-gray-800">
            About us
          </a>
          <a href="#contact" className="hover:text-gray-800">
            Contact
          </a>
        </div>

        {/* Right: Phone + Button */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-gray-700 font-medium">
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

          <button className="bg-[#0F161E] text-white px-[16px] py-[12px] rounded-[6px] border-[2px] border-[#0F161E] font-medium hover:bg-gray-800 transition">
            Request a demo
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
