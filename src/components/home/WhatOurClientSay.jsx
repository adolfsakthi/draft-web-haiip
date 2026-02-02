export default function Testimonials() {
  const testimonials = [
    {
      name: "Dhivya Senthil",
      role: "Directors, Bangalore",
      text: "After moving to Hezee PMS, our front office and housekeeping flow became much faster. Check-ins, room status, and reports are all clear in one dashboard. The support team is very responsive.",
      image: "/customer/415ac49c979a1fa575f59368eef75d26bf4b88fd.jpg",
    },
    {
      name: "Prof Karthikeyan R",
      role: "Chef, Bangalore",
      text: "After using Hezee POS, our counter and kitchen workflow became much faster. Orders reach the kitchen instantly, payments are quick, and end-of-day closing is simple. Overall service improved a lot.",
      image: "/customer/7c85a0b077f6ea046ff02f97a3f9f842c929cc7f.jpg",
    },
    {
      name: "Suresh Kasi",
      role: "HR AGM, Bangalore",
      text: "Hezee HRMS made attendance and payroll so simple. Biometric sync, shift handling, and salary calculations work smoothly. We saved a lot of manual effort every month.",
      image: "/customer/da97a1c53e78f2b537e850fd074601c27bfdf361.jpg",
    },
  ];

  return (
    <section className="relative flex justify-center bg-white py-24 overflow-hidden">
      <div className="relative w-full max-w-[1440px] px-6 lg:px-20">

        {/* HEADER */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start mb-12 -mt-10 gap-8 lg:gap-0">

          {/* LEFT TITLE */}
          <div className="flex items-center gap-4 lg:-ml-6">
            <img
              src="/Star.png"
              alt="star"
              className="w-14 h-14 object-contain"
            />
            <h2
              className="text-5xl font-normal text-black"
              style={{ fontFamily: 'Zen Dots, sans-serif' }}
            >
              What Our Clients Say
            </h2>
          </div>

          {/* RIGHT TAGLINE */}
          <div className="relative flex max-w-2xl gap-5 mt-14 lg:ml-32">

            {/* Vertical Accent Line */}
            <div
              style={{
                width: '3px',
                height: '60px',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                opacity: 1
              }}
            />

            {/* Gradient Subtitle */}
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: '30px',
                letterSpacing: '0%',
                background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Real experiences — trusted outcomes from <br className="hidden lg:block" />
              our integrated projects.
            </p>
          </div>

        </div>

        {/* LEFT CORNER DECOR IMAGE */}
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

        {/* TESTIMONIAL CARDS */}
        <div className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 relative">

          {testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                width: '378px',
                height: '371px',
                padding: '48px 26px',
                borderRadius: '70px',
                background: '#F9F9FF',
                transform: idx === 0 ? 'rotate(-6deg)' : idx === 2 ? 'rotate(6deg)' : 'rotate(0deg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
              className="relative shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >

              {/* AVATAR */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[3px] shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
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
                "{item.text}"
              </p>

              {/* STARS */}
              <div className="absolute bottom-8 left-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '16.83px',
                      height: '16px',
                      background: 'radial-gradient(50% 50% at 50% 50%, #F76680 0%, #57007B 100%)',
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      opacity: 1
                    }}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
