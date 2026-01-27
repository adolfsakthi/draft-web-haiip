import React from "react"

// DEVICE IMAGES (transparent screens)
import laptop from "../../assets/images/hotel/img7.png"
import ipad from "../../assets/images/hotel/Apple_ipad.png"

// SCREEN CONTENT
import dashboard from "../../assets/images/hotel/PMS_Main_Dashboard.png"
import stayView from "../../assets/images/hotel/Pms_Stay_View.png"

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
            {/* ================= DEVICE COMPOSITION ================= */}
            <div
                className="relative mx-auto"
                style={{
                    width: "880px",
                    height: "520px"
                }}
            >
                {/* ========== LAPTOP (MAIN) ========== */}
                <div
                    className="absolute"
                    style={{
                        width: "720px",
                        left: "50%",
                        top: "0px",
                        transform: "translateX(-50%)",
                        zIndex: 1
                    }}
                >
                    {/* PMS Dashboard INSIDE laptop screen */}
                    <div
                        className="absolute flex items-center justify-center"
                        style={{
                            width: "560px",
                            height: "300px",
                            top: "60px",
                            left: "80px",
                            overflow: "hidden",
                            borderRadius: "16px",
                            zIndex: 2
                        }}
                    >
                        <img
                            src={dashboard}
                            alt="PMS Dashboard"
                            className="w-full h-full object-cover"
                            style={{
                                transform: "scale(0.94)",
                                transformOrigin: "center"
                            }}
                        />

                    </div>


                    {/* Laptop Image */}
                    <img
                        src={laptop}
                        alt="Laptop"
                        className="w-full relative z-10"
                        style={{
                            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.25))"
                        }}
                    />
                </div>

                {/* ========== iPAD (BOTTOM LEFT) ========== */}
                <div
                    className="absolute"
                    style={{
                        width: "270px",
                        left: "60px",
                        top: "200px",
                        zIndex: 3
                    }}
                >
                    {/* PMS Stay View INSIDE iPad screen */}
                    <div
                        className="absolute"
                        style={{
                            width: "230px",
                            height: "160px",
                            top: "18px",     // screen Y
                            left: "20px",    // screen X
                            overflow: "hidden",
                            borderRadius: "14px",
                            zIndex: 4
                        }}
                    >
                        <img
                            src={stayView}
                            alt="PMS Stay View"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* iPad Image */}
                    <img
                        src={ipad}
                        alt="iPad"
                        className="w-full relative z-10"
                        style={{
                            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))"
                        }}
                    />
                </div>
            </div>

            {/* ================= TEXT ================= */}
            <div
                className="flex flex-col items-center text-center"
                style={{
                    marginTop: "48px",
                    width: "520px",
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
