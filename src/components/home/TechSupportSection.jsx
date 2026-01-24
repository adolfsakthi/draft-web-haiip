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
      <div className="w-[1440px] relative">

        {/* TOP HEADER */}
        <div className="flex justify-between items-start mb-14">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
    src="/Star.png"
    alt="star"
    className="w-14 h-14 object-contain"
  />
            <h2 className="text-5xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              What We Deliver
            </h2>
          </div>

          {/* RIGHT TAGLINE WITH LINE */}
         <div className="relative pl-6 max-w-[420px]">

  {/* Vertical Accent Line */}
  <div className="absolute left-0 top-1 h-[80%] w-[3px] bg-[#cf3d9c]" />

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
    Powerful technology, reliable installations, and continuous support.
  </p>

</div>

        </div>

        {/* ICONS ROW */}
        <div className="flex justify-between items-center mb-4 px-24">
          {deliverItems.map((item) => (
            <img
              key={item.step}
              src={item.image}
              alt={item.title}
              className={`h-[64px] w-[64px] object-contain ${
  item.step === "01" ? "ml-14" : item.step === "03" ? "mr-14" : ""
}`}

            />
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
            <div key={item.step} className="text-center">

              {/* BIG OUTLINE NUMBER */}
              <div
                className="text-[96px] font-bold leading-none text-transparent"
                style={{ WebkitTextStroke: "2px black" }}
              >
                {item.step}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-2xl font-semibold text-black">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-base leading-relaxed text-[#7a7a7a] max-w-[320px] mx-auto">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* LEFT BOTTOM DOT DECORATION */}
      <div className="absolute bottom-4 left-6 grid grid-cols-3 grid-rows-8 gap-3 opacity-40">
  {Array.from({ length: 24 }).map((_, idx) => (
    <span key={idx} className="h-2 w-2 rounded-full bg-[#9fe3c1]" />
  ))}
</div>


      </div>
    </section>
  );
};

export default WhatWeDeliver;
