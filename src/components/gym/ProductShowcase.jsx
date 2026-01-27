import React from 'react';

import Rect1 from '../../assets/images/gym/Rectangle1.png';
import Rect2 from '../../assets/images/gym/Rectangle2.png';
import Rect3 from '../../assets/images/gym/Rectangle3.png';
import Rect4 from '../../assets/images/gym/Rectangle4.png';
import Rect5 from '../../assets/images/gym/Rectangle5.png';
import Rect6 from '../../assets/images/gym/Rectangle6.png';
import Person1 from '../../assets/images/gym/rectangle-person1.png';
import Person2 from '../../assets/images/gym/rectangle-person2.png';
import Person3 from '../../assets/images/gym/rectangle-person3.png';
import Person4 from '../../assets/images/gym/rectangle-person4.png';

const persons = [Person2, Person3, Person1, Person4];

const sections = [
  {
    title: 'Smart Front Desk Control',
    desc: 'Handle member flow, billing updates, and daily activity from a single, distraction-free workspace. Built to help front desk staff stay fast, accurate, and in control during peak gym hours.',
    image: Rect1,
  },
  {
    title: 'Enquiry Management Workspace',
    desc: 'Capture, review, and organize all member enquiries in one structured flow. From first contact to follow-up, this page helps your team respond faster and track intent clearly.',
    image: Rect2,
  },
  {
    title: 'Expense Tracking & Control',
    desc: 'Record, categorize, and review daily gym expenses with clarity.This page helps you maintain accurate cost records, monitor spending patterns, and keep financial operations organized without manual effort',
    image: Rect3,
  },
  {
    title: 'Package & Pricing Configuration',
    desc: 'Create and manage gym packages with clear pricing, durations, and rules.Easily apply branch-specific discounts and validity to keep memberships aligned and scalable.',
    image: Rect4,
  },
  {
    title: 'Branch Purchase Management',
    desc: 'Record and track purchase orders, vendors, and item details for each branch in one place. Stay organized with clear purchase records that support accurate inventory.',
    image: Rect5,
  },
  {
    title: 'Centralized Reports Hub',
    desc: 'Generate detailed reports for enquiries, members, logins, and packages using flexible filters.Gain clear insights across branches and time periods to support smarter decisions.',
    image: Rect6,
  },
  {
    title: 'Branch Profile Setup',
    desc: 'Maintain complete branch identity, contact, and ownership details in one structured form. Ensure accurate records for smooth operations, reporting.',
    image: Rect5,
  },
];

export const ProductShowcase = () => {
  return (
    <section className="flex justify-center" style={{ backgroundColor: 'rgba(230, 255, 242, 1)' }}>
      <div
        style={{
          width: '1442.89px',
          height: '5251px',
          padding: '80px',
          boxSizing: 'border-box',
        }}
      >
        {/* Heading */}
        <div className="relative flex flex-col items-center mb-20">
          <h2
            className="text-[#000000] font-zen text-center"
            style={{
              fontFamily: '"Zen Dots", sans-serif',
              fontWeight: 400,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
              width: '579px',
              height: '58px',
            }}
          >
            What's about GYM?
          </h2>

          {/* Badge */}
          <div
            className="absolute"
            style={{
              left: '50%',
              marginLeft: '200px',
              top: '-28px', // moved further down by 8px
              transform: 'rotate(9.64deg)',
              backgroundColor: 'rgba(0, 182, 42, 1)',
              width: '173.81px',
              height: '24.18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '30px',
              position: 'absolute',
            }}
          >
            <span
              style={{
                color: 'white',
                fontSize: '12px', // increased font size
                fontWeight: '450',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              YOUR IDEA STARTS HERE
            </span>
          </div>
        </div>

        <div className="flex flex-col" style={{ gap: '80px' }}>
          {sections.map((section, index) => {
            const isReverse = index % 2 !== 0;
            const personImage = persons[index % persons.length];

            return (
              <div
                key={index}
                className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'}`}
                style={{
                  width: '1280px',
                  height: '639px',
                  gap: '24px',
                }}
              >
                {/* IMAGE BLOCK - 978px */}
                <div
                  style={{
                    width: '978px',
                    height: '639px',
                    borderRadius: '48px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    display: 'flex',
                  }}
                >
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </div>

                {/* TEXT BLOCK - 278px */}
                <div
                  style={{
                    width: '278px',
                    height: '639px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                  }}
                >
                  {/* Top Content */}
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#00B62A] mb-6 flex items-start gap-2">
                      <img src="/assets/images/visitor/thumb.png" alt="illustration" className="w-7" />
                      {section.title}
                    </h3>

                    {/* Dashed Quote Box */}
                    <div
                      className="relative mb-8"
                      style={{
                        border: '2px solid #00B62A',
                        borderRadius: '15px',
                        padding: '24px',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: '#00B62A',
                        borderImage: 'none',
                      }}
                    >
                      {/* Quote Icon */}
                      <div
                        className="absolute"
                        style={{
                          width: '34px',
                          height: '34px',
                          top: '-5px',
                          left: '30px',
                          backgroundColor: 'rgba(238, 255, 242, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          style={{
                            color: 'rgba(0, 182, 42, 1)',
                            fontSize: '80px',
                            lineHeight: '1',
                            fontFamily: 'serif',
                            position: 'relative',
                            top: '5px',
                          }}
                        >
                          “
                        </span>
                      </div>

                      {/* Text */}
                      <p
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          fontStyle: 'italic',
                          fontSize: '16px',
                          lineHeight: '26px',
                          color: 'rgba(71, 85, 105, 1)',
                          margin: 0,
                        }}
                      >
                        {section.desc}
                      </p>
                    </div>

                    {/* ✅ Explore Button (AUTO ALIGN based on dashed box side) */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: isReverse ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <button
                        className="
                          bg-[#00B62A]
                          text-white
                          font-extrabold
                          tracking-wider
                          px-6
                          py-2.5
                          rounded-lg
                          border-2
                          border-black
                          shadow-[3px_3px_0px_#000]
                          hover:translate-x-[1px]
                          hover:translate-y-[1px]
                          hover:shadow-[2px_2px_0px_#000]
                          transition-all
                        "
                      >
                        EXPLORE
                      </button>
                    </div>
                  </div>

                  {/* PERSON ILLUSTRATION (Bottom) */}
                  <div className="flex justify-center -mt-10">
                    <img
                      src={personImage}
                      alt="Illustration"
                      style={{
                        width: '183px',
                        height: '270px',
                        objectFit: 'contain',
                        ...(section.title === 'Branch Purchase Management' ? { transform: 'scaleX(-1)' } : {}),
                        ...(index === 0 ? { transform: 'scaleX(-1)' } : {}),
                        ...(index === 2 ? { marginTop: '2rem' } : {}),
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
