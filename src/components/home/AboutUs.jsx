import React from "react";

const stats = [
  {
    title: "10+ Years of Expertise",
    description:
      "We transform the innovation capability of our partners through a world-class programme which combines research, ecosystem activation, and startup engagement.",
  },
  {
    title: "100+ Global Clients",
    description:
      "Trusted by businesses worldwide for reliable technology solutions and seamless service delivery.",
  },
  {
    title: "24/7 Technical Support",
    description:
      "Round-the-clock assistance from our expert engineers to ensure uninterrupted performance and peace of mind.",
  },
];

const AboutUs = () => {
  return (
    <section className="flex justify-center bg-[#fafbff] py-16 md:py-24">
      <div className="w-full max-w-[1440px] px-6 lg:px-20 overflow-hidden lg:overflow-visible">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>About Us</h2>
          </div>

          {/* RIGHT CONTENT WITH VERTICAL LINE */}
          <div className="relative max-w-full lg:max-w-[640px] pl-6 lg:pl-0 lg:-ml-12">

            {/* Vertical Accent Line */}
            <div className="absolute left-0 lg:left-[-60px] top-2 h-[95%] w-[3px] bg-[#cf3d9c]" />

            {/* FIRST PARAGRAPH */}
            <p className="
              text-[14px] md:text-[16px] 
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
              Hezee Access IT Infrastructure specializes in custom software development,
              cloud solutions, UI/UX design, and web development. We provide tailored
              digital solutions that streamline operations and enhance efficiency.
            </p>

            {/* SECOND PARAGRAPH */}
            <p className="
              mt-6 
              text-[14px] md:text-[16px] 
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
              We offer innovative solutions like Time & Attendance, Payroll, Hotel,
              Visitor, Inventory, Campus, and Canteen Management to streamline business
              operations. Partner with us to turn your vision into powerful software
              solutions.
            </p>
          </div>

        </div>

        {/* HORIZONTAL DIVIDER */}
        <div className="my-12 lg:my-20 h-[1px] w-full bg-[#dfe3f5]" />

        {/* BOTTOM CARDS SECTION */}
        <div className="relative flex flex-col lg:flex-row justify-center gap-8 lg:gap-0">

          {stats.map((item, idx) => (
            <div
              key={item.title}
              className={`
                relative w-full max-w-[460px] lg:w-[460px] min-h-[320px] lg:h-[380px]
                rounded-[40px] lg:rounded-[240px]
                flex flex-col justify-center
                px-8 lg:px-16 py-10 lg:py-0
                bg-gradient-to-l from-[#edf3ff] to-[#f9fbff]
                ${idx === 1 ? "lg:-mx-14 z-10" : ""}
                ${idx === 0 ? "lg:-mt-6 z-20" : "z-0"}
                mx-auto
              `}
            >
              {/* ICON */}
              <div className="lg:absolute lg:top-[80px] lg:left-[80px] mb-6 lg:mb-0 flex h-14 w-14 items-center justify-center">
                <img
                  src="/tool.png"
                  alt=""
                  className="h-10 w-10 object-contain rounded-full shadow-md"
                />
              </div>

              {/* CONTENT WRAPPER */}
              <div
                className={`lg:ml-auto flex w-full lg:max-w-[320px] flex-col items-start ${idx === 0 ? "lg:mt-12" : ""}`}
              >
                <h3 className="text-xl lg:text-2xl font-bold text-[#182033]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm lg:text-base leading-relaxed text-[#4b5263]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* RIGHT PURPLE DECORATION (Hidden on mobile to prevent overflow) */}
          <div className="hidden lg:block absolute right-[-110px] top-[-140px] pointer-events-none">
            <img
              src="/about.png"
              alt=""
              className="h-[280px] w-[260px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
