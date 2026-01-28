import React from "react";

const deliverItems = [
  {
    step: "01",
    title: "Smart Monitoring Dashboard",
    description:
      "Tailored solutions designed to integrate seamlessly with existing infrastructure and workflows.",
    image: "/d1.png",
  },
  {
    step: "02",
    title: "Smart Workforce Management",
    description:
      "Biometric-driven attendance and productivity tracking.",
    image: "/d2.svg",
  },
  {
    step: "03",
    title: "Smart Data Security",
    description:
      "AI-powered software ensuring safe access and information integrity.",
    image: "/d3.svg",
  },
];

const WhatWeDeliver = () => {
  return (
    <section className="flex justify-center bg-white py-16">
      <div className="w-full max-w-[1440px] px-6 lg:px-20 relative">

        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-14 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-black" style={{ fontFamily: 'Zen Dots, sans-serif' }}>
              What We Deliver
            </h2>
          </div>

          {/* RIGHT TAGLINE WITH LINE */}
          <div className="relative pl-6 max-w-full lg:max-w-[420px]">

            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-1 h-[80%] w-[3px] bg-[#cf3d9c]" />

            {/* Gradient Subtitle */}
            <p className="
              text-base md:text-lg 
              italic 
              font-medium
              leading-relaxed
              bg-gradient-to-b 
              from-[#cf3d9c] 
              via-[#b44bb2] 
              to-[#5b38c6]
              bg-clip-text 
              text-transparent
            ">
              Powerful technology, reliable installations, and continuous support.
            </p>

          </div>

        </div>

        {/* DESKTOP VIEW: ICONS + LINE + CONTENT */}
        <div className="hidden lg:block">
          {/* ICONS ROW - Aligned with Content Grid */}
          <div className="grid grid-cols-3 gap-20 px-12 mb-4">
            {deliverItems.map((item) => (
              <div key={item.step} className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[82px] w-[82px] object-contain opacity-100"
                />
              </div>
            ))}
          </div>

          {/* HORIZONTAL LINE */}
          <div className="relative mx-24 h-[1px] bg-black">
            {/* POINTERS */}
            <div className="absolute top-full left-0 w-full flex justify-between px-[120px]">
              {deliverItems.map((item) => (
                <div
                  key={item.step}
                  className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[9px] border-l-transparent border-r-transparent border-t-black"
                />
              ))}
            </div>
          </div>

          {/* CONTENT BELOW */}
          <div className="mt-14 grid grid-cols-3 gap-20 px-12">
            {deliverItems.map((item) => (
              <div key={item.step} className="text-center flex flex-col items-center">

                {/* BIG OUTLINE NUMBER */}
                <div
                  className="text-[96px] font-bold leading-none text-transparent"
                  style={{ WebkitTextStroke: "2px black" }}
                >
                  {item.step}
                </div>

                {/* TITLE */}
                <h3
                  className="mt-6 text-2xl font-semibold text-black"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="mt-3 text-[#7a7a7a] max-w-[320px] mx-auto"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "18px",
                    lineHeight: "24px",
                    letterSpacing: "0.02em", // 2%
                    textAlign: "center"
                  }}
                >
                  {item.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW: VERTICAL STACK */}
        <div className="lg:hidden flex flex-col gap-12 mt-8">
          {deliverItems.map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="h-[64px] w-[64px] object-contain mb-4"
              />

              <div
                className="text-[64px] font-bold leading-none text-transparent mb-2"
                style={{ WebkitTextStroke: "1px black" }}
              >
                {item.step}
              </div>

              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#7a7a7a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* LEFT BOTTOM DOT DECORATION (Hidden on mobile) */}
        <div className="hidden lg:grid absolute bottom-4 left-6 grid-cols-3 grid-rows-8 gap-3 opacity-40">
          {Array.from({ length: 24 }).map((_, idx) => (
            <span key={idx} className="h-2 w-2 rounded-full bg-[#9fe3c1]" />
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhatWeDeliver;
