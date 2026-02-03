import React from "react";

const accentLines = [
  { className: "top-10 left-10", width: "w-12" },
  { className: "top-24 right-24", width: "w-16" },
  { className: "bottom-20 left-1/4", width: "w-10" },
  { className: "bottom-10 right-1/3", width: "w-14" },
];

const HeroBanner = () => {
  return (
    <section id="home" className="w-full">

      <div
        className="relative overflow-hidden w-full flex items-start py-0"
        style={{
          minHeight: "700px",
          height: "auto",
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Accent Lines Removed */}

        {/* Content */}
        <div className="relative flex h-full w-full flex-col items-center justify-start pt-28 md:pt-44 text-center text-[#152033] px-4 md:px-6">


          <h1
            className="max-w-6xl mx-auto text-3xl md:text-[45px] font-bold text-center drop-shadow-sm px-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              lineHeight: "1.2",
              letterSpacing: "0%",
              color: "rgba(47, 72, 88, 1)",
            }}
          >
            Innovating the Future with Smart Software & <br className="hidden md:block" />
            Reliable Security Hardware
          </h1>

          <p
            className="mt-6 max-w-4xl px-4 text-base md:text-[20px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              lineHeight: "1.5",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#5f677f"
            }}
          >
            From advanced surveillance systems to intelligent software — we deliver end-to-end <br className="hidden md:block" />
            technology for businesses.
          </p>

          <div className="mt-8 mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-7 w-full sm:w-auto px-4">

            {/* SOFTWARE BUTTON */}
            <div className="p-1 rounded-[12px] border border-[#E2E8F0] bg-[#2F48580D] w-full sm:w-auto shadow-sm">
              <div className="p-1 rounded-[12px] border border-[#E2E8F0] bg-[#2F48581A]">
                <button
                  className="flex items-center justify-center w-full sm:min-w-[280px] h-[46px] rounded-[8px] bg-[#99C331] px-4 py-2 text-white whitespace-nowrap transition hover:opacity-90 active:scale-95 shadow-sm text-lg md:text-[22px]"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    gap: "10px"
                  }}
                >
                  Explore Software Solutions
                </button>
              </div>
            </div>

            {/* SECURITY BUTTON */}
            <div className="p-1 rounded-[12px] border border-[#E2E8F0] bg-[#2F48580D] w-full sm:w-auto shadow-sm">
              <div className="p-1 rounded-[12px] border border-[#E2E8F0] bg-[#2F48581A]">
                <button
                  className="flex items-center justify-center w-full sm:min-w-[280px] h-[46px] rounded-[8px] bg-[#2B2A4B] px-4 py-2 text-white whitespace-nowrap transition hover:opacity-90 active:scale-95 shadow-sm text-lg md:text-[22px]"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    gap: "10px"
                  }}
                >
                  Explore Security Products
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
