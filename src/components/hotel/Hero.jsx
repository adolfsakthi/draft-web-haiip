import React from "react"
import img7 from "../../assets/images/hotel/img7.png"

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-[#fff7e8] to-white pt-28 pb-32">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Product Image */}
                <div className="flex justify-center mb-14">
                    <img
                        src={img7}
                        alt="Visitor Management Dashboard"
                        className="w-full max-w-5xl"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Automate Your Hotel <br /> Operations Effortlessly
                </h1>

                {/* Subheading */}
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
                    From check-ins to approvals — manage everything in one smart,
                    easy-to-use Hotel Management System.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex justify-center gap-6 flex-wrap">
                    <button className="bg-yellow-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-600 transition shadow-lg">
                        Try for Free
                    </button>

                    <button className="border-2 border-yellow-500 text-yellow-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-50 transition">
                        Book a Demo
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero
