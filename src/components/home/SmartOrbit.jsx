import React from "react";
import { Cpu, Download } from "lucide-react";

// Product Data - 16 Items
// Precise positions relative to a 1000x600 container (percentages)
const products = [
  // --- TOP CURVE ---
  { id: 1, title: "Standalone Device", top: "10%", left: "22%" },
  { id: 2, title: "Control Panel", top: "20%", left: "36%" },
  { id: 3, title: "Reader", top: "24%", left: "56%" },
  { id: 4, title: "Accessory", top: "12%", left: "75%" },

  // --- MIDDLE CURVE ---
  { id: 5, title: "IP PTZ", top: "24%", left: "8%" },
  { id: 6, title: "Network Camera", top: "42%", left: "40%" },
  { id: 7, title: "HD Analog Camera", top: "40%", left: "64%" },
  { id: 8, title: "NVR", top: "28%", left: "88%" },

  // --- LOWER CURVE ---
  { id: 9, title: "Tripod Turnstile", top: "48%", left: "8%" },
  { id: 10, title: "Flap Barrier", top: "62%", left: "28%" },
  { id: 11, title: "Swing Barrier", top: "62%", left: "50%" },
  { id: 12, title: "Optical Turnstile", top: "54%", left: "78%" },

  // --- BOTTOM CURVE --- 
  { id: 13, title: "Parking Barrier", top: "72%", left: "14%" },
  { id: 14, title: "LPR", top: "84%", left: "38%" },
  { id: 15, title: "Long Distance Reader", top: "78%", left: "68%" },
  { id: 16, title: "Radar Sensor", top: "68%", left: "90%" },
];

const SmartOrbit = () => {

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = (title) => {
    // precise-ui-response
    alert(`Downloading ${title} Datasheet...`);
  };

  return (
    <section className="relative flex justify-center bg-white py-24 overflow-hidden">
      {/* DECOR IMAGE (Left) */}
      <img
        src="/slides/bluestar.png"
        alt=""
        style={{
          width: '190px',
          height: '190px',
          left: '-82px',
          top: '10%',
          transform: 'rotate(-180deg)',
          opacity: 1,
          objectFit: 'contain'
        }}
        className="absolute pointer-events-none z-0"
      />
      <div className="relative w-full max-w-[1440px] px-6 lg:px-20">

        {/* HEADER */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start mb-12 -mt-10 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4 lg:-ml-6">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2
              className="text-3xl md:text-5xl font-normal text-black"
              style={{ fontFamily: 'Zen Dots, sans-serif' }}
            >
              Explore our product <br className="hidden lg:block" /> categories
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="relative flex max-w-2xl gap-5 mt-14 lg:ml-32">

            {/* Vertical Accent Line */}
            <div
              className="h-[50px] md:h-[70px] w-[3px]"
              style={{ background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)' }}
            />

            {/* Gradient Subtitle */}
            <p
              className="italic"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.6',
                letterSpacing: '0%',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Access control, video surveillance, gates, vehicle <br className="hidden lg:block" />
              inspection and more.
            </p>
          </div>

        </div>

        {/* ================= EXACT IMAGE REPLICATION ================= */}
        <div className="relative w-full min-h-[400px] lg:h-[650px] mt-20 select-none">

          {/* ORBITAL LINES (SVG) - Desktop Only */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cf3d9c" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#5b38c6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#cf3d9c" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Top Curve */}
            <path
              d="M 280 80 Q 650 200 1000 80"
              fill="none" stroke="url(#lineGrad)" strokeWidth="1.5"
            />
            {/* Middle Curve */}
            <path
              d="M 120 180 Q 650 350 1180 180"
              fill="none" stroke="url(#lineGrad)" strokeWidth="1.5"
            />
            {/* Lower Curve */}
            <path
              d="M 120 340 Q 650 500 1180 340"
              fill="none" stroke="url(#lineGrad)" strokeWidth="1.5"
            />
            {/* Bottom Curve */}
            <path
              d="M 200 480 Q 650 600 1200 460"
              fill="none" stroke="url(#lineGrad)" strokeWidth="1.5"
            />
          </svg>


          {/* ITEMS - Grid on Mobile, Absolute on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:block gap-y-12 gap-x-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="relative lg:absolute flex flex-col items-center group cursor-pointer z-10"
                style={!isMobile ? {
                  top: item.top,
                  left: item.left,
                  transform: "translate(-50%, -50%)",
                } : {}}
                onClick={() => handleDownload(item.title)}
              >
                {/* ICON CIRCLE */}
                {/* Using a light blue glowing circle effect similar to image */}
                <div
                  className="
                  w-16 h-16 
                  rounded-full 
                  bg-[#e6f0ff] 
                  border border-[#d0e1fd]
                  flex items-center justify-center 
                  text-[#2b7fff]
                  shadow-[0_4px_12px_rgba(43,127,255,0.15)]
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-[#2b7fff]
                  group-hover:text-white
                  group-hover:shadow-[0_8px_20px_rgba(43,127,255,0.4)]
                  relative
                "
                >
                  <Cpu size={28} strokeWidth={1.5} />

                  {/* Download Badge (Hover) */}
                  <div className="absolute -top-2 -right-2 bg-black text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 shadow-md">
                    <Download size={10} />
                  </div>
                </div>

                {/* LABEL */}
                <span className="mt-3 text-sm font-semibold text-[#1a1a1a] text-center whitespace-nowrap bg-white/60 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                  {item.title}
                </span>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* DECOR IMAGE (Bottom Right) */}
      <img
        src="/human.png"
        alt=""
        className="
            absolute right-0 bottom-0
            w-[200px] md:w-[260px]
            object-contain
            pointer-events-none
            z-20
          "
      />
    </section>
  );
};

export default SmartOrbit;
