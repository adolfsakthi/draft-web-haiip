// Hero section component
export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center bg-gradient-to-b from-[#ECFEFF] to-white pt-[113px] pb-[113px]">
      <div className="w-full max-w-[1285px] mx-auto px-[77px] text-center">
<br/>
<br/>
<br/>
<br/>
        {/* HERO TITLE */}
        <h1 className="font-['Poppins'] font-semibold text-[79px] leading-[97px] text-black mb-6 ">
          Modern Leave Management 
          Made Effortless
        </h1>

        {/* SUBTITLE */}
        <p className="font-['Poppins'] font-medium text-[24px] leading-[31px] tracking-[0.12px] text-black max-w-[730px] mx-auto mb-6    ">
          Automate leave requests, approvals, balances, and reports <br className="hidden sm:block" />
          with a seamless, intuitive LMS.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-row items-center justify-center gap-6">

          <button className="bg-[#00B0BA] hover:bg-[#00a0a9] text-white font-['Poppins'] font-semibold text-[20px] leading-[28px] tracking-[-0.2px] px-[30px] py-[14px] rounded-xl shadow-[0px_1px_5px_rgba(0,0,0,0.05)] transition      ">
            Try for Free
          </button>

          <button className="bg-[#FFFEFE] border border-[#00B0BA] text-[#00B0BA] font-['Poppins'] font-medium text-[20px] leading-[28px] tracking-[-0.2px] px-[30px] py-[14px] rounded-xl shadow-[0px_1px_5px_rgba(0,0,0,0.05)] hover:bg-[#f0feff] transition      ">
            Book a Demo
          </button>

        </div>

      </div>
    </section>

  );
}
