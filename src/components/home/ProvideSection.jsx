import React from "react";

const ProvideSection = () => {
  return (
    <section className="flex justify-center bg-white py-16 md:py-24">
      <div className="w-full max-w-[1440px] px-6 lg:px-20">

        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4 lg:-ml-5">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2 className="text-black text-3xl md:text-5xl" style={{ fontFamily: 'Zen Dots', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0%' }}>
              What We Provide
            </h2>
          </div>

          {/* RIGHT TAGLINE WITH VERTICAL LINE */}
          <div className="relative pl-6 max-w-full lg:max-w-[550px] lg:mt-10">

            {/* Vertical Accent Line */}
            <div
              className="absolute left-0 top-1 h-[95%] w-[3px]"
              style={{ background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)' }}
            />

            {/* Gradient Subtitle */}
            <p
              className="italic text-lg md:text-2xl lg:text-[26px]"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                lineHeight: '1.2',
                letterSpacing: '0%',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Smart tools and reliable hardware for <br className="hidden lg:block" /> seamless performance
            </p>

          </div>

        </div>

        {/* SOFTWARE SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-12">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-[420px] text-center lg:text-left">
            <h3
              className="flex justify-center lg:justify-start items-center gap-4 text-black text-4xl md:text-[59px]"
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '100%', letterSpacing: '-2px', verticalAlign: 'middle' }}
            >
              Software’s
              <img
                src="/arrow.png"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </h3>

            <p
              className="mt-6 mx-auto lg:mx-0 max-w-[420px] text-[#3a3a3a] text-left"
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', lineHeight: '24px', letterSpacing: '0%', verticalAlign: 'middle' }}
            >
              Smart tools to simplify your workflow <br />
              Our software solutions are designed to <br />
              improve efficiency, automate routine <br />
              tasks, and deliver a seamless <br />
              experience across your entire system.
            </p>
          </div>

          {/* RIGHT IMAGE PILL */}
          <div className="w-full lg:w-[1400px] h-[200px] md:h-[260px] overflow-hidden rounded-[20px] md:rounded-[140px]">
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
            <h3
              className="flex justify-center lg:justify-start items-center gap-4 text-black text-4xl md:text-[59px]"
              style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '100%', letterSpacing: '-2px', verticalAlign: 'middle' }}
            >
              Hardware’s
              <img
                src="/arrow.png"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </h3>

            <p
              className="mt-6 mx-auto lg:mx-0 max-w-[420px] text-[#3a3a3a] text-left"
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', lineHeight: '24px', letterSpacing: '0%', verticalAlign: 'middle' }}
            >
              Powerful devices built for reliability <br />
              From performance-driven components to <br />
              durable devices, our hardware ensures <br />
              stable operations and long-lasting <br />
              performance for your business.
            </p>
          </div>

          {/* RIGHT IMAGE PILL */}
          <div className="w-full lg:w-[1400px] h-[200px] md:h-[260px] overflow-hidden rounded-[20px] md:rounded-[140px]">
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
