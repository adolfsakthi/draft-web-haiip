import React, { useState } from "react";

const faqs = [
  {
    q: "What kind of projects do you take on",
    a: "I design user experiences for mobile apps, web dashboards, and B2B SaaS products. I focus on blending user needs with business goals to create intuitive, engaging, and scalable digital products.",
  },
  {
    q: "Do you work with startups or enterprise clients?",
    a: "I collaborate with both startups and enterprise clients, adapting my approach based on scale, goals, and technical requirements.",
  },
  {
    q: "What tools are central to your design process?",
    a: "Figma, FigJam, Adobe XD, Framer, and usability testing tools form the core of my design workflow.",
  },
  {
    q: "How do you measure your design impact?",
    a: "Through usability metrics, user feedback, business KPIs, conversion improvements, and retention rates.",
  },
  {
    q: "Can you lead a project end-to-end or work within a team?",
    a: "I'm comfortable leading full lifecycle projects as well as collaborating within cross-functional teams.",
  },
  {
    q: "Are you available for freelance or full-time roles?",
    a: "Yes, I'm open to freelance, contract, and full-time opportunities depending on project scope and alignment.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative flex justify-center bg-[#fbfaff] py-24 overflow-hidden">
      <div className="relative w-full max-w-[1440px] px-6 lg:px-20">

        {/* HEADER */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mb-16 gap-8">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
            />
            <h2
              className="text-4xl lg:text-[56px] font-normal text-black"
              style={{ fontFamily: 'Zen Dots, sans-serif' }}
            >
              FAQ's
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="flex items-center gap-5">
            {/* Vertical Accent Line */}
            <div
              className="hidden md:block"
              style={{
                width: '1.5px',
                height: '32px',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)'
              }}
            />

            {/* Gradient Subtitle */}
            <p
              className="italic text-lg lg:text-2xl"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Your questions, our answers
            </p>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="w-full max-w-[1280px] mx-auto space-y-4">

          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx}>
                {isOpen ? (
                  /* OPEN FAQ */
                  <div
                    className="w-full bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-pink-50/50 p-6 md:p-12 transition-all duration-300"
                    style={{
                      borderRadius: '40px',
                      opacity: 1
                    }}
                  >
                    {/* QUESTION ROW */}
                    <div className="flex justify-between items-start mb-8">
                      <h3
                        className="text-lg md:text-2xl"
                        style={{
                          fontFamily: 'Poppins',
                          fontWeight: 500,
                          lineHeight: '1.2',
                          color: '#b91c7f'
                        }}
                      >
                        {item.q}
                      </h3>
                      <button
                        onClick={() => setOpenIndex(null)}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-pink-50 text-2xl font-light hover:bg-pink-100 transition-colors"
                        style={{ color: '#b91c7f' }}
                      >
                        ×
                      </button>
                    </div>

                    {/* ANSWER */}
                    <p
                      className="text-base md:text-lg"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        lineHeight: '1.8',
                        color: '#475569'
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ) : (
                  /* CLOSED FAQ */
                  <div
                    className="w-full flex justify-between items-center py-6 border-b border-gray-300 md:border-black/10 cursor-pointer hover:bg-gray-50/50 transition-all duration-300"
                    onClick={() => setOpenIndex(idx)}
                  >
                    <h3
                      className="text-lg md:text-2xl"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        color: '#000'
                      }}
                    >
                      {item.q}
                    </h3>
                    <span
                      className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-3xl font-light"
                      style={{ color: '#000' }}
                    >
                      +
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
