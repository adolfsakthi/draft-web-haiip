import React from "react";
import Hero from "../components/visitor/Hero";
import Benefits from "../components/visitor/Benefits";
import CallToAction from "../components/visitor/CallToAction";

const VisitorManagement = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* ===== FEATURES GRID (TOP SMALL CARDS) ===== */}
      {/* ===== FEATURES (5 ITEMS – SAME LAYOUT) ===== */}
<section className="w-full bg-[#F8FAFC] py-24 flex justify-center">
  <div className="max-w-[1400px] w-full px-6">

    {/* ===== TOP ROW (3 ITEMS) ===== */}
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

      
      {/* Vertical Dividers */}
<div className="hidden md:block absolute left-1/3 top-2 h-56 w-px bg-gradient-to-b from-[#C147E9] to-transparent" />
<div className="hidden md:block absolute left-2/3 top-2 h-56 w-px bg-gradient-to-b from-[#C147E9] to-transparent" />


      {/* Item 1 */}
      <div className="flex flex-col items-center gap-4">
        <img src="/assets/images/visitor/calender.png" className="w-10 h-10" />
        <h3 className="font-medium text-[#303030]">Visitor Dashboard</h3>
        <p className="text-sm text-[#8F8F8F] max-w-xs">
          Monitor real-time visitor activity with insights on total visitors,
          frequent visits, and department-wise footfall.
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center gap-4">
        <img src="/assets/images/visitor/calender.png" className="w-10 h-10" />
        <h3 className="font-medium text-[#303030]">Visitor Appointments</h3>
        <p className="text-sm text-[#8F8F8F] max-w-xs">
          Track visitor-in, vehicle-in, and vehicle-out entries with a clear
          list of scheduled and completed appointments.
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center gap-4">
        <img src="/assets/images/visitor/calender.png" className="w-10 h-10" />
        <h3 className="font-medium text-[#303030]">Visitor Registration</h3>
        <p className="text-sm text-[#8F8F8F] max-w-xs">
          Capture visitor details, visit purpose, and approvals using a quick
          and user-friendly registration form.
        </p>
      </div>
    </div>

    {/* ===== HORIZONTAL DIVIDER ===== */}
    <div className="relative my-20">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C147E9] to-transparent" />
    </div>

    {/* ===== BOTTOM ROW (2 ITEMS CENTERED) ===== */}
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 text-center max-w-3xl mx-auto">

      {/* Vertical Divider */}
      <div className="hidden md:block absolute left-1/2 top-10 h-40 w-px bg-gradient-to-b from-[#C147E9] to-transparent" />

      {/* Item 4 */}
      <div className="flex flex-col items-center gap-4">
        <img src="/assets/images/visitor/calender.png" className="w-10 h-10" />
        <h3 className="font-medium text-[#303030]">Vehicle Management</h3>
        <p className="text-sm text-[#8F8F8F] max-w-xs">
          Maintain complete records of visitor vehicles with owner details,
          visit history, and entry/exit tracking.
        </p>
      </div>

      {/* Item 5 */}
      <div className="flex flex-col items-center gap-4">
        <img src="/assets/images/visitor/calender.png" className="w-10 h-10" />
        <h3 className="font-medium text-[#303030]">Reports & Analytics</h3>
        <p className="text-sm text-[#8F8F8F] max-w-xs">
          Generate detailed visitor and vehicle reports to improve security,
          compliance, and operational visibility.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* ===== WHAT'S ABOUT VMS (FULL WIDTH – FIXED) ===== */}
      <section className="w-full bg-[#fdf2ff] py-24">
        <div className="max-w-[1600px] mx-auto px-6">

          {/* Heading */}
          <div className="relative text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">
              What's about VMS?
            </h2>

            <span className="hidden md:inline-block absolute -top-6 right-20 bg-[#b455f2] text-white text-xs font-semibold px-5 py-1 rounded-full rotate-[10deg] shadow">
              YOUR IDEA STARTS HERE
            </span>
          </div>

          {/* ===== FEATURE 1 ===== */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">

            <div className="lg:w-2/3 w-full">
              <div className="bg-black rounded-[36px] p-4 shadow-2xl">
                <img
                  src="/assets/images/visitor/2.png"
                  alt="VMS Dashboard"
                  className="rounded-[24px] w-full"
                />
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
              <h3 className="text-lg font-semibold text-[#b455f2] mb-6 flex items-center gap-2">
                <img src="/assets/images/visitor/thumb.png" className="w-7" />
                Track All Visitors in Real Time
              </h3>

              <div className="border-2 border-dashed border-[#b455f2] rounded-xl p-6 text-sm mb-8">
                Get instant insights on total visitors, frequent visitors,
                and department-wise footfall with a smart dashboard.
              </div>

              <button className="border-2 border-[#b455f2] text-[#b455f2] px-6 py-2 rounded-lg hover:bg-[#b455f2] hover:text-white transition">
                EXPLORE
              </button>
            </div>
          </div>

          {/* ===== FEATURE 2 (REVERSED) ===== */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">

            <div className="lg:w-2/3 w-full">
              <div className="bg-black rounded-[36px] p-4 shadow-2xl">
                <img
                  src="/assets/images/visitor/3.png"
                  alt="Check-in Dashboard"
                  className="rounded-[24px] w-full"
                />
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
              <h3 className="text-lg font-semibold text-[#b455f2] mb-6 flex gap-2">
                <img src="/assets/images/visitor/thumb.png" className="w-7" />
                Manage Visitor & Vehicle Check-ins
              </h3>

              <div className="border-2 border-dashed border-[#b455f2] rounded-xl p-6 text-sm mb-8">
                Handle visitor-in, vehicle-in, and vehicle-out entries
                effortlessly with real-time records.
              </div>

              <button className="border-2 border-[#b455f2] text-[#b455f2] px-6 py-2 rounded-lg hover:bg-[#b455f2] hover:text-white transition">
                EXPLORE
              </button>
            </div>
          </div>

          {/* ===== FEATURE 3 ===== */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">

            <div className="lg:w-2/3 w-full">
              <div className="bg-black rounded-[36px] p-4 shadow-2xl">
                <img
                  src="/assets/images/visitor/4.png"
                  alt="Visitor Form"
                  className="rounded-[24px] w-full"
                />
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
              <h3 className="text-lg font-semibold text-[#b455f2] mb-6 flex gap-2">
                <img src="/assets/images/visitor/thumb.png" className="w-7" />
                Capture Visitor Details Easily
              </h3>

              <div className="border-2 border-dashed border-[#b455f2] rounded-xl p-6 text-sm mb-8">
                Collect visitor info, documents, purpose, and approvals
                in one simple digital form.
              </div>

              <button className="border-2 border-[#b455f2] text-[#b455f2] px-6 py-2 rounded-lg hover:bg-[#b455f2] hover:text-white transition">
                EXPLORE
              </button>
            </div>
          </div>

          <Benefits />
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default VisitorManagement;
