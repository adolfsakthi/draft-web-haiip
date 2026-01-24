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
    <section className="flex justify-center bg-[#fbfaff]">
      <div className="relative w-[1442px] h-[610px] px-20 pt-12">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-16">

          <div className="flex items-center gap-4">
            <img src="/Star.png" alt="star" className="w-14 h-14 object-contain" />
            <h2 className="text-5xl font-bold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Smart Solutions
            </h2>
          </div>

          <div className="relative pl-6 max-w-[360px]">
            <div className="absolute left-0 top-1 h-[85%] w-[3px] bg-[#cf3d9c]" />
            <p className="
              text-lg italic font-medium leading-relaxed
              bg-gradient-to-b from-[#cf3d9c] via-[#b44bb2] to-[#5b38c6]
              bg-clip-text text-transparent
            ">
              Smart, connected, and secure solutions for every space.
            </p>
          </div>

        </div>

        {/* TOP ROW CARDS */}
        <div className="grid grid-cols-3 gap-20 px-10">

          {topCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#eadcf3] px-8 py-4 shadow-sm"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-[#111]">
                <span>{item.icon}</span>
                {item.title}
              </h3>
              <p className="mt-3 text-[#6b7280] text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CONNECTOR LINE */}
        <div className="relative mt-10 mx-10 h-[2px] bg-[#ff4d6d]">

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
        <div className="mt-14 grid grid-cols-3 gap-20 px-10">

          {bottomCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#eadcf3] px-8 py-4 shadow-sm"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-[#111]">
                <span>{item.icon}</span>
                {item.title}
              </h3>
              <p className="mt-3 text-[#6b7280] text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* DECOR TRIANGLES LEFT — visible + softly faded */}
        <div className="absolute top-36 left-6 opacity-40">
          <div className="w-32 h-32 border border-[#bdbdbd] rotate-12" />
        </div>

        {/* DECOR TRIANGLES RIGHT — visible + softly faded */}
        <div className="absolute bottom-6 right-6 opacity-40">
          <div className="w-32 h-32 border border-[#bdbdbd] -rotate-12" />
        </div>

      </div>
    </section>
  );
};

export default SmartSolutions;
