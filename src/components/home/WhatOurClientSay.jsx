export default function Testimonials() {
  const testimonials = [
    {
      name: "Dhivya Senthil",
      role: "Directors, Bangalore",
      text: "After moving to Hezee PMS, our front office and housekeeping flow became much faster. Check-ins, room status, and reports are all clear in one dashboard. The support team is very responsive.",
      image: "/testimonials/1.png",
    },
    {
      name: "Prof Karthikeyan R",
      role: "Chef, Bangalore",
      text: "After using Hezee POS, our counter and kitchen workflow became much faster. Orders reach the kitchen instantly, payments are quick, and end-of-day closing is simple. Overall service improved a lot.",
      image: "/testimonials/2.png",
    },
    {
      name: "Suresh Kasi",
      role: "HR AGM, Bangalore",
      text: "Hezee HRMS made attendance and payroll so simple. Biometric sync, shift handling, and salary calculations work smoothly. We saved a lot of manual effort every month.",
      image: "/testimonials/3.png",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">

      {/* HEADER */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start px-6 lg:px-10 gap-8 lg:gap-0">

        <h2 className="flex items-center gap-4 text-3xl md:text-5xl font-semibold text-black" style={{ fontFamily: 'Zen Dots, sans-serif' }}>
          <img
            src="/Star.png"
            alt="star"
            className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
          />
          What Our Clients Say
        </h2>


        <div className="flex items-start gap-4 max-w-full lg:max-w-[420px]">

          {/* Vertical Gradient Accent Line */}
          <div className="w-[3px] h-[50px] md:h-[64px] bg-gradient-to-b from-[#cf3d9c] to-[#5b38c6] rounded-full shrink-0" />

          {/* Gradient Subtitle Text */}
          <p className="
            text-base md:text-lg 
            italic 
            font-medium
            leading-relaxed
            bg-gradient-to-b 
            from-[#cf3d9c] 
            via-[#b44bb2] 
            to-[#5b38c6]
            bg-clip-text 
            text-transparent
          ">
            Real experiences — trusted outcomes from our integrated projects.
          </p>

        </div>
        {/* LEFT CORNER DECOR IMAGE (Hidden on mobile) */}
        <img
          src="/element.png"
          alt=""
          className="
            hidden lg:block
            absolute top-[320px] left-[-40px]
            w-[260px]
            object-contain
            pointer-events-none
            z-0
          "
        />

      </div>

      {/* CARDS */}
      <div className="mt-12 md:mt-24 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-23 relative px-4">

        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={`
              relative w-full max-w-[420px] lg:w-[420px] min-h-[360px]
              bg-white rounded-[40px] md:rounded-[60px]
              px-8 py-10 md:px-10 md:py-12
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              border border-gray-50
              ${idx === 0 ? "lg:-rotate-6" : ""}
              ${idx === 2 ? "lg:rotate-6" : ""}
            `}
          >

            {/* AVATAR */}
            <div className="flex items-center gap-4 mb-6">

              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[3px] overflow-hidden shrink-0">

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}

                {/* FALLBACK HUMAN ICON */}
                <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full text-3xl text-gray-400">
                  👤
                </div>

              </div>


              <div>
                <h4 className="text-lg font-semibold text-black">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>

            {/* TEXT */}
            <p className="text-base leading-relaxed text-gray-600">
              “{item.text}”
            </p>

            {/* STARS */}
            <div className="mt-8 flex gap-1 text-pink-600 text-xl">
              ★★★★★
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
