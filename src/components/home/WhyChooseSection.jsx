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
      <div className="w-full max-w-[1440px] px-6 lg:px-20 relative">

        {/* BACKGROUND FLOWER IMAGE - Full Section Background */}
        <img
          src="/src/assets/images/property/grey_flower.png"
          alt=""
          className="absolute top-[50%] right-[-60px] -translate-y-1/2 pointer-events-none z-0"
          style={{
            width: "812.35px",
            height: "1031.06px",
            transform: "translateY(-50%) rotate(-74.88deg)",
            opacity: 0.1
          }}
        />


        {/* HEADER */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start mb-18 -mt-10 gap-8 lg:gap-0">

          <div className="flex items-center gap-4 lg:-ml-6">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-3xl md:text-5xl font-normal text-black" style={{ fontFamily: 'Zen Dots, sans-serif' }}>
              Why Choose Hezee
            </h2>
          </div>

          <div className="relative flex max-w-2xl gap-5 mt-8 lg:ml-32">

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
              Trusted by businesses worldwide for reliable, <br className="hidden lg:block" />
              scalable solutions.
            </p>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 border border-black mt-16">

          {/* LEFT IMAGE */}
          <div className="h-[300px] lg:h-[600px] overflow-hidden border-b lg:border-b-0 border-black">
            <img
              src="/why/hero.png"
              alt="Hezee quality"
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT 2x2 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {items.map((item, idx) => (
              <div
                key={idx}
                className="
                  group relative overflow-hidden
                  border-l border-b border-black
                  pt-2 pl-3 pb-12 pr-10
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