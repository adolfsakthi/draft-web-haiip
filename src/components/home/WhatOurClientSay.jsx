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
    <section className="relative py-24 bg-white overflow-hidden">

      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto flex justify-between items-start px-10">

       <h2 className="flex items-center gap-4 text-5xl font-semibold text-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
  <img
    src="/Star.png"
    alt="star"
    className="w-14 h-14 object-contain"
  />
  What Our Clients Say
</h2>


       <div className="flex items-start gap-4 max-w-[420px]">

  {/* Vertical Gradient Accent Line */}
  <div className="w-[3px] h-[64px] bg-gradient-to-b from-[#cf3d9c] to-[#5b38c6] rounded-full" />

  {/* Gradient Subtitle Text */}
  <p className="
    text-lg 
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
{/* LEFT CORNER DECOR IMAGE */}
<img
  src="/element.png"
  alt=""
  className="
    absolute top-[320px] left-[-40px]
    w-[260px]
    object-contain
    pointer-events-none
    z-0
  "
/>


       

      </div>

      {/* CARDS */}
      <div className="mt-24 flex justify-center gap-23 relative">

        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className={`
              relative w-[420px] h-[360px]
              bg-white rounded-[60px]
              px-10 py-12
              shadow-[0_40px_120px_rgba(0,0,0,0.05)]
              ${idx === 0 ? "-rotate-6" : ""}
              ${idx === 2 ? "rotate-6" : ""}
            `}
          >

            {/* AVATAR */}
            <div className="flex items-center gap-4 mb-6">

            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[3px] overflow-hidden">

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
