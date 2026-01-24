import React from "react";

const ProvideSection = () => {
  return (
    <section className="flex justify-center bg-white py-24">
      <div className="w-[1440px]">

        {/* TOP HEADER */}
        <div className="flex justify-between items-start mb-20">

          {/* LEFT TITLE — slightly bigger */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-5xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              What We Provide
            </h2>
          </div>

          {/* RIGHT TAGLINE WITH VERTICAL LINE */}
          <div className="relative pl-6 max-w-[420px]">

            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-1 h-[85%] w-[3px] bg-[#cf3d9c]" />

            {/* Gradient Subtitle */}
            <p className="
    text-lg 
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
        <div className="flex items-center gap-20 mb-12">


          {/* LEFT TEXT */}
          <div className="w-[420px] text-center">
            <h3 className="flex justify-center items-center gap-4 text-5xl font-semibold text-black">
              Software’s
              <img
                src="/arrow.png"
                alt=""
                className="w-10 h-10 object-contain"
              />

            </h3>

            <p className="mt-6 mx-auto max-w-[360px] text-base leading-relaxed text-[#3a3a3a]">
              Smart tools to simplify your workflow. Our software solutions are designed to improve efficiency, automate routine tasks, and deliver a seamless experience across your entire system.
            </p>
          </div>

          {/* RIGHT IMAGE PILL */}
          <div className="w-[900px] h-[260px] overflow-hidden rounded-[140px]">
            <img
              src="/provide/software-pill.png"
              alt="Software solutions"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* HARDWARE SECTION — MOVED TEXT TO LEFT SIDE */}
        <div className="flex items-center gap-20">


          {/* LEFT TEXT (same side as Software) */}
          <div className="w-[420px] text-center">
            <h3 className="flex justify-center items-center gap-4 text-5xl font-semibold text-black">
              Hardware’s
              <img
                src="/arrow.png"
                alt=""
                className="w-10 h-10 object-contain"
              />

            </h3>

            <p className="mt-6 mx-auto max-w-[360px] text-base leading-relaxed text-[#3a3a3a]">
              Powerful devices built for reliability. From performance-driven components to durable devices, our hardware ensures stable operations and long-lasting performance for your business.
            </p>
          </div>

          {/* RIGHT IMAGE PILL */}
          <div className="w-[900px] h-[260px] overflow-hidden rounded-[140px]">
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
