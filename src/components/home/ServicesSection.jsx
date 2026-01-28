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

  // Infinite wrap for Desktop Carousel
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
    <section className="relative flex justify-center bg-[#f7f7fb] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1320px] px-6">

        {/* HEADER */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
          <div className="flex items-center gap-4 text-2xl md:text-4xl font-semibold text-black">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
            <h2 style={{ fontFamily: 'Zen Dots, sans-serif' }}>Our Services</h2>
          </div>

          <div className="relative flex max-w-xl gap-5">

            {/* Vertical Accent Line */}
            <div className="h-[50px] md:h-[70px] w-[3px] bg-[#c63f9d]" />

            {/* Gradient Subtitle */}
            <p className="
            text-sm md:text-base 
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

        {/* DESKTOP CAROUSEL (Hidden on mobile/tablet) */}
        <div className="hidden lg:block relative overflow-hidden px-[20px]">
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

        {/* MOBILE/TABLET GRID (Visible only on smaller screens) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 shadow-md border border-gray-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#c63f9d]/50">
                <img src={service.icon} alt={service.title} className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-[#172136]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#4b5263]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER (Desktop only) */}
        <div className="hidden lg:flex absolute bottom-12 left-0 right-0 items-center justify-between px-20">

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
