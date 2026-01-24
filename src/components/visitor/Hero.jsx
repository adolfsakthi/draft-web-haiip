import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#f8eaff] to-[#fdf5ff] pt-16 pb-24">
      <div className="container-custom text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
          Smart Visitor Management <br />
          Made Effortless
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Streamline visitor check-ins, approvals, tracking, and security
          with a fast, digital VMS.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <button className="bg-[#b455f2] hover:bg-[#a145e6] text-white font-semibold px-8 py-3 rounded-xl transition">
            Try for Free
          </button>

          <button className="border-2 border-[#b455f2] text-[#b455f2] font-semibold px-8 py-3 rounded-xl hover:bg-[#f4e9ff] transition">
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
