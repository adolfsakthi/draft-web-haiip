// Hero section component
export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#f3fbfc]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* HERO TITLE */}
        <h1 className="
      text-[3.5rem]
      sm:text-[4.5rem]
      lg:text-[5.5rem]
      font-extrabold
      text-black
      leading-[1.05]
      mb-8
    ">
          Modern Leave Management <br />
          Made Effortless
        </h1>

        {/* SUBTITLE */}
        <p className="
      text-lg
      sm:text-xl
      text-[#475569]
      max-w-3xl
      mx-auto
      mb-12
    ">
          Automate leave requests, approvals, balances, and reports <br className="hidden sm:block" />
          with a seamless, intuitive LMS.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          <button className="
        bg-[#1ecaa8]
        hover:bg-[#18b893]
        text-white
        font-semibold
        px-10
        py-4
        rounded-xl
        shadow-sm
        transition
      ">
            Try for Free
          </button>

          <button className="
        border
        border-[#1ecaa8]
        text-[#1ecaa8]
        font-semibold
        px-10
        py-4
        rounded-xl
        hover:bg-[#e6f7f3]
        transition
      ">
            Book a Demo
          </button>

        </div>

      </div>
    </section>

  );
}
