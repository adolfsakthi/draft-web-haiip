import React, { useState } from "react";

const services = [
  { title: "UI/UX Design", description: "Engaging, user-friendly designs that enhance experiences, improve usability, and drive customer satisfaction.", icon: "/services/uiux.png" },
  { title: "Custom Software Solution", description: "Tailored software solutions designed to meet your unique business needs, drive efficiency, and enhance performance.", icon: "/services/custom.png" },
  { title: "Web Development", description: "High-performance, responsive websites designed for seamless user interaction, engagement, and optimal functionality.", icon: "/services/web.png" },
  { title: "CRM & ERP", description: "Streamline operations and productivity with data-driven management platforms built for your workflows.", icon: "/services/crm.png" },
  { title: "AI Integration", description: "Smart AI solutions to automate processes, analyze data, and boost intelligent decision-making.", icon: "/services/ai.png" },
];

const CARD_WIDTH = 290;   // reduced
const GAP = 24;          // reduced
const VISIBLE = 5;

const ServicesSection = () => {
  const [active, setActive] = useState(2);
  const total = services.length;

  // Infinite wrap
  const safeIndex = (idx) => {
    if (idx < 0) return total - 1;
    if (idx >= total) return 0;
    return idx;
  };

  const handleSelect = (idx) => {
    setActive(safeIndex(idx));
  };

  // Center active card
  const translateX =
    -(active * (CARD_WIDTH + GAP)) +
    Math.floor(VISIBLE / 2) * (CARD_WIDTH + GAP);

  return (
    <section className="relative flex justify-center bg-[#f7f7fb] py-24 overflow-hidden">
      <div className="w-full max-w-[1320px] px-6">

        {/* HEADER */}
        <div className="mb-20 flex items-start justify-between">
          <div className="flex items-center gap-4 text-4xl font-semibold text-black">
           <img
    src="/Star.png"
    alt="star"
    className="w-14 h-14 object-contain"
  />
            <h2 style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Services</h2>
          </div>

         <div className="relative flex max-w-xl gap-5">

  {/* Vertical Accent Line */}
  <div className="h-[70px] w-[3px] bg-[#c63f9d]" />

  {/* Gradient Subtitle */}
  <p className="
    text-base 
    font-medium
    leading-relaxed
    bg-gradient-to-b 
    from-[#cf3d9c] 
    via-[#b44bb2] 
    to-[#5b38c6]
    bg-clip-text 
    text-transparent
  ">
    Innovative solutions designed to enhance efficiency, security, and performance across every system.
  </p>

</div>

        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden px-[20px]">
          <div
            className="flex items-center transition-transform duration-700 ease-in-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
            }}
          >
            {services.map((service, idx) => {
              const isActive = idx === active;

              return (
                <div
                  key={service.title}
                  onClick={() => handleSelect(idx)}
                  className={`relative shrink-0 rounded-2xl bg-white p-7 shadow-lg transition-all duration-500 cursor-pointer mb-10 mt-10

                    ${isActive
                      ? "border-2 border-[#c63f9d] scale-105 z-10"
                      : "opacity-60 scale-95"
                    }
                  `}
                  style={{ width: `${CARD_WIDTH}px` }}
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#c63f9d]/50">
                    <img src={service.icon} alt={service.title} className="h-6 w-6" />
                  </div>

                  <h3 className={`text-lg font-semibold ${isActive ? "text-[#c63f9d]" : "text-[#172136]"}`}>
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4b5263]">
                    {service.description}
                  </p>

                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-[#c63f9d]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-between px-20">

          <div className="w-40" />

          {/* DOTS */}
          <div className="flex gap-3">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`h-3 w-3 rounded-full transition
                  ${idx === active ? "bg-[#c63f9d]" : "border border-[#c63f9d]"}
                `}
              />
            ))}
          </div>

          {/* PROGRESS */}
          <div className="flex items-center gap-3 text-[#6f6fa3]">
            <span>{String(active + 1).padStart(2, "0")}</span>

            <div className="relative h-[3px] w-32 bg-[#e1e3f0]">
              <div
                className="absolute left-0 top-0 h-full bg-[#c63f9d] transition-all duration-500"
                style={{ width: `${((active + 1) / total) * 100}%` }}
              />
            </div>

            <span className="font-medium text-[#5b38c6]">
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
