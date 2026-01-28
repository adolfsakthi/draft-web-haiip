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
    <section className="flex justify-center bg-[#fbfaff] py-28 relative overflow-hidden">
      <div className="w-[1400px] relative">

        {/* BACKGROUND FLOWER IMAGE */}
        <img
          src="/src/assets/images/property/grey_flower.png"
          alt=""
          className="
    absolute
    top-[60%]
    right-[-60px]
    -translate-y-1/2
    opacity-[0.2]
    pointer-events-none
    z-0
  "
          style={{
            width: "812px",
            height: "1030px",
            transform: "translateY(-50%) rotate(74.88deg)",
          }}
        />


        {/* HEADER */}
        <div className="relative z-10 flex justify-between items-start mb-16">

          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-5xl font-normal text-black" style={{ fontFamily: 'Zen Dots, sans-serif' }}>
              Why Choose Hezee
            </h2>
          </div>

          <div className="relative pl-6 max-w-[360px]">
            <div className="absolute left-0 top-1 h-[85%] w-[3px] bg-[#cf3d9c]" />
            <p
              className="
                text-lg
                italic
                font-medium
                font-poppins
                leading-relaxed
                bg-gradient-to-b
                from-[#cf3d9c]
                via-[#b44bb2]
                to-[#5b38c6]
                bg-clip-text
                text-transparent
              "
            >
              Trusted by businesses worldwide for reliable, scalable solutions.
            </p>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="relative z-10 grid grid-cols-2 border border-black">

          {/* LEFT IMAGE */}
          <div className="h-[600px] overflow-hidden">
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
                className="
                  group relative overflow-hidden
                  border-l border-b border-black
                  p-10
                  bg-transparent
                "
              >
                {/* SOFT HOVER GRADIENT */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-transparent
                    via-[#f5f7fb]/30
                    to-[#eef1f9]/40
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-between">

                  <h3 className="text-xl font-semibold font-poppins text-[#2a2d4a]">
                    {item.title}
                  </h3>

                  <p
                    className="
                      max-w-[260px]
                      text-base
                      leading-relaxed
                      font-poppins
                      text-black
                      opacity-0
                      translate-y-4
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:translate-y-0
                    "
                  >
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