import React from 'react';
import img14 from "../assets/images/about/img14.png";
import img16 from "../assets/images/about/img16.png";
import img18 from "../assets/images/about/img18.png";
import img19 from "../assets/images/about/img19.png";
import mark from "../assets/images/about/Mark.png";
import elementImg from "../assets/images/about/element.png"; // Import element
import FounderSection from "../components/about/FounderSection";
import TeamSection from "../components/about/TeamSection";
import SoftwareSolutions from "../components/about/SoftwareSolutions";
import underline1 from "../assets/images/gym/underline1.png";

const About = () => {
    return (
        <>
            {/* SECTION 1 : ABOUT HEZEE ACCESS */}
            {/* SECTION 1 : ABOUT HEZEE ACCESS */}
            <section
                className="flex justify-center overflow-hidden w-full relative"
                style={{
                    background: 'linear-gradient(180deg, #D9ECFF -136.56%, #FFFFFF 100%)' // Moved to section for full width
                }}
            >
                <div
                    className="relative flex flex-col items-center pt-[80px]"
                    style={{
                        width: '100%',
                        maxWidth: '1440px', // Constrain content width
                        height: '720px',
                        padding: '80px',
                        gap: '10px',
                        boxSizing: 'border-box',
                        // background removed from here
                    }}
                >
                    {/* Top Left Corner */}
                    <div className="absolute top-[30px] left-[30px] w-[80px] h-[80px] border-t-2 border-l-2 border-[#6d28d9] rounded-tl-[30px]" />
                    {/* Top Right Corner */}
                    <div className="absolute top-[30px] right-[30px] w-[80px] h-[80px] border-t-2 border-r-2 border-[#6d28d9] rounded-tr-[30px]" />
                    {/* Bottom Left Corner */}
                    <div className="absolute bottom-[30px] left-[30px] w-[80px] h-[80px] border-b-2 border-l-2 border-[#6d28d9] rounded-bl-[30px]" />
                    {/* Bottom Right Corner */}
                    <div className="absolute bottom-[30px] right-[30px] w-[80px] h-[80px] border-b-2 border-r-2 border-[#6d28d9] rounded-br-[30px]" />

                    {/* Heading */}
                    <div
                        className="flex items-center justify-center mb-6"
                        style={{ width: '1050px', height: '70px' }}
                    >
                        <h1
                            className="text-center"
                            style={{
                                fontFamily: '"Zen Dots", sans-serif',
                                fontWeight: 400,
                                fontSize: '60px',
                                lineHeight: '117%',
                                color: 'rgba(15, 23, 42, 1)',
                                textTransform: 'uppercase',
                                margin: 0,
                            }}
                        >
                            ABOUT HEZEE ACCESS
                        </h1>
                    </div>

                    {/* Body Text Container */}
                    <div className="flex flex-col items-center text-center space-y-6 max-w-[1050px]">
                        <p
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: 'rgba(71, 85, 105, 1)',
                                margin: 0,
                            }}
                        >
                            HEZEE ACCESS IT INFRASTRUCTURE PVT LTD is a leading software development company in India, delivering innovative, scalable, and secure digital solutions for businesses across multiple industries.
                        </p>

                        <p
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: 'rgba(71, 85, 105, 1)',
                                margin: 0,
                            }}
                        >
                            We specialize in custom software development and business automation systems that help organizations streamline operations, improve productivity, and scale efficiently. Every solution we build is designed with a strong focus on performance, usability, security, and long-term growth.
                        </p>

                        {/* Highlighted Text Wrapper */}
                        <div className="relative flex flex-col items-center">
                            <p
                                className="relative z-10"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '36px',
                                    color: 'rgba(71, 85, 105, 1)',
                                    margin: 0,
                                }}
                            >
                                Our expertise spans across <span style={{ fontWeight: 500 }}>HRMS & Payroll Software, POS & KOT Billing Systems, Gym Management Software, Hotel<br className="hidden md:block" /> Management Software, Production Management Software, and custom web applications—tailored to meet<br className="hidden md:block" /> real-world business needs.</span>
                            </p>

                            {/* Decorative Underlines Container */}
                            <div
                                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                style={{ zIndex: 0 }}
                            >
                                {/* First Line Underline - Width: 788px */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: '788px',
                                        height: '6px',
                                        backgroundColor: '#FF57E3', // Using a bright pink close to the highlighter look
                                        opacity: 1,
                                        left: '50%',
                                        transform: 'translateX(-34%)', // Shift right to better align with "HRMS" end
                                        top: '28px', // Under first line
                                    }}
                                />

                                {/* Second Line Underline - Width: 952px */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: '952px',
                                        height: '6px',
                                        backgroundColor: '#FF57E3',
                                        opacity: 1,
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Centered
                                        top: '64px', // Under second line
                                    }}
                                />

                                {/* Third Line Underline - Width: 229px */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: '229px',
                                        height: '6px',
                                        backgroundColor: '#FF57E3',
                                        opacity: 1,
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Centered
                                        top: '100px', // Under third line
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* SECTION 2 : OUR MISSION & VISION */}
            <section
                className="flex justify-center w-full relative" // Added relative here
                style={{ backgroundColor: 'rgba(3, 9, 26, 1)' }} // Exact color from Figma
            >
                <div
                    className="flex flex-row items-center relative" // Added relative for absolute child
                    style={{
                        width: '1440px',
                        height: '682px', // Fixed height from Figma
                        padding: '80px 0px 80px 80px', // Removed right padding (was 80px) to let image hit the edge
                        // gap: '114px',    // Gap from Figma
                        boxSizing: 'border-box'
                    }}
                >

                    {/* Left Content */}
                    <div className="flex flex-col justify-center text-white relative z-10">
                        {/* Our Mission Heading */}
                        <h2
                            style={{
                                fontFamily: '"Zen Dots", sans-serif',
                                fontWeight: 400,
                                fontSize: '60px',
                                lineHeight: '117%',
                                margin: 0,
                                marginBottom: '20px',
                                width: '628px'
                            }}
                        >
                            Our Mission
                        </h2>

                        {/* Our Mission Text */}
                        <p
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: 'rgba(255, 255, 255, 0.7)',
                                width: '608px',
                                marginBottom: '40px'
                            }}
                        >
                            Our mission is simple: to provide the highest level of service,
                            integrity, and expertise in the real estate market. We are committed
                            to putting our clients first and ensuring that their real estate
                            experience is smooth, successful, and enjoyable. Our core values of
                            transparency, honesty, and customer-centricity drive everything
                            we do.
                        </p>

                        {/* Our Vision Heading */}
                        <h2
                            style={{
                                fontFamily: '"Zen Dots", sans-serif',
                                fontWeight: 400,
                                fontSize: '60px',
                                lineHeight: '117%',
                                margin: 0,
                                marginBottom: '20px',
                                width: '628px'
                            }}
                        >
                            Our Vision
                        </h2>

                        {/* Our Vision Text */}
                        <p
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '30px',
                                color: 'rgba(255, 255, 255, 0.7)',
                                width: '608px',
                                margin: 0
                            }}
                        >
                            To become a trusted digital transformation partner in India,
                            delivering innovative software solutions with a strong commitment
                            to quality, reliability, and customer success.
                        </p>
                    </div>
                    {/* Image removed from here */}
                </div>

                {/* Right Image - Moved to Section Level for Screen Edge Alignment */}
                <div
                    className="absolute right-0 top-0 h-full flex items-center justify-end"
                    style={{
                        width: '50%',
                        pointerEvents: 'none',
                        zIndex: 0
                    }}
                >
                    <img
                        src={img14}
                        alt="Mission and Vision"
                        style={{
                            height: '100%',
                            width: 'auto',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            objectPosition: 'right center' // Force image to right side of its container
                        }}
                    />
                </div>

            </section>

            {/* SECTION 3 : FOUNDER & LEADERSHIP */}
            <FounderSection />

            {/* SECTION 4 : OUR TEAM */}
            <TeamSection />
            {/* SECTION : OUR SOFTWARE SOLUTIONS */}
            <SoftwareSolutions />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-16 md:py-32 bg-white relative">

                {/* Blue Cross Decoration - Left Screen */}
                <div className="hidden lg:block absolute left-0 top-0 pointer-events-none z-10">
                    <img
                        src={elementImg}
                        alt="Decoration"
                        style={{
                            width: '250px',
                            height: '250px',
                            transform: 'rotate(0deg)',
                            opacity: 1
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative">

                    <div className="relative z-10 bg-[rgba(3,9,26,1)] rounded-2xl md:rounded-[48px] px-6 py-10 md:px-20 md:py-20 overflow-hidden">

                        {/* Left Visuals */}
                        {/* First Image - Chat Icon */}
                        <div className="hidden lg:block absolute left-[50px] top-[28%] pointer-events-none">
                            <img
                                src={img18}
                                alt="Chat Icon"
                                style={{
                                    width: '350px',
                                    height: '352px',
                                    transform: 'rotate(-6.39deg)',
                                    opacity: 1
                                }}
                            />
                        </div>

                        {/* Second Image - Mark (Replaces img19) */}
                        <div className="hidden lg:block absolute left-0 bottom-[-50px] pointer-events-none">
                            <img
                                src={mark}
                                alt="Mark Shape"
                                style={{
                                    width: '250px',
                                    height: '250px',
                                    transform: 'rotate(-24.13deg)',
                                    opacity: 1
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                            <div>
                                <h2
                                    className="text-white flex items-center gap-3"
                                    style={{
                                        fontFamily: '"Zen Dots", sans-serif',
                                        fontWeight: 400,
                                        fontSize: '50px',
                                        lineHeight: '60px',
                                        letterSpacing: '0%'
                                    }}
                                >
                                    <span className="text-pink-400">✦</span> Why Choose <br /> Us?
                                </h2>
                            </div>

                            <div className="space-y-10 text-white">
                                {[
                                    { title: "15+ Years Experience", desc: "Proven track record with over a decade an a half of delivering successful software solutions across various industries." },
                                    { title: "Skilled In-House Team", desc: "Dedicated team of experienced developers, designers, and project managers working collaboratively on your projects." },
                                    { title: "Secure Cloud Platforms", desc: "Scalable, secure cloud-based solutions that grow with your business and ensure data protection." },
                                    { title: "Customizable Solutions", desc: "Industry-specific solutions tailored to meet your unique business requirements and operational workflows." },
                                    { title: "Dedicated Support", desc: "Comprehensive support and maintenance services to ensure your software performs optimally at all times." },
                                    { title: "Cost-Effective Value", desc: "Competitive pricing with exceptional value, delivering high-quality solutions within your budget constraints." }
                                ].map((item, index) => (
                                    <div key={index}>
                                        <h3
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontWeight: 700,
                                                fontSize: '32px',
                                                lineHeight: '100%',
                                                letterSpacing: '0%'
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className="text-gray-300 mt-2"
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '18px',
                                                lineHeight: '30px',
                                                letterSpacing: '0%'
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16 text-center m-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Partner with HEZEE ACCESS for Smarter Business Software
                </h2>

                <p className="text-lg mb-6 max-w-3xl mx-auto">
                    We build secure, scalable, and user-friendly software solutions that help
                    businesses grow with confidence
                </p>

                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
                    Get a Free Demo
                </button>

                <p className="mt-3 text-sm underline cursor-pointer">
                    Talk to our experts today
                </p>
            </section>
        </>
    );
};

export default About;
