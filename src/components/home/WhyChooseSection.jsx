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
    <section className="flex justify-center bg-[#fbfaff] py-20">
      <div className="w-[1440px] relative">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-16">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
           <img
    src="/Star.png"
    alt="star"
    className="w-14 h-14 object-contain"
  />
            <h2 className="text-5xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Why Choose Hezee
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
        <div className="relative pl-6 max-w-[360px]">

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
    Trusted by businesses worldwide for reliable, scalable solutions.
  </p>

</div>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-[1.3fr_1fr] border border-black">

          {/* LEFT IMAGE */}
          <div className="h-[520px] overflow-hidden">
            <img
              src="/why/hero.png"
              alt="Hezee quality"
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT 2x2 GRID */}
          <div className="grid grid-cols-2 grid-rows-2">

            {items.map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden border-l border-b border-black p-8`}
              >
                {/* Background gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#f5f7fb]/20 to-[#eef1f9]/30 opacity-20 transition-opacity duration-300 group-hover:opacity-40" />

                {/* Dark hover overlay */}
                <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:bg-[#f2f2f7]" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-between">

                  {/* Title always visible */}
                  <h3 className="text-xl font-semibold text-[#2a2d4a]">
                    {item.title}
                  </h3>

                  {/* Description only on hover */}
                  <p className="max-w-[260px] text-base leading-relaxed text-black opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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
