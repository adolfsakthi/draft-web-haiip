import React from "react";

const accentLines = [
  { className: "top-10 left-10", width: "w-12" },
  { className: "top-24 right-24", width: "w-16" },
  { className: "bottom-20 left-1/4", width: "w-10" },
  { className: "bottom-10 right-1/3", width: "w-14" },
];

const HeroBanner = () => {
  return (
    <section className="w-full">

      <div
        className="relative overflow-hidden w-full flex items-start py-0"
        style={{
          minHeight: "840px",
          height: "auto",
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center -90px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Accent Lines Removed */}

        {/* Content */}
        <div className="relative flex h-full w-full flex-col items-center justify-start pt-44 md:pt-52 text-center text-[#152033] px-4 md:px-6">


          <h1
            className="max-w-4xl mx-auto text-3xl md:text-[45px] font-bold leading-tight md:leading-[58px] drop-shadow-sm"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "rgba(47, 72, 88, 1)",
            }}
          >
            Innovating the Future with Smart Software & Reliable Security Hardware
          </h1>

          <p className="mt-2 max-w-3xl text-base sm:text-lg md:text-xl font-semibold text-[#5f677f] px-2">
            From advanced surveillance systems to intelligent software — we deliver end-to-end technology for businesses.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 w-full sm:w-auto">

            {/* SOFTWARE BUTTON */}
            {/* SOFTWARE BUTTON */}
            <div className="bg-[rgba(47,72,88,0.1)] rounded-[8px] p-[10px] w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-xl bg-[#7DC242] px-8 py-4 text-base md:text-lg font-semibold text-white transition hover:-translate-y-1">
                Explore Software Solutions
              </button>
            </div>

            {/* SECURITY BUTTON */}
            <div className="bg-[rgba(47,72,88,0.1)] rounded-[8px] p-[10px] w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-xl bg-[rgba(43,42,75,1)] px-8 py-4 text-base md:text-lg font-semibold text-white transition hover:-translate-y-1">
                Explore Security Products
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
