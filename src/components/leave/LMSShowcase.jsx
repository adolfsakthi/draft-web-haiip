// Section: What's about LMS? – exact UI like image
export default function LMSShowcase() {
  return (
    <section className="w-full bg-[#eefdff] py-20" id="about">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            What's about LMS?
          </h2>

          {/* Badge */}
          <span className="hidden md:inline-block absolute -top-4 right-100 bg-[#00b6f3] rotate-[8deg] text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
            YOUR IDEA STARTS HERE
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-lg font-semibold text-[#00b6f3] flex items-center gap-2 mb-6">
              <img
                src="/assets/images/leave/thumb.png"
                alt="illustration"
                className="w-7"
              /> Manage Leave Policies <br className="hidden lg:block" />
              and Requests with Ease
            </h3>

            {/* Dashed quote box */}
            <div className="relative border-2 border-dashed border-[#00b6f3] rounded-lg p-6 text-sm text-[#4b5563] mb-8 bg-transparent">
              <span className="absolute -top-4 left-4 text-3xl text-[#00b6f3]">“</span>
              Define leave types, set yearly limits, and track all employee leave
              requests in one organized view.
            </div>

            {/* Explore Button */}
            <button className="inline-flex items-center justify-center border-2 border-[#00b6f3] text-[#00b6f3] font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#00b6f3] hover:text-white transition">
              EXPLORE
            </button>

            {/* Illustration */}
            <div className="mt-20">
              <img
                src="/assets/images/leave/11.png"
                alt="illustration"
                className="w-40"
              />
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="lg:w-2/3 w-full flex justify-center">
            <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-3xl">
              <img
                src="/assets/images/leave/1.png"
                alt="Dashboard Preview"
                className="rounded-[24px] w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
