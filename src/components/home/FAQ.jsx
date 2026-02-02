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
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start mb-16 -mt-10 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4 lg:-ml-6">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2
              className="text-5xl font-normal text-black"
              style={{ fontFamily: 'Zen Dots, sans-serif' }}
            >
              FAQ's
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="relative flex max-w-2xl gap-5 mt-14 lg:ml-32">

            {/* Vertical Accent Line */}
            <div
              style={{
                width: '3px',
                height: '36px',
                opacity: 1,
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)'
              }}
            />

            {/* Gradient Subtitle */}
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
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
        <div className="space-y-0 mt-12">

          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx}>

                {/* OPEN FAQ */}
                {isOpen ? (
                  <div
                    style={{
                      width: '1280px',
                      padding: '8.83px 17.66px 17.66px 17.66px',
                      gap: '17.66px',
                      borderRadius: '17.66px',
                      backgroundColor: '#fff',
                      opacity: 1
                    }}
                  >

                    {/* QUESTION ROW */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        padding: '8.83px 0',
                        marginBottom: '17.66px'
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'Poppins',
                          fontWeight: 400,
                          fontSize: '24px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#000'
                        }}
                      >
                        {item.q}
                      </h3>
                      <button
                        onClick={() => setOpenIndex(null)}
                        style={{
                          width: '36.78px',
                          height: '36.78px',
                          opacity: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          fontSize: '24px',
                          color: '#000'
                        }}
                        className="hover:opacity-70 transition-opacity"
                      >
                        ×
                      </button>
                    </div>

                    {/* ANSWER */}
                    <p
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '20.91px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#444'
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ) : (
                  /* CLOSED FAQ */
                  <div
                    style={{
                      width: '1280px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '17.66px 0',
                      borderBottom: '0.74px solid #000',
                      cursor: 'pointer',
                      opacity: 1
                    }}
                    className="hover:opacity-70 transition-opacity"
                    onClick={() => setOpenIndex(idx)}
                  >
                    <h3
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#000'
                      }}
                    >
                      {item.q}
                    </h3>
                    <span
                      style={{
                        width: '36.78px',
                        height: '36.78px',
                        opacity: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        color: '#000'
                      }}
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
