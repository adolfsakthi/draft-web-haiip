import React from 'react';
import img14 from "../assets/images/about/img14.png";
import img16 from "../assets/images/about/img16.png";
import img18 from "../assets/images/about/img18.png";
import img19 from "../assets/images/about/img19.png";
import FounderSection from "../components/about/FounderSection";
import SoftwareSolutions from "../components/about/SoftwareSolutions";

const About = () => {
    return (
        <>
            {/* SECTION 1 : ABOUT HEZEE ACCESS */}
            <section className="relative bg-gradient-to-b from-[#f4f9ff] to-white py-32 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-10 tracking-wide">
                        ABOUT HEZEE ACCESS
                    </h1>

                    {/* Paragraphs */}
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                        HEZEE ACCESS IT INFRASTRUCTURE PVT LTD is a leading software
                        development company in India, delivering innovative, scalable, and
                        secure digital solutions for businesses across multiple industries.
                    </p>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                        We specialize in custom software development and business automation
                        systems that help organizations streamline operations, improve
                        productivity, and scale efficiently. Every solution we build is
                        designed with a strong focus on performance, usability, security,
                        and long-term growth.
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                        Our expertise spans across{" "}
                        <span className="font-semibold">
                            HRMS & Payroll Software, POS & KOT Billing Systems, Gym Management
                            Software, Hotel Management Software, Production Management
                            Software,
                        </span>{" "}
                        and custom web applications — tailored to meet{" "}
                        <span className="font-semibold text-purple-600">
                            real-world business needs.
                        </span>
                    </p>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-purple-400 rounded-tl-3xl"></div>
                <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-purple-400 rounded-tr-3xl"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-purple-400 rounded-bl-3xl"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-purple-400 rounded-br-3xl"></div>
            </section>


            {/* SECTION 2 : OUR MISSION & VISION */}
            <section className="bg-[#050b1e] py-32">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed mb-14">
                            Our mission is simple: to provide the highest level of service,
                            integrity, and expertise in the digital solutions market. We are
                            committed to putting our clients first and ensuring that their
                            technology experience is smooth, successful, and future-ready.
                            Our core values of transparency, reliability, and customer-centricity
                            drive everything we do.
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To become a trusted digital transformation partner in India,
                            delivering innovative software solutions with a strong commitment
                            to quality, security, scalability, and long-term customer success.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src={img14}
                            alt="Mission and Vision"
                            className="w-full max-w-xl"
                        />
                    </div>

                </div>
            </section>

            {/* SECTION 3 : FOUNDER & LEADERSHIP */}
            <FounderSection />

            {/* SECTION 4 : OUR TEAM */}
            <section className="bg-white py-32">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
                        <h2 className="text-6xl font-extrabold flex items-center gap-3">
                            <span className="text-pink-500">✦</span> Our Team
                        </h2>

                        <div className="max-w-xl border-l-4 border-pink-500 pl-6 mt-6 lg:mt-0 text-pink-600 text-2xl italic">
                            Our success is driven by a skilled and dedicated team of professionals
                            who bring technical expertise, creativity, and operational excellence.
                        </div>
                    </div>

                    {/* ROW 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 items-center">
                        <div className="bg-gray-200 rounded-3xl p-10 h-full">
                            <h3 className="text-4xl font-bold mb-6">Director</h3>
                            <p className="text-gray-700 text-xl leading-relaxed mb-6">
                                Provides strategic direction and operational leadership, ensuring
                                business growth, quality standards, and customer satisfaction.
                            </p>
                            <p className="font-semibold text-lg">– Mrs. K. Aswini</p>
                        </div>

                        <img src={img16} className="rounded-3xl shadow-xl h-[420px] w-full object-cover" />

                        <div className="bg-gray-200 rounded-3xl p-10 h-full">
                            <h3 className="text-4xl font-bold mb-6">Admin</h3>
                            <p className="text-gray-700 text-xl leading-relaxed mb-6">
                                Manages administrative operations, internal coordination, and
                                organizational support.
                            </p>
                            <p className="font-semibold text-lg">– Mr. Ramesh Kumar</p>
                        </div>

                        <img src={img16} className="rounded-3xl shadow-xl h-[420px] w-full object-cover" />
                    </div>

                    {/* ROW 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 items-center">
                        <div className="bg-gray-200 rounded-3xl p-10 h-full">
                            <h3 className="text-4xl font-bold mb-6">Operations Manager</h3>
                            <p className="text-gray-700 text-xl leading-relaxed mb-6">
                                Oversees daily operations and ensures service excellence across departments.
                            </p>
                            <p className="font-semibold text-lg">– Name Here</p>
                        </div>

                        <img src={img16} className="rounded-3xl shadow-xl h-[420px] w-full object-cover" />

                        <div className="bg-gray-200 rounded-3xl p-10 h-full">
                            <h3 className="text-4xl font-bold mb-6">HR Manager</h3>
                            <p className="text-gray-700 text-xl leading-relaxed mb-6">
                                Handles recruitment, employee engagement, and organizational culture.
                            </p>
                            <p className="font-semibold text-lg">– Name Here</p>
                        </div>

                        <img src={img16} className="rounded-3xl shadow-xl h-[420px] w-full object-cover" />
                    </div>

                    {/* ROW 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
                        <div className="bg-gray-200 rounded-3xl p-10 h-full">
                            <h3 className="text-4xl font-bold mb-6">Technical Lead</h3>
                            <p className="text-gray-700 text-xl leading-relaxed mb-6">
                                Leads system architecture, performance optimization, and product quality.
                            </p>
                            <p className="font-semibold text-lg">– Name Here</p>
                        </div>

                        <img src={img16} className="rounded-3xl shadow-xl h-[420px] w-full object-cover" />

                        <div className="bg-gray-200 rounded-3xl p-10 h-full">
                            <h3 className="text-4xl font-bold mb-6">Support Manager</h3>
                            <p className="text-gray-700 text-xl leading-relaxed mb-6">
                                Ensures client success, issue resolution, and long-term relationships.
                            </p>
                            <p className="font-semibold text-lg">– Name Here</p>
                        </div>

                        <img src={img16} className="rounded-3xl shadow-xl h-[420px] w-full object-cover" />
                    </div>

                </div>
            </section>

            {/* SECTION : OUR SOFTWARE SOLUTIONS */}
            <SoftwareSolutions />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative bg-[#050b1f] rounded-[48px] px-20 py-20 overflow-hidden">

                        {/* Left Visuals */}
                        {/* First Image */}
                        <div className="absolute left-2 top-[45%] -translate-y-1/2">
                            <img src={img18} alt="Chat Icon" className="w-72" />
                        </div>

                        {/* Second Image */}
                        <div className="absolute left-2 top-[85%] -translate-y-1/2">
                            <img src={img19} alt="Abstract Shape" className="w-72" />
                        </div>


                        {/* Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                            <div>
                                <h2 className="text-white text-6xl font-semibold leading-tight flex items-center gap-3">
                                    <span className="text-pink-400">✦</span> Why Choose Us?
                                </h2>
                            </div>

                            <div className="space-y-10 text-white">
                                <div>
                                    <h3 className="text-3xl font-bold">15+ Years Experience</h3>
                                    <p className="text-lg text-gray-300 mt-2">
                                        Proven track record with over a decade an a half of delivering
                                        successful software solutions across various industries.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">Skilled In-House Team</h3>
                                    <p className="text-lg text-gray-300 mt-2">
                                        Dedicated team of experienced developers, designers, and project
                                        managers working collaboratively on your projects.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">Secure Cloud Platforms</h3>
                                    <p className="text-lg text-gray-300 mt-2">
                                        Scalable, secure cloud-based solutions that grow with your
                                        business and ensure data protection.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">Customizable Solutions</h3>
                                    <p className="text-lg text-gray-300 mt-2">
                                        Industry-specific solutions tailored to meet your unique business
                                        requirements and operational workflows.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">Dedicated Support</h3>
                                    <p className="text-lg text-gray-300 mt-2">
                                        Comprehensive support and maintenance services to ensure your
                                        software performs optimally at all times.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">Cost-Effective Value</h3>
                                    <p className="text-lg text-gray-300 mt-2">
                                        Competitive pricing with exceptional value, delivering high-quality
                                        solutions within your budget constraints.
                                    </p>
                                </div>
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
