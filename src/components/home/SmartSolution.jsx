import React from "react";

const topCards = [
  {
    title: "Smart Identity",
    desc: "Biometric access, facial recognition, <br /> and attendance integration.",
    icon: "/smart_solution/identify.jpg",
  },
  {
    title: "Smart Office",
    desc: "Automate workplaces with unified <br /> dashboards for monitoring & HR.",
    icon: "/smart_solution/office.jpg",
  },
  {
    title: "Workforce Management",
    desc: "Manage shifts, payroll, and attendance <br /> seamlessly.",
    icon: "/smart_solution/Workforce.jpg",
  },
];

const bottomCards = [
  {
    title: "Smart Entrance Control",
    desc: "Streamline entry points with AI-driven <br /> gates and barriers.",
    icon: "/smart_solution/entrance.jpg",
  },
  {
    title: "Smart Surveillance",
    desc: "AI video analytics with real-time <br /> monitoring and cloud alerts.",
    icon: "/smart_solution/survillance.jpg",
  },
  {
    title: "Smart Monitoring <br /> Dashboard",
    desc: "Real-time overview of devices, logs, <br /> and events.",
    icon: "/smart_solution/montioring.jpg",
  },
];

const SmartSolutions = () => {
  return (
    <section className="flex justify-center bg-[#fbfaff] py-24 overflow-hidden">
      <div className="relative w-full max-w-[1440px] px-6 lg:px-20">

        {/* HEADER */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start mb-12 -mt-10 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4 lg:-ml-6">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2
              className="text-3xl md:text-5xl font-normal text-black"
              style={{ fontFamily: 'Zen Dots, sans-serif' }}
            >
              Smart Solutions
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="relative flex max-w-2xl gap-5 mt-14 lg:ml-32">

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
              Smart, connected, and secure solutions <br className="hidden lg:block" />
              for every space.
            </p>
          </div>

        </div>

        {/* TOP ROW CARDS */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20">

          {topCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#eadcf3] w-full max-w-[350px]"
              style={{
                height: 'auto',
                minHeight: '122px',
                padding: '20px 24px',
                borderRadius: '9px',
                borderWidth: '1px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <h3
                className="flex items-center gap-3 text-[#111]"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '-0.005em'
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  style={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'contain'
                  }}
                />
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </h3>
              <p
                className="text-[#6b7280]"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.005em'
                }}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          ))}

        </div>

        {/* CONNECTOR LINE - Desktop Only */}
        <div className="hidden lg:block relative mt-10 mx-10 h-[1px] bg-[#ff4d6d]">

          {/* TOP DROPS */}
          <div className="absolute bottom-full left-[13%] h-[34px] w-[1px] bg-[#ff4d6d]" />

          {/* Central Drop */}
          <div className="absolute bottom-full left-[47%] h-[34px] w-[1px] bg-[#ff4d6d]" />

          <div className="absolute bottom-full left-[81%] h-[34px] w-[1px] bg-[#ff4d6d]" />

          {/* BOTTOM DROPS - Shifted Right */}
          <div className="absolute top-0 left-[22%] h-[34px] w-[1px] bg-[#ff4d6d]" />

          {/* Central Drop */}
          <div className="absolute top-0 left-[56%] h-[34px] w-[1px] bg-[#ff4d6d]" />

          <div className="absolute top-0 left-[90%] h-[34px] w-[1px] bg-[#ff4d6d]" />

        </div>

        {/* BOTTOM ROW CARDS */}
        <div className="mt-8 lg:mt-14 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 lg:ml-24">

          {bottomCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#eadcf3] w-full max-w-[350px]"
              style={{
                height: 'auto',
                minHeight: '122px',
                padding: '20px 24px',
                borderRadius: '9px',
                borderWidth: '1px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <h3
                className="flex items-center gap-3 text-[#111]"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '-0.005em'
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  style={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'contain'
                  }}
                />
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </h3>
              <p
                className="text-[#6b7280]"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.005em'
                }}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          ))}

        </div>

        {/* DECOR TRIANGLES LEFT */}
        <div className="absolute top-36 left-6 opacity-40">
          <div className="w-32 h-32 border border-[#bdbdbd] rotate-12" />
        </div>

        {/* DECOR TRIANGLES RIGHT */}
        <div className="absolute bottom-6 right-6 opacity-40">
          <div className="w-32 h-32 border border-[#bdbdbd] -rotate-12" />
        </div>

      </div>
    </section>
  );
};

export default SmartSolutions;