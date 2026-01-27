import React from "react";

const items = [
  {
    title: "Industrial Quality",
    desc:
      "Military-grade components with extended warranty and proven durability in harsh environments.",
  },
  {
    title: "Custom Integration",
    desc:
      "Tailored solutions designed to integrate seamlessly with existing infrastructure and workflows.",
  },
  {
    title: "Global Network",
    desc:
      "Worldwide support network with local technicians and 24/7 remote assistance capabilities.",
  },
  {
    title: "Expert Support",
    desc:
      "Certified engineers provide comprehensive training, maintenance, and technical support services.",
  },
];

const WhyChooseHezee = () => {
  return (
    <section className="flex justify-center bg-[#fbfaff] py-16 md:py-20">
      <div className="w-full max-w-[1440px] px-6 lg:px-20 relative">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Why Choose Hezee
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="relative pl-6 max-w-full lg:max-w-[360px]">

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
              Trusted by businesses worldwide for reliable, scalable solutions.
            </p>

          </div>

        </div>

        {/* MAIN DISPLAY - GRID/FLEX */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1.3fr_1fr] border border-black rounded-xl overflow-hidden">

          {/* LEFT IMAGE - on Desktop. On mobile, it acts as top banner or hidden if needed (keeping it) */}
          <div className="h-[300px] lg:h-[520px] overflow-hidden">
            <img
              src="/why/hero.png"
              alt="Hezee quality"
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT 2x2 GRID (Stacks on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2">

            {items.map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden border-b sm:border-b-0 lg:border-b border-black last:border-b-0 sm:last:border-b lg:last:border-b-0 border-r-0 sm:border-r lg:border-r lg:border-l-0 p-8`}
                // Note: Border logic gets messy with manual borders in responsive grid.
                // Simplified border approach: All have border, last ones remove.
                style={{
                  borderBottom: '1px solid black',
                  borderLeft: '1px solid black'
                }}
              >
                {/* Background gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#f5f7fb]/20 to-[#eef1f9]/30 opacity-20 transition-opacity duration-300 group-hover:opacity-40" />

                {/* Dark hover overlay */}
                <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:bg-[#f2f2f7]" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-between gap-6 lg:gap-0">

                  {/* Title always visible */}
                  <h3 className="text-lg lg:text-xl font-semibold text-[#2a2d4a]">
                    {item.title}
                  </h3>

                  {/* Description only on hover (Desktop) / Always visible (Mobile) for usability */}
                  <p className="max-w-[260px] text-sm lg:text-base leading-relaxed text-black lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 opacity-100 translate-y-0 transition-all duration-300">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseHezee;
