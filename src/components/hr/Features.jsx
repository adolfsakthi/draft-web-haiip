import React from 'react';
import a1 from '../../assets/images/hr/a1.png';
import a2 from '../../assets/images/hr/a2.png';
import a3 from '../../assets/images/hr/a3.png';
import a4 from '../../assets/images/hr/a4.png';
import a5 from '../../assets/images/hr/a5.png';
import a6 from '../../assets/images/hr/a6.png';
import a7 from '../../assets/images/hr/a7.png';
import a8 from '../../assets/images/hr/a8.png';

const features = [
    {
        title: "Attendance Dashboard",
        desc: "Easily monitor real-time attendance with insights on present staff, absentees, late entries, and device status.",
        icon: a1,
    },
    {
        title: "Live Attendance Logs",
        desc: "Track every punch-in and punch-out with detailed employee logs for complete visibility and transparency.",
        icon: a2,
    },
    {
        title: "Attendance Records",
        desc: "View complete attendance history with quick filters for date, department, outlet, and employee details.",
        icon: a3,
    },
    {
        title: "Leave Management",
        desc: "Streamline leave requests, approvals, balances, and policies with a fully automated leave workflow.",
        icon: a4,
    },
    {
        title: "Devices & Punch Tracking",
        desc: "Connect biometric or app-based punch devices to sync attendance instantly across all locations.",
        icon: a5,
    },
    {
        title: "Employee Management",
        desc: "Store and manage employee profiles, roles, departments, and documentation effortlessly.",
        icon: a6,
    },
    {
        title: "Reports & Analytics",
        desc: "Generate attendance, leave, late-coming, and consolidated HR reports instantly for smarter decision-making.",
        icon: a7,
    },
    {
        title: "Duty Roster",
        desc: "Create and manage employee shift schedules with simple drag-and-drop controls and instant updates.",
        icon: a8,
    },
];

export default function Features() {
    return (
        <section className="w-full bg-[#F0F1F5] py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-md px-8 py-12 text-center shadow-sm border
                ${index === 0
                                    ? "border-[#94A3B8] shadow-md"
                                    : "border-[#E5E7EB]"
                                }`}
                        >
                            <div className="flex justify-center mb-6">
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="w-12 h-12"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
                                {item.title}
                            </h3>

                            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-[260px] mx-auto">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
