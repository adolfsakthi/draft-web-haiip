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
    a: "I’m comfortable leading full lifecycle projects as well as collaborating within cross-functional teams.",
  },
  {
    q: "Are you available for freelance or full-time roles?",
    a: "Yes, I’m open to freelance, contract, and full-time opportunities depending on project scope and alignment.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="flex justify-center bg-[#fbfaff] py-24">
      <div className="w-[1440px]">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-20">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-5xl font-bold text-black" style={{ fontFamily: 'Zen Dots, sans-serif' }}>
              FAQ's
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="relative pl-6 max-w-[320px]">
            <div className="absolute left-0 top-1 h-[85%] w-[3px] bg-[#cf3d9c]" />
            <p className="text-[#b0398d] text-lg italic leading-relaxed">
              Your questions, our answers
            </p>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-2">

          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx}>

                {/* OPEN FAQ */}
                {isOpen ? (
                  <div className="bg-white rounded-2xl px-8 py-7 shadow-sm">

                    {/* QUESTION ROW */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-black">
                        {item.q}
                      </h3>
                      <button
                        onClick={() => setOpenIndex(null)}
                        className="text-2xl font-medium text-black"
                      >
                        ×
                      </button>
                    </div>

                    {/* ANSWER */}
                    <p className="mt-6 text-[#444] text-base leading-relaxed max-w-[1100px]">
                      {item.a}
                    </p>
                  </div>
                ) : (
                  /* CLOSED FAQ */
                  <div
                    className="flex justify-between items-center py-6 border-b border-black cursor-pointer"
                    onClick={() => setOpenIndex(idx)}
                  >
                    <h3 className="text-xl text-black">
                      {item.q}
                    </h3>
                    <span className="text-2xl font-medium text-black">+</span>
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
