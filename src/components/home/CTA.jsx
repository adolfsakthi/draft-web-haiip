import React from "react";

const CTASection = () => {
  return (
    <section className="w-full">

      <div
        className="
          w-full
          h-[240px]
          flex flex-col items-center justify-center
          text-center
          bg-gradient-to-r from-[#08a5e3] via-[#12bfe9] to-[#2bd8e6]
        "
      >
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-white leading-tight max-w-5xl">
          Transform Your Business with Hezee Smart Solutions
        </h2>

        {/* SUBTITLE */}
        <p className="text-base text-white/90 leading-relaxed">
          Powerful software and reliable hardware to automate operations, improve
          productivity, and scale faster—without complexity.
        </p>

        {/* BUTTON */}
        <button className="rounded-xl bg-white px-10 py-4 text-lg font-semibold text-[#0c2238] shadow-md hover:scale-[1.02] transition">
          Get a Free Demo
        </button>

        {/* FOOTER TEXT */}
        <p className="text-sm text-white/90">
          Talk to our team today
        </p>
      </div>

    </section>
  );
};

export default CTASection;
