import React from "react";
import founderImage from "../../assets/images/about/founder-image.png";
import vectorFan from "../../assets/images/about/Vector.png";
import polygon2 from "../../assets/images/about/Polygon_2.png";
import polygon3 from "../../assets/images/about/Polygon_3.png";

const FounderSection = () => {
    return (
        <section className="relative w-full bg-white py-[120px] overflow-hidden flex justify-center items-center">

            {/* 1. BLUE FAN VECTOR 
               Reduced size and positioned so the circular hub is visible in the top-left corner.
            */}
            <img
                src={vectorFan}
                alt="Decorative Fan"
                className="absolute pointer-events-none"
                style={{
                    width: "220px",  // Smaller size
                    height: "220px",
                    top: "-50px",    // Nudged to close bottom gap
                    left: "-50px",
                    zIndex: 0,
                    opacity: 0.9
                }}
            />

            {/* Main Content Wrapper */}
            <div className="relative w-full max-w-[1244px] flex items-center justify-between px-6">

                {/* 2. POLYGON ACCENTS (Inside wrapper for alignment) */}
                {/* Polygon 2: Overlaps Image (zIndex 20, further right) */}
                <img
                    src={polygon2}
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                        width: '110px',
                        height: 'auto',
                        left: '-20px', // Overlaps edge only
                        bottom: '0px', // Moved down further
                        zIndex: 20,
                        opacity: 0.8
                    }}
                />

                {/* Polygon 3: No Overlap (zIndex 10, furher left/down) */}
                <img
                    src={polygon3}
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                        width: '110px',
                        height: 'auto',
                        left: '-100px',  // Strictly clear of image
                        bottom: '-70px', // Moved down further
                        zIndex: 10,
                        opacity: 0.6
                    }}
                />

                {/* 3. SKEWED BACKGROUND BOX 
                   Creates the trapezoidal depth effect.
                */}
                <div
                    className="absolute rounded-[40px]"
                    style={{
                        width: "85%",
                        height: "520px",
                        right: "0",
                        backgroundColor: "#F9F9FF",
                        transform: "perspective(2000px) rotateY(-18deg)",
                        transformOrigin: "right center",
                        zIndex: 1,
                    }}
                />

                {/* 4. FOUNDER IMAGE 
                   Perspective adjusted to tilt toward the text.
                */}
                <div
                    className="relative"
                    style={{
                        width: "540px",
                        height: "460px",
                        zIndex: 10,
                        marginLeft: "20px",
                        filter: "drop-shadow(20px 20px 40px rgba(0,0,0,0.1))",
                        transform: "perspective(2000px) rotateY(15deg) rotateZ(-2deg)",
                    }}
                >
                    <img
                        src={founderImage}
                        alt="Mr. C. Karthik"
                        className="w-full h-full object-cover rounded-[40px]"
                    />
                </div>

                {/* 5. TEXT CONTENT */}
                <div
                    className="relative z-20 flex-1 pl-16"
                    style={{ maxWidth: "560px" }}
                >
                    <h2
                        className="uppercase tracking-tighter"
                        style={{
                            fontFamily: "'Zen Dots', sans-serif",
                            fontSize: "54px",
                            color: "#1E293B",
                            lineHeight: "0.95",
                            marginBottom: "15px"
                        }}
                    >
                        Founder <br />
                        <span className="text-[42px]">& Leadership</span>
                    </h2>

                    <div className="mt-8">
                        <p
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: "#64748B",
                                marginBottom: "30px"
                            }}
                        >
                            HEZEE ACCESS is founded and led by Mr. C. Karthik, a seasoned IT
                            professional with over 15 years of experience in software
                            development and enterprise solutions. With deep industry
                            knowledge and hands-on technical expertise, he has helped
                            businesses adopt digital systems that are scalable and reliable.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[2px] bg-[#4F46E5]"></div>
                            <p
                                className="font-bold"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "19px",
                                    color: "#4F46E5",
                                }}
                            >
                                Mr. C. Karthik — Founder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;