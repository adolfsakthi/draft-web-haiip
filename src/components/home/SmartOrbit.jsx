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

  const handleDownload = (title) => {
    // precise-ui-response
    alert(`Downloading ${title} Datasheet...`);
  };

  return (
    <section className="relative flex justify-center bg-white py-24 overflow-hidden">
      <div className="relative w-[1300px]">

        {/* HEADER */}
        <div className="mb-8 flex flex-col md:flex-row items-start justify-between z-20 relative px-6 md:px-10">
          <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold text-black">
            <img src="/Star.png" alt="star" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
            <h2 style={{ fontFamily: "Zen Dots, sans-serif" }}>
              Explore our product categories
            </h2>
            <p
              className="
                text-base md:text-lg italic font-medium leading-relaxed
                bg-gradient-to-b from-[#cf3d9c] via-[#b44bb2] to-[#5b38c6]
                bg-clip-text text-transparent
              "
            >
              Access control, video surveillance, gates, vehicle inspection and more.
            </p>
          </div>
        </div>

        {/* ================= EXACT IMAGE REPLICATION ================= */}
        <div className="relative w-full h-[650px] mt-10 select-none">

          {/* ORBITAL LINES (SVG) */}
          {/* These paths approximate the 4 curves seen in the image */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
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


          {/* ITEMS */}
          {products.map((item) => (
            <div
              key={item.id}
              className="absolute flex flex-col items-center group cursor-pointer z-10"
              style={{
                top: item.top,
                left: item.left,
                transform: "translate(-50%, -50%)", // Center on coordinate
              }}
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
