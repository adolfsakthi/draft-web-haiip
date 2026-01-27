import React from 'react'

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center bg-gradient-to-b from-[#f8eaff] to-[#fdf5ff] pt-[113px] pb-[113px]">
      <div className="w-full max-w-[1285px] mx-auto px-[77px] text-center">
        {/* HERO TITLE */}
        <h1 className="font-['Poppins'] font-semibold text-[79px] leading-[97px] text-black mb-6 ">
          Smart Visitor Management <br />
          Made Effortless
        </h1>

        {/* SUBTITLE */}
        <p className="font-['Poppins'] font-medium text-[24px] leading-[31px] tracking-[0.12px] text-black max-w-[1000px] mx-auto mb-6    ">
          Streamline visitor check-ins, approvals, tracking, and security <br className="hidden sm:block" />
          with a fast, digital VMS.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10 md:mb-20">
          <button className="bg-[#b455f2] hover:bg-[#a145e6] text-white font-semibold px-8 py-3 rounded-xl transition">
            Try for Free
          </button>

          <button className="bg-[#FFFEFE] border border-[#C147E9] text-[#C147E9] font-['Poppins'] font-medium text-[20px] leading-[28px] tracking-[-0.2px] px-[30px] py-[14px] rounded-xl shadow-[0px_1px_5px_rgba(0,0,0,0.05)] hover:bg-[#f4e9ff] transition      ">
            Book a Demo
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-6xl mx-auto">
          <img
            src="/assets/images/visitor/1.png"
            alt="Visitor Management Dashboard"
            className="w-full rounded-[24px] shadow-2xl block"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
