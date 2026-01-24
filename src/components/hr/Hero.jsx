import React from 'react';
import dashboardImg from '../../assets/images/hr/a.png';

export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-r from-[#fff7ef] via-[#fff3ee] to-[#eef6ff]">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    {/* LEFT SIDE */}
                    <div className="text-left">

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight">
                            Modern <br />

                            {/* Highlighted HR Management */}
                            <span className="relative inline-block mt-2">
                                <span className="absolute inset-0 bg-[#f7c6a5] rounded-md"></span>

                                <span className="relative px-3 py-1 text-[#7a2f20]">
                                    HR Management
                                </span>

                                {/* HEZEE tag */}
                                <span className="absolute -right-12 -top-6 bg-[#ff6a1a] text-white text-xs font-bold px-3 py-1 rounded-md">
                                    HEZEE
                                </span>
                            </span>

                            <br />
                            Made Effortless
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-6 text-lg text-[#475569] max-w-lg leading-relaxed">
                            Automate attendance, leaves, records, and reports with a seamless,
                            intuitive HRMS.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-5">
                            <button className="bg-[#ff6a1a] hover:bg-[#f35d0d] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition">
                                Try for Free
                            </button>

                            <button className="border-2 border-[#ff6a1a] text-[#ff6a1a] font-semibold px-10 py-4 rounded-xl hover:bg-[#fff0e7] transition">
                                Book a Demo
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE (Laptop / Dashboard Image) */}
                    <div className="flex justify-end">
                        <img
                            src={dashboardImg}
                            alt="HRMS Dashboard Preview"
                            className="w-full max-w-5xl ml-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
