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
    <section className="flex justify-center bg-[#fafbff] py-24 md:py-36 -mt-20">
      <div className="w-full max-w-[1440px] px-6 lg:px-20 overflow-hidden lg:overflow-visible">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4 relative lg:-top-9 lg:-left-16">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2 className="text-black" style={{ fontFamily: 'Zen Dots', fontWeight: 400, fontSize: '56px', lineHeight: '100%', letterSpacing: '0%' }}>About Us</h2>
          </div>

          {/* RIGHT CONTENT WITH VERTICAL LINE */}
          <div className="relative max-w-full lg:max-w-[640px] pl-6 lg:pl-0 lg:left-20">

            {/* Vertical Accent Line */}
            <div className="absolute left-0 lg:left-[-20px] top-2 h-[95%] w-[3px] bg-[#cf3d9c]" />

            {/* FIRST PARAGRAPH */}
            <p
              className="italic"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '30px',
                letterSpacing: '0%',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Hezee Access IT Infrastructure specializes in custom software development,
              cloud solutions, UI/UX design, and web development. We provide tailored
              digital solutions that streamline operations and enhance efficiency.
            </p>

            {/* SECOND PARAGRAPH */}
            <p
              className="mt-6 italic"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '30px',
                letterSpacing: '0%',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
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
        <div className="relative flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-0 mt-8 lg:ml-40">

          {stats.map((item, idx) => (
            <div
              key={item.title}
              style={{
                width: '380px',
                height: '460px',
                background: 'linear-gradient(270deg, rgba(219, 234, 254, 0.67) 0%, rgba(219, 234, 254, 0.01) 100%)',
                borderRadius: '0 230px 230px 0', // D-shape based on 460px height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: '80px 50px',
                position: 'relative',
                zIndex: idx === 0 ? 20 : idx === 1 ? 10 : 0,
                marginLeft: idx === 0 ? '0' : '-20px',
                opacity: 1
              }}
              className="mx-auto lg:mx-0 shadow-sm"
            >
              {/* ICON CONTAINER */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#DBEAFE',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  opacity: 1
                }}
              >
                <img
                  src="/tool.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-start w-full" style={{ verticalAlign: 'middle', maxWidth: '300px' }}>
                <h3
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '32px',
                    letterSpacing: '0%',
                    color: '#1e293b',
                    margin: 0
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    color: '#475569',
                    marginTop: '20px'
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* RIGHT PURPLE DECORATION (Hidden on mobile to prevent overflow) */}
          <div className="hidden lg:block absolute right-[-150px] top-[-150px] pointer-events-none">
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
