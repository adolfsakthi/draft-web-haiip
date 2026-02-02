import React from "react";

const deliverItems = [
  {
    step: "01",
    title: "Smart Monitoring <br /> Dashboard",
    description:
      "Tailored solutions designed to integrate seamlessly with existing infrastructure and workflows.",
    image: "/d1.png",
  },
  {
    step: "02",
    title: "Smart Workforce <br /> Management",
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
    <section className="flex justify-center bg-white pt-16 pb-32">
      <div className="w-full max-w-[1440px] px-6 lg:px-20 relative">

        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-14 gap-8 lg:gap-0 mt-20">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4 lg:-ml-6">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: 'Zen Dots', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
              What We Deliver
            </h2>
          </div>

          {/* RIGHT TAGLINE WITH LINE */}
          <div className="relative flex max-w-2xl gap-5 mt-12 lg:ml-32">

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
              Powerful technology, reliable installations, and <br className="hidden lg:block" />
              continuous support.
            </p>

          </div>

        </div>

        {/* DESKTOP VIEW: ICONS + LINE + CONTENT */}
        <div className="hidden lg:block">
          {/* ICONS ROW - Aligned with Content Grid */}
          <div className="grid grid-cols-3 gap-24 mb-8 mt-16 mx-4">
            {deliverItems.map((item) => (
              <div key={item.step} className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain opacity-100"
                  style={{ width: '82px', height: '79px' }}
                />
              </div>
            ))}
          </div>

          {/* HORIZONTAL LINE */}
          {/* HORIZONTAL LINE */}
          <div className="relative mx-4 h-[1px] bg-black">
            {/* POINTERS */}
            <div className="absolute top-0 left-0 w-full grid grid-cols-3 gap-24">
              {deliverItems.map((item) => (
                <div key={item.step} className="flex justify-center -translate-y-[0px]">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-black" />
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT BELOW */}
          <div className="mt-14 grid grid-cols-3 gap-24 mx-4">
            {deliverItems.map((item) => (
              <div key={item.step} className="text-center flex flex-col items-center">

                {/* BIG OUTLINE NUMBER */}
                <div
                  className="font-medium leading-none text-transparent"
                  style={{
                    WebkitTextStroke: "2px black",
                    fontFamily: 'Poppins',
                    fontSize: '102.96px',
                    lineHeight: '100%',
                    textAlign: 'center'
                  }}
                >
                  {item.step}
                </div>

                {/* TITLE */}
                <h3
                  className="mt-6 text-black"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '100%',
                    textAlign: 'center'
                  }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                {/* DESCRIPTION */}
                <p
                  className="mt-6 text-[#7a7a7a] max-w-[340px] mx-auto"
                  style={{
                    fontFamily: 'Archivo',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '24px',
                    letterSpacing: '0.02em', // 2%
                    textAlign: 'center'
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
        <div className="hidden lg:grid absolute bottom-20 -left-4 grid-cols-3 grid-rows-8 gap-3">
          {Array.from({ length: 24 }).map((_, idx) => (
            <span key={idx} className="h-2 w-2 rounded-full bg-[#DDEFE4]" />
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhatWeDeliver;
