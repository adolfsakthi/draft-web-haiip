import React from "react";

const topCards = [
  {
    title: "Smart Identity",
    desc: "Biometric access, facial recognition, and attendance integration.",
    icon: "🪪",
  },
  {
    title: "Smart Office",
    desc: "Automate workplaces with unified dashboards for monitoring & HR.",
    icon: "🏢",
  },
  {
    title: "Workforce Management",
    desc: "Manage shifts, payroll, and attendance seamlessly.",
    icon: "👥",
  },
];

const bottomCards = [
  {
    title: "Smart Entrance Control",
    desc: "Streamline entry points with AI-driven gates and barriers.",
    icon: "🚪",
  },
  {
    title: "Smart Surveillance",
    desc: "AI video analytics with real-time monitoring and cloud alerts.",
    icon: "📷",
  },
  {
    title: "Smart Monitoring Dashboard",
    desc: "Real-time overview of devices, logs, and events.",
    icon: "📊",
  },
];

const SmartSolutions = () => {
  return (
    <section className="flex justify-center bg-[#fbfaff] w-full">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 py-12 lg:pt-12 lg:h-auto min-h-[600px]">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 lg:mb-16 gap-6 lg:gap-0">

          <div className="flex items-center gap-4">
            <img src="/Star.png" alt="star" className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
            <h2 className="text-3xl md:text-5xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Smart Solutions
            </h2>
          </div>

          <div className="relative pl-6 max-w-full lg:max-w-[360px]">
            <div className="absolute left-0 top-1 h-[85%] w-[3px] bg-[#cf3d9c]" />
            <p className="
              text-base md:text-lg italic font-medium leading-relaxed
              bg-gradient-to-b from-[#cf3d9c] via-[#b44bb2] to-[#5b38c6]
              bg-clip-text text-transparent
            ">
              Smart, connected, and secure solutions for every space.
            </p>
          </div>

        </div>

        {/* TOP ROW CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 lg:px-10">

          {topCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#eadcf3] px-6 py-6 lg:px-8 lg:py-4 shadow-sm"
            >
              <h3 className="flex items-center gap-3 text-lg lg:text-xl font-semibold text-[#111]">
                <span>{item.icon}</span>
                {item.title}
              </h3>
              <p className="mt-3 text-[#6b7280] text-sm lg:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CONNECTOR LINE (Hidden on mobile) */}
        <div className="relative mt-10 mx-10 h-[2px] bg-[#ff4d6d] hidden lg:block">

          {/* TOP DROPS */}
          <div className="absolute bottom-full left-[13%] h-[34px] w-[2px] bg-[#ff4d6d]" />
          <div className="absolute bottom-full left-[47%] h-[34px] w-[2px] bg-[#ff4d6d]" />
          <div className="absolute bottom-full left-[81%] h-[34px] w-[2px] bg-[#ff4d6d]" />

          {/* BOTTOM DROPS */}
          <div className="absolute top-0 left-[16%] h-[34px] w-[2px] bg-[#ff4d6d]" />
          <div className="absolute top-0 left-[50%] h-[34px] w-[2px] bg-[#ff4d6d]" />
          <div className="absolute top-0 left-[84%] h-[34px] w-[2px] bg-[#ff4d6d]" />

        </div>

        {/* BOTTOM ROW CARDS */}
        <div className="mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 lg:px-10">

          {bottomCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#eadcf3] px-6 py-6 lg:px-8 lg:py-4 shadow-sm"
            >
              <h3 className="flex items-center gap-3 text-lg lg:text-xl font-semibold text-[#111]">
                <span>{item.icon}</span>
                {item.title}
              </h3>
              <p className="mt-3 text-[#6b7280] text-sm lg:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* DECOR TRIANGLES LEFT — visible + softly faded (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-36 left-6 opacity-40 pointer-events-none">
          <div className="w-32 h-32 border border-[#bdbdbd] rotate-12" />
        </div>

        {/* DECOR TRIANGLES RIGHT — visible + softly faded (Hidden on mobile) */}
        <div className="hidden lg:block absolute bottom-6 right-6 opacity-40 pointer-events-none">
          <div className="w-32 h-32 border border-[#bdbdbd] -rotate-12" />
        </div>

      </div>
    </section>
  );
};

export default SmartSolutions;
