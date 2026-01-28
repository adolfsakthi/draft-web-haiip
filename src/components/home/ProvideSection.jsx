import React from "react";

const ProvideSection = () => {
  return (
    <section className="flex justify-center bg-white py-16 md:py-24">
      <div className="w-full max-w-[1440px] px-6 lg:px-20">

        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-black" style={{ fontFamily: 'zen dots, sans-serif' }}>
              What We Provide
            </h2>
          </div>

          {/* RIGHT TAGLINE WITH VERTICAL LINE */}
          <div className="relative pl-6 max-w-full lg:max-w-[420px]">

            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-1 h-[85%] w-[3px] bg-[#cf3d9c]" />

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
              Smart tools and reliable hardware for seamless performance
            </p>

          </div>

        </div>

        {/* SOFTWARE SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-12">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-[420px] text-center lg:text-left">
            <h3 className="flex justify-center lg:justify-start items-center gap-4 text-3xl md:text-5xl font-semibold text-black">
              Software’s
              <img
                src="/arrow.png"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </h3>

            <p className="mt-6 mx-auto lg:mx-0 max-w-[360px] text-sm md:text-base leading-relaxed text-[#3a3a3a]">
              Smart tools to simplify your workflow. Our software solutions are designed to improve efficiency, automate routine tasks, and deliver a seamless experience across your entire system.
            </p>
          </div>

          {/* RIGHT IMAGE PILL */}
          <div className="w-full lg:w-[900px] h-[200px] md:h-[260px] overflow-hidden rounded-[20px] md:rounded-[140px]">
            <img
              src="/provide/software-pill.png"
              alt="Software solutions"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* HARDWARE SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* LEFT TEXT (Stacked on mobile, Left on Desktop) */}
          <div className="w-full lg:w-[420px] text-center lg:text-left">
            <h3 className="flex justify-center lg:justify-start items-center gap-4 text-3xl md:text-5xl font-semibold text-black">
              Hardware’s

              <img
                src="/arrow.png"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </h3>

            <p className="mt-6 mx-auto lg:mx-0 max-w-[360px] text-sm md:text-base leading-relaxed text-[#3a3a3a]">
              Powerful devices built for reliability. From performance-driven components to durable devices, our hardware ensures stable operations and long-lasting performance for your business.
            </p>
          </div>

          {/* RIGHT IMAGE PILL */}
          <div className="w-full lg:w-[900px] h-[200px] md:h-[260px] overflow-hidden rounded-[20px] md:rounded-[140px]">
            <img
              src="/provide/hardware-pill.png"
              alt="Hardware solutions"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProvideSection;
