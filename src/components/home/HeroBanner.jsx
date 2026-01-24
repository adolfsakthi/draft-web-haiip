import React from "react";

const accentLines = [
  { className: "top-10 left-10", width: "w-12" },
  { className: "top-24 right-24", width: "w-16" },
  { className: "bottom-20 left-1/4", width: "w-10" },
  { className: "bottom-10 right-1/3", width: "w-14" },
];

const HeroBanner = () => {
  return (
    <section className="w-full">

      <div
        className="relative overflow-hidden w-full"
        style={{
          height: "840px",
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Accent Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {accentLines.map((line, idx) => (
            <div
              key={idx}
              className={`absolute h-[3px] rounded-full bg-[#00E0FF] ${line.className} ${line.width}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center text-center text-[#152033]">

          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-[#3f4776]">
            End-to-end tech for businesses
          </div>

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight drop-shadow-sm md:text-6xl">
            Innovating the Future with Smart Software & Reliable Security Hardware
          </h1>

          <p className="mt-6 max-w-3xl text-xl font-semibold text-[#5f677f]">
            From advanced surveillance systems to intelligent software — we deliver end-to-end technology for businesses.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">

            {/* SOFTWARE BUTTON */}
            <div className="relative">

              <div className="absolute -inset-4 rounded-2xl">
                <div className="absolute inset-0 rounded-2xl bg-[#7DC242]/12 blur-xl" />
                <div className="absolute inset-0 rounded-2xl border border-[#7DC242]/25" />
              </div>

              <div className="absolute -inset-2 rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-[#7DC242]/35 blur-md" />
                <div className="absolute inset-0 rounded-xl border border-[#7DC242]/45" />
              </div>

              <button className="relative rounded-xl bg-[#7DC242] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#7DC242]/30 transition hover:-translate-y-1">
                Explore Software Solutions
              </button>
            </div>

            {/* SECURITY BUTTON */}
            <div className="relative">

              <div className="absolute -inset-4 rounded-2xl">
                <div className="absolute inset-0 rounded-2xl bg-[#2B2344]/12 blur-xl" />
                <div className="absolute inset-0 rounded-2xl border border-[#2B2344]/25" />
              </div>

              <div className="absolute -inset-2 rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-[#2B2344]/35 blur-md" />
                <div className="absolute inset-0 rounded-xl border border-[#2B2344]/45" />
              </div>

              <button className="relative rounded-xl bg-[#2B2344] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#2B2344]/30 transition hover:-translate-y-1">
                Explore Security Products
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
