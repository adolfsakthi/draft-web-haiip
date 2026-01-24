// Fourth dashboard block: Reports (image-accurate)
export default function LMSShowcase4() {
  return (
    <section className="w-full bg-[#eefdff] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">

        {/* LEFT: Tablet-style Reports dashboard */}
        <div className="lg:w-2/3 w-full flex justify-center order-2 lg:order-1">
          <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-4xl">
            <img
              src="/assets/images/leave/4.png"
              alt="Reports Dashboard"
              className="rounded-[24px] w-full"
            />
          </div>
        </div>

        {/* RIGHT: Note + button + illustration */}
        <div className="lg:w-1/3 w-full flex flex-col items-start order-1 lg:order-2">

          <h3 className="text-lg font-semibold text-[#00b6f3] flex items-start gap-2 mb-6">
            <img
              src="/assets/images/leave/thumb.png"
              alt="illustration"
              className="w-7"
            /> Generate Accurate Leave <br />
            Reports in One Click
          </h3>

          {/* Dashed quote box */}
          <div className="relative border-2 border-dashed border-[#00b6f3] rounded-lg p-6 text-sm text-[#4b5563] mb-8">
            <span className="absolute -top-4 left-4 text-3xl text-[#00b6f3]">“</span>
            Create department-wise, date-wise, and type-wise leave reports
            to support precise HR planning.
          </div>

          {/* Outlined Explore button */}
          <button className="border-2 border-[#00b6f3] text-[#00b6f3] font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#00b6f3] hover:text-white transition">
            EXPLORE
          </button>

          {/* Illustration (bottom-right aligned) */}
          <div className="mt-16 self-end">
            <img
              src="/assets/images/leave/44.png"
              alt="illustration"
              className="w-40"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
