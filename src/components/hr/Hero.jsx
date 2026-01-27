import React from "react";
import dashboardImg from "../../assets/images/hr/a.png";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#fff8f3] via-[#fef5f0] to-[#f0f5ff] overflow-hidden h-screen">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-8 py-8 lg:py-12 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* LEFT SIDE — TEXT CONTENT */}
          <div className="text-left space-y-4">
            {/* HEADING */}
            <h1 className="text-[42px] sm:text-[48px] lg:text-[56px] font-bold text-[#1a1a1a] leading-[1.15]">
              {/* Line 1: Modern */}
              <span className="block mb-2">Modern</span>
              
              {/* Line 2: HR Management with highlight and tag */}
              <span className="relative inline-block mb-2">
                {/* Background highlight */}
                <span className="absolute inset-0 bg-[#fcd9c2] rounded-lg"></span>
                
                {/* Text content - single line */}
                <span className="relative px-0 py-2 text-[#6b3419] whitespace-nowrap">
                  HR Management
                </span>
                
                {/* Orange accent bar */}
                <span className="absolute right-0 top-0 h-full w-[3px] bg-[#ff6b35] rounded-full"></span>
                
                {/* HEZEE tag */}
                <span className="absolute right-[-64px] top-1/2 -translate-y-1/2 bg-[#ff6b35] text-white text-xs font-bold px-3 py-1 rounded-md whitespace-nowrap">
                  HEZEE
                </span>
              </span>
              
              {/* Line 3: Made Effortless */}
              <span className="block mt-2">Made Effortless</span>
            </h1>

            {/* SUBHEADING */}
            <p className="text-lg lg:text-xl text-[#4a5568] max-w-xl leading-relaxed mt-6">
              Automate attendance, leaves, records, and reports with a seamless, intuitive HRMS.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Try for Free
              </button>
              <button className="border-2 border-[#ff6b35] text-[#ff6b35] bg-white hover:bg-[#fff5f0] font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-md">
                Book a Demo
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — DASHBOARD IMAGE */}
          <div className="relative w-full 
                lg:absolute 
                lg:-right-20
                lg:top-[42%] 
                lg:-translate-y-1/2 
                lg:translate-x-[4rem]
                lg:w-[62vw] 
                lg:max-w-none">

            <div className="relative">
              {/* Decorative gradient blur behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/40 via-blue-200/30 to-purple-200/20 blur-3xl rounded-3xl"></div>
              
              {/* Dashboard image */}
              <img
  src={dashboardImg}
  alt="HRMS Dashboard Preview"
  className="relative w-full scale-[0.9] drop-shadow-[0_30px_90px_rgba(0,0,0,0.18)] rounded-xl"
/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}