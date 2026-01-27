import React from 'react';
import Hero from '../components/hr/Hero';
import Features from '../components/hr/Features';
import Benefits from '../components/hr/Benefits';
import HRProductShowcase from '../components/hr/HRProductShowcase';
import CallToAction from '../components/hr/CallToAction';

// Images
import thumb from '../assets/images/hr/thumb.png';

// Dashboards (Large Images)
import img1 from '../assets/images/hr/1.png';
import img2 from '../assets/images/hr/2.png';
import img5 from '../assets/images/hr/5.png';
import img66 from '../assets/images/hr/66.png';
import img7 from '../assets/images/hr/7.png';
import img8 from '../assets/images/hr/8.png';
import img9 from '../assets/images/hr/9.png';
import img10 from '../assets/images/hr/10.png';

// Illustrations (Small Images)
import ill11 from '../assets/images/hr/11.png';
import ill44 from '../assets/images/hr/44.png';
import ill55 from '../assets/images/hr/55.png';
import ill6 from '../assets/images/hr/6.png';
import ill88 from '../assets/images/hr/88.png';
import ill99 from '../assets/images/hr/99.png';

// Special Full Width
import mobileImg from '../assets/images/hr/mobile.png';

const sections = [
    {
        title: "Complete Overview of <br /> Your Workforce Activity",
        quote: "Track present staff, absentees, late entries, and device status —all in one real-time dashboard.",
        image: img1,
        illustration: ill11,
        isReversed: false,
        isDashedBorder: true
    },
    {
        title: "Real-Time Attendance <br /> Logs for Total <br /> Transparency",
        quote: "Monitor every punch-in and punch-out instantly with detailed, searchable employee logs.",
        image: img2,
        illustration: ill44,
        isReversed: true,
        isDashedBorder: false
    },
    {
        title: "Access Any Employee’s <br /> Attendance in Seconds",
        quote: "Filter by date, department, <br /> or outlet to quickly view <br /> complete attendance <br /> histories.",
        image: img5,
        illustration: ill55,
        isReversed: false,
        isDashedBorder: false
    },
    {
        title: "Generate Smart HR <br /> Reports with a Single <br /> Click",
        quote: "Download attendance, <br /> leave, late-comer, and <br /> consolidated reports for <br /> accurate HR analysis.",
        image: img66,
        illustration: ill6,
        isReversed: true,
        isDashedBorder: false
    },
    {
        title: "Track Employee Outdoor <br /> Work Effortlessly",
        quote: "Record official outdoor <br /> duties with date, time, <br /> location, and purpose to <br /> maintain complete <br /> attendance accuracy.",
        image: img7,
        illustration: ill44, // Reused in source
        isReversed: false,
        isDashedBorder: false
    },
    {
        title: "Empower Employees <br /> with a Simple Self- <br /> Service Portal",
        quote: "Employees can apply for <br /> leave, view attendance <br /> check profiles, and manage <br /> their day-to-day HR tasks<br /> with ease.",
        image: img8,
        illustration: ill88,
        isReversed: true,
        isDashedBorder: false
    },
    {
        title: "A Simple Self-Service <br /> Portal for Every Employee",
        quote: "Employees can view their <br /> profile, job details, and <br /> personal information in one <br /> clean, easy-to-access<br /> dashboard.",
        image: img9,
        illustration: ill99,
        isReversed: false,
        isDashedBorder: false
    },
    {
        title: "Smart Payroll & <br /> Workforce Control",
        quote: "One HRMS to manage <br /> attendance, payroll, and <br /> workforce activity— <br /> accurately and in real time.",
        image: img10,
        illustration: ill44, // Reused in source
        isReversed: true,
        isDashedBorder: false,
        fullWidthImage: mobileImg
    }
];

export default function HRManagement() {
    return (
        <div className="bg-white">
            <Hero />
            <Features />

            {/* What's about HRMS? Heading Section */}
            <section className="bg-[#FDF3EA] pt-24 pb-8" id="about-hrms">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative text-center mb-10">
                        <h2
                            className="text-black text-center"
                            style={{
                                fontFamily: "Zen Dots, sans-serif", // Ensure font is loaded or fallback
                                fontWeight: 400,
                                fontSize: "clamp(32px, 5vw, 48px)", // Responsive
                                lineHeight: "100%",
                            }}
                        >
                            What's about HRMS?
                        </h2>

                        {/* Badge */}
                        <span className="hidden md:inline-block absolute -top-6 right-[20%] bg-[#FF6A1A] text-white text-xs font-semibold px-4 py-1 rounded-full rotate-[12deg] shadow">
                            YOUR IDEA STARTS HERE
                        </span>
                    </div>
                </div>
            </section>

            {sections.map((section, idx) => (
                <HRProductShowcase
                    key={idx}
                    {...section}
                    thumbIcon={thumb}
                />
            ))}

            <Benefits />
            <CallToAction />
        </div>
    );
}