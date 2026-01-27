import React from 'react'
import { ArrowDown } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full
          px-6 py-16 md:py-24
          flex flex-col items-center justify-center
          text-center relative
          bg-gradient-to-b from-[rgba(0,182,42,0.20)] to-white
        "
      >
        <h1
          className="
            text-[64px] md:text-[120px]
            leading-[1.05] md:leading-[112px]
            tracking-[-1.8px]
            text-center
            mb-6
            font-medium
            bg-clip-text
            text-transparent
            bg-[linear-gradient(140.74deg,#00B62A_-35.85%,#000000_147.89%)]
          "
        >
          Simplify{" "}
          <span
            className="
              font-bold
              bg-clip-text
              text-transparent
              bg-[linear-gradient(140.74deg,#00B62A_-35.85%,#000000_147.89%)]
            "
          >
            GYM
          </span>
          <br />
          <span className="font-medium">
            Operations
          </span>
        </h1>

        <p
          className="
            max-w-[756px]
            text-[25px]
            leading-[32px]
            font-normal
            tracking-normal
            text-[#475569]
            text-center
            mb-10
          "
        >
          Streamline memberships, check-ins, payments, and daily operations with a fast, all-in-one gym management system.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="bg-[#00B62A] hover:bg-[#00B62A] text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition">
            Start Free Trial
          </button>
          <button className="border-2 border-[#00B62A] text-[#00B62A] px-8 py-3 rounded-xl font-semibold hover:bg-white transition">
            Book a Demo
          </button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center opacity-50 animate-bounce">
          <span className="text-sm text-gray-500 mb-2">Learn more</span>
          <ArrowDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
