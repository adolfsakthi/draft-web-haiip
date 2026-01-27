import React from "react";

import icon1 from "../../assets/images/gym/1.png";
import icon2 from "../../assets/images/gym/2.png";
import icon3 from "../../assets/images/gym/3.png";
import icon4 from "../../assets/images/gym/4.png";
import icon5 from "../../assets/images/gym/5.png";
import icon6 from "../../assets/images/gym/6.png";
import icon7 from "../../assets/images/gym/7.png";
import icon8 from "../../assets/images/gym/8.png";

const features = [
    {
        title: "Members & Check-ins",
        desc: "Track member profiles, daily check-ins, attendance history, and membership status from one place.",
        icon: icon1,
    },
    {
        title: "Smart Class Scheduler",
        desc: "Manage workout schedules, trainer sessions, and batch timings with easy rescheduling support.",
        icon: icon2,
    },
    {
        title: "Billing & Payments",
        desc: "Handle membership fees, renewals, discounts, and payment history with secure, organized billing.",
        icon: icon3,
    },
    {
        title: "Packages & Pricing",
        desc: "Create flexible membership plans with custom durations, pricing rules, and branch-wise offers.",
        icon: icon4,
    },
    {
        title: "Enquiries & Follow-ups",
        desc: "Capture walk-in and online enquiries, track follow-ups, and convert leads into active members.",
        icon: icon5,
    },
    {
        title: "Reports & Analytics",
        desc: "Generate detailed reports on members, revenue, attendance, and performance for better decisions.",
        icon: icon6,
    },
    {
        title: "Staff Management",
        desc: "Manage multiple branches, trainers, and front desk staff with role-based access control.",
        icon: icon7,
    },
    {
        title: "Notifications",
        desc: "Send alerts for renewals, pending payments, expiring packages, and important updates.",
        icon: icon8,
    },
];

export const FeatureIcons = () => {
    return (
        <section className="w-full bg-white flex justify-center">
            <div
                className="relative bg-white"
                style={{
                    width: '1441px',
                    paddingTop: '40px',
                    paddingBottom: '80px',
                    paddingLeft: '79px',
                    paddingRight: '79px',
                }}
            >

                {/* GRID CONTAINER */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center content-center">

                    {/* VERTICAL DIVIDERS */}
                    {/* Centered between columns. There are 4 columns, so 3 dividers. */}
                    {/* Grid is ~1280px wide. Dividers need to be placed centrally. */}
                    {/* Using percentage based positioning as per previous logic but strict height */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/4 divider-vertical" />
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 divider-vertical" />
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-3/4 divider-vertical" />

                    {/* HORIZONTAL DIVIDER */}
                    {/* Centered vertically. Width 1190px. */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 divider-horizontal" />

                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center justify-center"
                            style={{
                                width: '320px',
                                height: '211.88px', // Half of 423.76 roughly to fit the combined height logic? 
                                // Or does user mean the PAIR is that height? 
                                // "Two box size... combined size ... height: 423.76". 
                                // So one items is half of that approx? Let's assume auto for now but constraint the width.
                                // Actually user said "strictly do this", implying the CONTAINER of the two items needs to vary?
                                // Use min-height to ensure spacing.
                            }}
                        >
                            {/* ICON */}
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-10 h-10 mb-6"
                            />

                            {/* TITLE */}
                            <h3
                                className="text-[#0F172A] mb-3"
                                style={{
                                    width: '275px',
                                    height: '36px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontStyle: 'normal', // 'Medium' isn't a valid font-style, it's a weight. CSS uses 'normal' or 'italic'.
                                    fontSize: '24px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    display: 'flex', // To ensure vertical alignment works if needed, or just block
                                    alignItems: 'center', // for vertical align center behavior
                                    justifyContent: 'center', // for text align center behavior
                                }}
                            >
                                {feature.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[16px] leading-[24px] font-normal text-[#718096] max-w-[296px] font-poppins">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
