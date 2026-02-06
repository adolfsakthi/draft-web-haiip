import React from "react"

import hotel_bg from "../../assets/images/hotel/hotel_bg.png"

const Hero = () => {
    return (
        <section
            className="w-full flex flex-col items-center"
            style={{
                paddingTop: "110px",
                paddingBottom: "90px",
                background: "linear-gradient(180deg, #fff7e8 0%, #FFFFFF 100%)"
            }}
        >
            {/* ================= HERO IMAGE ================= */}
            <div
                className="relative mx-auto flex justify-center items-center w-[92%] lg:w-[60%] transition-all duration-700"
                style={{
                    height: "auto"
                }}
            >
                <img
                    src={hotel_bg}
                    alt="Hotel PMS Dashboard"
                    className="w-full h-auto object-contain"
                    style={{
                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))"
                    }}
                />
            </div>

            {/* ================= TEXT ================= */}
            <div
                className="flex flex-col items-center text-center"
                style={{
                    marginTop: "48px",
                    // width: "520px",
                    gap: "18px"
                }}
            >
                <h1
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        fontSize: "46px",
                        lineHeight: "52px",
                        letterSpacing: "-2.5px",
                        color: "#14141E"
                    }}
                >
                    Automate Your Hotel Operations Effortlessly
                </h1>

                <p
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#D4A656"
                    }}
                >
                    From bookings to housekeeping — manage everything in one smart,
                    easy-to-use PMS.
                </p>

                <div className="flex gap-6 mt-4 flex-wrap justify-center">
                    <button className="bg-[#EAB308] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-600 transition">
                        Try for Free
                    </button>

                    <button className="border-2 border-[#EAB308] text-[#EAB308] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition">
                        Book a Demo
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
