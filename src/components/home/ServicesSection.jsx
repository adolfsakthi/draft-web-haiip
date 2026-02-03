import React, { useState, useEffect, useRef } from "react";

const services = [
  { title: "UI/UX Design", description: "Engaging, user-friendly designs that enhance experiences, improve usability, and drive customer satisfaction.", icon: "/services/uiux.png" },
  { title: "Custom Software Solution", description: "Tailored software solutions designed to meet your unique business needs, drive efficiency, and enhance performance.", icon: "/services/custom.png" },
  { title: "Web Development", description: "High-performance, responsive websites designed for seamless user interaction, engagement, and optimal functionality.", icon: "/services/web.png" },
  { title: "CRM & ERP", description: "Streamline operations and productivity with data-driven management platforms built for your workflows.", icon: "/services/crm.png" },
  { title: "AI Integration", description: "Smart AI solutions to automate processes, analyze data, and boost intelligent decision-making.", icon: "/services/ai.png" },
];

const CARD_WIDTH = 353;
const GAP = 24;          // reduced
const VISIBLE = 5;

const ServicesSection = () => {
  const total = services.length;
  // We use 3 copies for seamless infinite scrolling
  const extendedServices = [...services, ...services, ...services];

  // Start at the first item of the second group
  const [active, setActive] = useState(total);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const displayIndex = active % total;
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  useEffect(() => {
    // If we've reached the start of the first group or end of the last group,
    // jump back to the middle group silently
    if (active < total || active >= total * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        const newIndex = active < total ? active + total : active - total;
        setActive(newIndex);
      }, 700); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [active, total]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  const handleSelect = (idx) => {
    if (!isTransitioning) return;
    setActive(idx);
  };

  // Perfectly center active card
  const translateX = containerWidth > 0
    ? (containerWidth / 2) - (CARD_WIDTH / 2) - (active * (CARD_WIDTH + GAP))
    : 0;

  return (
    <section id="services" className="relative flex justify-center bg-[#f7f7fb] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1320px] px-6">

        {/* HEADER */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
          <div className="flex items-center gap-4 text-2xl md:text-4xl font-semibold text-black">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
            <h2 className="text-3xl md:text-5xl" style={{ fontFamily: 'Zen Dots', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>Our Services</h2>
          </div>

          <div className="relative flex max-w-2xl gap-5 mt-8 lg:mt-12 lg:ml-32">

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
                fontSize: '20px',
                lineHeight: '1.6',
                letterSpacing: '0%',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Innovative solutions designed to enhance efficiency, <br className="hidden lg:block" />
              security, and performance across every system.
            </p>

          </div>

        </div>

        {/* DESKTOP CAROUSEL (Hidden on mobile/tablet) */}
        <div ref={containerRef} className="hidden lg:block relative overflow-hidden px-[20px]">
          <div
            className={`flex items-center ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
            }}
          >
            {extendedServices.map((service, idx) => {
              const isActive = idx === active;

              return (
                <div
                  key={`${service.title}-${idx}`}
                  onClick={() => handleSelect(idx)}
                  className={`relative shrink-0 rounded-2xl bg-white pt-[38px] pb-[38px] px-[16px] flex flex-col gap-[10px] shadow-lg transition-all duration-500 cursor-pointer mb-10 mt-10

                    ${isActive
                      ? "border-2 border-[#c63f9d] scale-105 z-10"
                      : "opacity-60 scale-95"
                    }
                  `}
                  style={{ width: `${CARD_WIDTH}px`, height: '287px' }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-full border border-[#c63f9d]/50 shrink-0"
                    style={{ width: '58px', height: '58px', borderWidth: '1px' }}
                  >
                    <img src={service.icon} alt={service.title} className="h-6 w-6" />
                  </div>

                  <h3
                    className={`${isActive ? "text-[#c63f9d]" : "text-[#172136]"}`}
                    style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px', lineHeight: '137%', letterSpacing: '0%' }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed text-[#4b5263]"
                    style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '162%', letterSpacing: '0%' }}
                  >
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
              className="rounded-2xl bg-white pt-[38px] pb-[38px] px-[16px] flex flex-col gap-[10px] shadow-md border border-gray-100"
              style={{ height: '287px' }}
            >
              <div
                className="flex items-center justify-center rounded-full border border-[#c63f9d]/50 shrink-0"
                style={{ width: '58px', height: '58px', borderWidth: '1px' }}
              >
                <img src={service.icon} alt={service.title} className="h-6 w-6" />
              </div>

              <h3
                className="text-[#172136]"
                style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px', lineHeight: '137%', letterSpacing: '0%' }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed text-[#4b5263]"
                style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '162%', letterSpacing: '0%' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER (Desktop only) */}
        <div className="hidden lg:flex absolute bottom-12 left-0 right-0 items-center justify-between px-20">

          <div className="w-40" />

          {/* DOTS */}
          <div className="flex gap-4 items-center">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx + total)}
                className={`rounded-full transition-all duration-300 border-[#c63f9d]
                  ${idx === displayIndex ? "bg-[#c63f9d] h-[18px] w-[18px]" : "bg-transparent border h-[13px] w-[13px]"}
                `}
                style={{ borderWidth: '1px' }}
              />
            ))}
          </div>

          {/* PROGRESS */}
          <div className="flex items-center gap-3">
            <span
              style={{
                color: '#A0AEC0',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '25px',
                letterSpacing: '0%'
              }}
            >
              {String(displayIndex + 1).padStart(2, "0")}
            </span>

            <div className="relative h-[4px] w-32 bg-[#e1e3f0] rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full transition-all duration-500"
                style={{
                  width: `${((displayIndex + 1) / total) * 100}%`,
                  background: '#57007B'
                }}
              />
            </div>

            <span
              className="font-bold"
              style={{ color: '#57007B', fontFamily: 'Inter', fontSize: '16px' }}
            >
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
