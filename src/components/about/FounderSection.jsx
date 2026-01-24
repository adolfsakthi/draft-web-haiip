import React from "react";
import img15 from "../../assets/images/about/img15.png";

const FounderSection = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden flex justify-center">
            {/* Main Content Container */}
            <div className="relative w-full max-w-6xl mx-auto px-6">

                {/* --- DECORATIONS --- */}

                {/* 1. Purple Sunburst (Top Left) */}
                <div className="absolute -top-10 -left-10 z-10 w-32 h-32 md:w-48 md:h-48 text-[#6b75ff] animate-spin-slow">
                    {/* Simplified sunburst shape using SVG */}
                    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                        <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" />
                        {/* Adding extra rays for "burst" effect if needed, but a star shape works as a base */}
                        {/* Let's try a more "bursty" path or multiple rotated rects */}
                    </svg>
                    {/* Better Sunburst using rotated rectangles for exact look */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-4 bg-[#6b75ff] absolute rotate-0"></div>
                        <div className="w-full h-4 bg-[#6b75ff] absolute rotate-45"></div>
                        <div className="w-full h-4 bg-[#6b75ff] absolute rotate-90"></div>
                        <div className="w-full h-4 bg-[#6b75ff] absolute rotate-[135deg]"></div>
                        {/* Specific design match: It's a half-burst. Let's just use a custom SVG for the specific corner accent. */}
                    </div>
                </div>

                {/* Re-doing Sunburst to match image: It's a quarter-sun in the corner */}
                <div className="absolute -top-16 -left-16 z-20">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 100L100 0M100 100L170.71 29.29M100 100L200 100M100 100L170.71 170.71M100 100L100 200M100 100L29.29 170.71M100 100L0 100M100 100L29.29 29.29" stroke="#6366f1" strokeWidth="20" />
                        {/* That was a wireframe sun. Let's do solid thick rays. */}
                    </svg>
                    {/* CSS-only sunburst for cleaner control */}
                    <div className="relative w-40 h-40 bg-[#6366f1] rounded-full hidden"></div>
                </div>

                {/* Correct Sunburst Implementation */}
                <div className="absolute -top-12 -left-20 z-10">
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90 90L90 10" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                        <path d="M90 90L146 34" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                        <path d="M90 90L170 90" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                        <path d="M90 90L146 146" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                        <path d="M90 90L90 170" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                        <path d="M90 90L34 146" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                        <path d="M90 90L10 90" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                        <path d="M90 90L34 34" stroke="#7c7fff" strokeWidth="18" strokeLinecap="round" />
                    </svg>
                </div>


                {/* Back Drop (Light Blue Shape) */}
                <div className="bg-[#f8faff] rounded-[50px] p-8 md:p-16 flex flex-col lg:flex-row items-center relative z-0 pl-16">

                    {/* LEFT: IMAGE SECTION */}
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start -ml-10 lg:-ml-20 mr-10">
                        {/* Image Container with Custom Shape (trapezoid-ish) */}
                        <div className="relative w-[320px] md:w-[400px] h-[350px] md:h-[450px]">

                            {/* The Image */}
                            <div className="absolute inset-0 rounded-[40px] overflow-hidden transform -rotate-2 bg-black shadow-2xl border-4 border-white"
                                style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)" }}>
                                {/* NOTE: Trying to replicate the slight perspective/skew from the image without breaking the image content */}
                                <img
                                    src={img15}
                                    alt="Mr. C. Karthik"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Wireframe Overlay (Bottom Left) */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 z-10 opacity-60">
                                <svg viewBox="0 0 100 100" fill="none" stroke="gray" strokeWidth="1">
                                    <path d="M0 100 L50 0 L100 100 Z" />
                                    <path d="M20 80 L80 80" />
                                    <line x1="10" y1="100" x2="30" y2="40" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT: CONTENT SECTION */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0 text-left relative z-10">

                        {/* Title */}
                        <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] leading-none mb-2">
                            Founder
                        </h2>
                        <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] leading-none mb-8">
                            & Leadership
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                            HEZEE ACCESS is founded and led by Mr. C. Karthik, a seasoned
                            IT professional with over 15 years of experience in software
                            development and enterprise solutions. With deep industry
                            knowledge and hands-on technical expertise, he has helped
                            businesses adopt digital systems that are scalable, reliable,
                            and aligned with real operational workflows. His leadership
                            philosophy emphasizes innovation, quality delivery, and long-
                            term customer relationships.
                        </p>

                        {/* Signature */}
                        <p className="text-[#5558ff] font-bold text-lg tracking-wide">
                            -Mr. C. Karthik — Founder
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderSection;
