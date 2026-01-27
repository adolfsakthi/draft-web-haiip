import React from "react";
// Importing assets based on exploration. img14-19 exist.
import img14 from "../../assets/images/about/img14.png";
import img15 from "../../assets/images/about/img15.png";
import img16 from "../../assets/images/about/img16.png";
import img17 from "../../assets/images/about/img17.png";
import img18 from "../../assets/images/about/img18.png";
import img19 from "../../assets/images/about/img19.png";
import vectorFan from "../../assets/images/about/Vector.png";

// Star Icon (SVG)
const StarIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="url(#star_gradient)" />
        <defs>
            <linearGradient id="star_gradient" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6" />
                <stop offset="1" stopColor="#9333EA" />
            </linearGradient>
        </defs>
    </svg>
);

const TextCard = ({ title, description, name }) => (
    <div className="bg-[#E5E5E5] rounded-[30px] p-8 flex flex-col justify-between h-[400px]">
        <div>
            <h3 className="text-3xl mb-6" style={{ fontFamily: "'Zen Dots', sans-serif", color: "#0F172A" }}>
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#475569]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {description}
            </p>
        </div>
        <p className="font-bold text-lg text-[#0F172A]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {name}
        </p>
    </div>
);

const ImageCard = ({ src }) => (
    <div className="rounded-[30px] overflow-hidden h-[400px]">
        <img src={src} alt="Team Member" className="w-full h-full object-cover grayscale" />
    </div>
);

const TeamSection = () => {
    // Data Structure matching the grid pattern: Text, Image, Text, Image...
    // The design shows:
    // Row 1: Text (Director) | Image | Text (Admin) | Image
    // Row 2: Text (Senior Dev) | Image | Text (Software Dev) | Image

    // We need mock data or placeholders.
    const row1 = [
        { type: "text", title: "Director", desc: "Provides strategic direction and operational leadership, ensuring business growth, quality standards, and customer satisfaction.", name: "-Mrs. K. Aswini" },
        { type: "image", src: img16 }, // Using img16 as placeholder for director image? Or img14? Let's use img16 based on "man with hat" appearing multiple times in screenshot, likely placeholder. I'll use distinct images if available.
        { type: "text", title: "Admin", desc: "Manages administrative operations, internal coordination, and organizational support to ensure smooth daily functioning.", name: "-Mr. Ramesh Kumar" },
        { type: "image", src: img16 },
    ];

    const row2 = [
        { type: "text", title: "Senior Software Developer", desc: "Leads application architecture and development, specializing in building scalable, high-performance software solutions.", name: "-Mr. Sakthi Kumar" },
        { type: "image", src: img16 },
        { type: "text", title: "Software Developer", desc: "Focused on application development, feature implementation, and system optimization across multiple software platforms.", name: "-Mr. Sri Sai Sarath" },
        { type: "image", src: img16 },
    ];

    // Row 3 (New)
    const row3 = [
        { type: "text", title: "UI/UX Designer", desc: "Creates intuitive, user-friendly interfaces with a strong focus on usability, accessibility, and user experience across all HEZEE ACCESS products.", name: "-Mr. Jaganathan" },
        { type: "image", src: img16 }, // Using remaining images
        { type: "text", title: "Frontend Developer", desc: "Builds fast, responsive, and reliable web interfaces with a strong focus on clean code, performance, and cross-browser compatibility across all HEZEE ACCESS products.", name: "-Ms. Pavi" },
        { type: "image", src: img16 },
    ];

    return (
        <section className="w-full bg-white py-20 px-4 md:px-10 flex flex-col items-center relative overflow-hidden">
            {/* Decorative Fan - Bottom Right */}
            <img
                src={vectorFan}
                alt=""
                className="absolute pointer-events-none z-0"
                style={{
                    width: "300px",
                    height: "300px",
                    bottom: "-90px",
                    right: "-90px",
                    transform: "rotate(180deg)",
                    opacity: 0.8
                }}
            />

            <div className="w-full max-w-[1244px] relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div className="flex items-center gap-4">
                        <StarIcon />
                        <h2 className="text-[50px] leading-tight uppercase" style={{ fontFamily: "'Zen Dots', sans-serif", color: "#0F172A" }}>
                            Our Team
                        </h2>
                    </div>

                    <div className="max-w-[600px] border-l-4 border-[#DB2777] pl-6 py-2">
                        <p className="text-[20px] italic font-medium" style={{
                            fontFamily: "'Poppins', sans-serif",
                            background: "linear-gradient(90deg, #F472B6 0%, #9333EA 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Our success is driven by a skilled and dedicated team of professionals who bring technical expertise, creativity, and operational excellence.
                        </p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Row 1 */}
                    {row1.map((item, idx) => (
                        <React.Fragment key={`r1-${idx}`}>
                            {item.type === "text" ? (
                                <TextCard title={item.title} description={item.desc} name={item.name} />
                            ) : (
                                <ImageCard src={item.src} />
                            )}
                        </React.Fragment>
                    ))}

                    {/* Row 2 */}
                    {row2.map((item, idx) => (
                        <React.Fragment key={`r2-${idx}`}>
                            {item.type === "text" ? (
                                <TextCard title={item.title} description={item.desc} name={item.name} />
                            ) : (
                                <ImageCard src={item.src} />
                            )}
                        </React.Fragment>
                    ))}

                    {/* Row 3 */}
                    {row3.map((item, idx) => (
                        <React.Fragment key={`r3-${idx}`}>
                            {item.type === "text" ? (
                                <TextCard title={item.title} description={item.desc} name={item.name} />
                            ) : (
                                <ImageCard src={item.src} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamSection;
