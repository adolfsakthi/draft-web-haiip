import React from 'react';

export default function HRProductShowcase({
    title,
    quote,
    image,
    illustration,
    thumbIcon,
    isReversed = false,
    isDashedBorder = false,
    fullWidthImage
}) {
    return (
        <section className="w-full bg-[#FDF3EA] py-24">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">

                {/* IMAGE/MOCKUP COLUMN (DASHBOARD) */}
                {/* If reversed, it goes to order 2 on LG screens. If not reversed, order 1. */}
                {/* Wait, the original code for LMSShowcase2 (Reversed) had image as order-2 on mobile and order-1 on desktop? 
           Actually no: LMSShowcase (Normal): Left Content, Right Image.
           LMSShowcase2 (Reversed): Left Image, Right Content.
        */}

                <div className={`lg:w-2/3 w-full flex justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-black rounded-[44px] p-5 shadow-2xl w-full max-w-5xl">
                        <img
                            src={image}
                            alt={title || "Dashboard Preview"}
                            className="rounded-[28px] w-full"
                        />
                    </div>
                </div>


                {/* CONTENT COLUMN */}
                <div className={`lg:w-1/3 w-full flex flex-col items-start ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>

                    {/* Heading */}
                    <h3
                        className="flex items-start gap-2 mb-6 text-[#FF6D2C]"
                        style={{
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: "20px",
                            lineHeight: "28px",
                            letterSpacing: "-0.62px",
                        }}
                    >
                        {thumbIcon && (
                            <img
                                src={thumbIcon}
                                alt="thumb"
                                className="w-7 mt-1"
                            />
                        )}

                        {/* We render title as a node or string, preserving line breaks if it was specific */}
                        <span dangerouslySetInnerHTML={{ __html: title }}></span>
                    </h3>

                    {/* Quote Box */}
                    <div
                        className={`relative rounded-xl p-6 mb-8 bg-transparent max-w-[330px] ${isDashedBorder ? 'border-2 border-dashed' : ''}`}
                        style={{
                            // If not dashed, we apply solid border manually or via class. Original had inline style for border color.
                            border: isDashedBorder ? '2px dashed #FF6D2C' : '2px solid #FF6D2C',
                            color: "#4b5563",
                        }}
                    >
                        <span className="absolute -top-5 left-4 text-4xl text-[#FF6D2C]">
                            “
                        </span>

                        <p
                            style={{
                                fontFamily: "Poppins",
                                fontWeight: 400,
                                fontStyle: "italic",
                                fontSize: "16px",
                                lineHeight: "30px",
                                color: "#6b7280",
                            }}
                        >
                            <span dangerouslySetInnerHTML={{ __html: quote }}></span>
                        </p>
                    </div>

                    {/* Explore Button */}
                    <button
                        className="text-white transition hover:bg-[#f35d0d]"
                        style={{
                            width: "124px",
                            height: "36px",
                            paddingTop: "6px",
                            paddingRight: "24px",
                            paddingBottom: "6px",
                            paddingLeft: "24px",
                            borderRadius: "8px",
                            background: "#FF6D2C",
                            border: "2px solid #2E2F35",
                            boxShadow: "3px 3px 0px 0px #2E2F35",
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: "14px",
                        }}
                    >
                        EXPLORE
                    </button>

                    {/* Illustration */}
                    <div className={`mt-16 ${isReversed ? 'self-end' : ''}`}>
                        {/* Note: In Showcase2 (Reversed), illustration has "self-end". In Showcase1 (Normal), it has "mt-16". 
               Wait, Showcase2 illustration was `mt-1 self-end`. Showcase1 was `mt-16`. 
               Let's standardize or use a prop.
            */}
                        {illustration && (
                            <div className="mt-10 self-end">
                                {/* Applying a generic spacing. The original code varied slightly. */}
                                <img
                                    src={illustration}
                                    alt="illustration"
                                    className={`w-44 ${isReversed ? '-scale-x-100' : ''}`}
                                />
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Optional Full Width Image (like in Showcase 8 & 6 maybe?) */}
            {fullWidthImage && (
                <div className="max-w-7xl mx-auto px-6 mt-16">
                    <img
                        src={fullWidthImage}
                        alt="Full View"
                        className="w-full rounded-[28px]"
                    />
                </div>
            )}

        </section>
    );
}