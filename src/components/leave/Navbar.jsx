// Navbar component
export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-3 px-4 md:px-12 flex items-center justify-between fixed top-0 left-0 z-50 border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo192.png" alt="Hezee Access Logo" className="h-7 w-7" />
        <span className="font-bold text-xl tracking-wide text-[#1b2c3e] font-sans">HEZEE <span className="text-[#00b6f3]">ACCESS</span></span>
      </div>
      {/* Menu */}
      <div className="hidden md:flex gap-8 text-[#222] font-medium text-sm">
        <a href="#" className="hover:text-[#00b6f3] transition">Home</a>
        <a href="#" className="hover:text-[#00b6f3] transition">Services</a>
        <a href="#" className="hover:text-[#00b6f3] transition">Products</a>
        <a href="#" className="hover:text-[#00b6f3] transition">About</a>
        <a href="#" className="hover:text-[#00b6f3] transition">Contact</a>
      </div>
      {/* Phone and Button */}
      <div className="flex items-center gap-2">
        <span className="hidden md:inline-block text-xs text-[#222] mr-2">+91 8085122890</span>
        <button className="bg-[#222] text-white text-xs px-4 py-2 rounded hover:bg-[#00b6f3] transition font-semibold">Request a demo</button>
      </div>
    </nav>
  );
}
