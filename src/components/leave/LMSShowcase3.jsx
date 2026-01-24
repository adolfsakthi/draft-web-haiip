// Third dashboard block: User Access (image-accurate)
export default function LMSShowcase3() {
  return (
    <section className="w-full bg-[#eefdff] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">

        {/* LEFT: Note + illustration */}
        <div className="lg:w-1/3 w-full flex flex-col items-start">

          <h3 className="text-lg font-semibold text-[#00b6f3] flex items-start gap-2 mb-6">
            <img
              src="/assets/images/leave/thumb.png"
              alt="illustration"
              className="w-7"
            /> Control User Access <br />
            with Secure Role Management
          </h3>

          {/* Dashed quote box */}
          <div className="relative border-2 border-dashed border-[#00b6f3] rounded-lg p-6 text-sm text-[#4b5563] mb-8">
            <span className="absolute -top-4 left-4 text-3xl text-[#00b6f3]">“</span>
            Enable or disable user accounts and manage permissions to ensure
            safe and structured LMS access.
          </div>

          {/* Outlined Explore button */}
          <button className="border-2 border-[#00b6f3] text-[#00b6f3] font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#00b6f3] hover:text-white transition">
            EXPLORE
          </button>

          {/* Illustration (bottom-left aligned) */}
          <div className="mt-16">
            <img
              src="/assets/images/leave/3.png"
              alt="illustration"
              className="w-40"
            />
          </div>
        </div>

        {/* RIGHT: Tablet-style dashboard */}
        <div className="lg:w-2/3 w-full flex justify-center">
          <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-4xl">
            <img
              src="/assets/images/leave/33.png"
              alt="User Access Dashboard"
              className="rounded-[24px] w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
