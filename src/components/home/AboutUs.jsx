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
    <section className="flex justify-center bg-[#fafbff] py-24">
      <div className="w-[1440px]">

        {/* TOP SECTION */}
        <div className="flex justify-between items-start">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-4xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>About Us</h2>
          </div>

          {/* RIGHT CONTENT WITH VERTICAL LINE */}
          <div className="relative max-w-[640px] -ml-12 pl-0">



            {/* Vertical Accent Line */}
            <div className="absolute left-[-60px] top-2 h-[95%] w-[3px] bg-[#cf3d9c]" />

            {/* FIRST PARAGRAPH — gradient + stronger weight */}
            <p className="
    text-[16px] 
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
    text-[16px] 
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
        <div className="my-20 h-[1px] w-full bg-[#dfe3f5]" />

        {/* BOTTOM CARDS SECTION */}
        <div className="relative flex justify-center">

          {stats.map((item, idx) => (
            <div
              key={item.title}
              className={`
                relative w-[460px] h-[380px]
                rounded-[240px]
                flex flex-col justify-center
                px-16
                bg-gradient-to-l from-[#edf3ff] to-[#f9fbff]
                ${idx === 1 ? "-mx-14 z-10" : ""}
                ${idx === 0 ? "-mt-6 z-20 " : "z-0"}
              `}
            >
              {/* ICON — ONLY CHANGE HERE */}
              <div className="absolute top-[80px] left-[80px] flex h-14 w-14 items-center justify-center">
                <img
                  src="/tool.png"
                  alt=""
                  className="h-10 w-10 object-contain rounded-full shadow-md"
                />
              </div>


              {/* CONTENT WRAPPER */}
              <div
                className={`ml-auto flex max-w-[320px] flex-col items-start ${idx === 0 ? "mt-12" : ""
                  }`}
              >


                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#182033]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-base leading-relaxed text-[#4b5263]">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

          {/* RIGHT PURPLE DECORATION */}
          <img
            src="/about.png"
            alt=""
            className="
              absolute right-[-110px] top-[-140px]
              h-[280px] w-[260px]
              object-contain
              pointer-events-none
            "
          />

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
