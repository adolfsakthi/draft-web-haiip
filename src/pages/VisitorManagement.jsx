import React from "react";
import Hero from "../components/visitor/Hero";
import Benefits from "../components/visitor/Benefits";
import CallToAction from "../components/visitor/CallToAction";

const VisitorManagement = () => {
  return (
    <div className="bg-white font-sans text-slate-900 flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Features Grid */}
      <section className="w-full bg-[#F8FAFC] flex flex-col items-center py-0">
        <div className="relative w-full max-w-[1438px] px-[79px] py-[80px]">
          {/* Top Row: 3 columns */}
          <div className="flex flex-row justify-between items-center gap-[17px]">
            {/* Visitor Dashboard */}
            <div className="flex flex-col gap-[2px] w-[308px]">
              <div className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded">
                <img
                  src="/assets/images/visitor/calender.png"
                  alt=""
                  className="w-10 h-10"
                  style={{
                    filter:
                      "drop-shadow(0px 8px 32px rgba(193, 71, 233, 0.08))",
                  }}
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    Visitor Dashboard
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    Monitor real-time visitor activity with insights on total
                    visitors, frequent visits, and department-wise footfall.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-[223.88px] bg-gradient-to-b from-[#C147E9] to-[rgba(87,0,123,0.1)] rotate-180"></div>

            {/* Visitor Appointments */}
            <div className="flex flex-col gap-[2px] w-[308px]">
              <div className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded">
                <img
                  src="/assets/images/visitor/calender.png"
                  alt=""
                  className="w-10 h-10"
                  style={{
                    filter:
                      "drop-shadow(0px 8px 32px rgba(193, 71, 233, 0.08))",
                  }}
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    Visitor Appointments
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    Track visitor-in, vehicle-in, and vehicle-out entries with a
                    clear list of scheduled and completed appointments.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-[223.88px] bg-gradient-to-b from-[#C147E9] to-[rgba(87,0,123,0.1)] rotate-180"></div>

            {/* Visitor Registration */}
            <div className="flex flex-col gap-[2px] w-[308px]">
              <div className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded">
                <img
                  src="/assets/images/visitor/calender.png"
                  alt=""
                  className="w-10 h-10"
                  style={{
                    filter:
                      "drop-shadow(0px 8px 32px rgba(193, 71, 233, 0.08))",
                  }}
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    Visitor Registration
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    Capture visitor details, visit purpose, and approvals using
                    a quick and user-friendly registration form.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Horizontal gradient divider */}
          <div className="w-full h-px my-[8px] bg-gradient-to-r from-[rgba(87,0,123,0.5)] via-[#C147E9] to-[rgba(87,0,123,0.5)]" />

          {/* Bottom Row: 2 columns */}
          <div className="flex flex-row justify-center items-center gap-[80px]">
            {/* Vehicle Management */}
            <div className="flex flex-col gap-[2px] w-[308px]">
              <div className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded">
                <img
                  src="/assets/images/visitor/calender.png"
                  alt=""
                  className="w-10 h-10"
                  style={{
                    filter:
                      "drop-shadow(0px 8px 32px rgba(193, 71, 233, 0.08))",
                  }}
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    Vehicle Management
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    Maintain complete records of visitor vehicles with owner
                    details, visit history, and entry/exit tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-[223.88px] bg-gradient-to-b from-[#C147E9] to-[rgba(87,0,123,0.1)] rotate-180"></div>

            {/* Reports & Analytics */}
            <div className="flex flex-col gap-[2px] w-[308px]">
              <div className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded">
                <img
                  src="/assets/images/visitor/calender.png"
                  alt=""
                  className="w-10 h-10"
                  style={{
                    filter:
                      "drop-shadow(0px 8px 32px rgba(193, 71, 233, 0.08))",
                  }}
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    Reports & Analytics
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    Generate detailed visitor and vehicle reports to improve
                    security, compliance, and operational visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ What's about VMS Section (FIXED ProductShowcase layout) */}
      <section className="w-full bg-[#FDF5FF] py-[80px] flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-[40px]">
          {/* Heading */}
          <div className="relative flex flex-col items-center mb-20">
            <h2 className="font-['Zen_Dots'] font-normal text-[48px] leading-[58px] text-center text-black mb-0">
              What's about VMS?
            </h2>

            {/* Badge */}
            <span
              className="hidden md:inline-block absolute -top-4 bg-[#C147E9] rotate-[10deg] text-white text-xs font-semibold px-4 py-1 rounded-full shadow"
              style={{ right: "18rem" }}
            >
              YOUR IDEA STARTS HERE
            </span>
          </div>

          {/* ✅ Wrapper for all features like ProductShowcase */}
          <div className="flex flex-col" style={{ gap: "80px" }}>
            {/* ✅ Feature 1 (Image Left, Text Right) */}
            <div
              className="flex flex-row"
              style={{
                width: "1280px",
                height: "639px",
                gap: "24px",
                margin: "0 auto",
              }}
            >
              {/* IMAGE BLOCK - 978px */}
              <div
                style={{
                  width: "900px",
                  height: "610px",
                  borderRadius: "48px",
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "flex",
                }}
              >
                <img
                  src="/assets/images/visitor/2.png"
                  alt="VMS Dashboard"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TEXT BLOCK - 278px */}
              <div
                style={{
                  width: "278px",
                  height: "639px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <div style={{ marginBottom: '52px' }}>
                  {/* Title with icon */}
                  <div className="flex flex-row items-start gap-2 w-full mb-6">
                    <img
                      src="/assets/images/visitor/thumb.png"
                      alt="illustration"
                      className="w-8 h-8 mt-[2px]"
                    />
                    <h3 className="font-['Poppins'] font-semibold text-[20px] leading-7 tracking-[-0.624px] text-[#C147E9] w-[246px]">
                      Track All Visitors in Real Time
                    </h3>
                  </div>

                  {/* Dashed Quote box */}
                  <div className="relative w-[288px] h-[182px] isolate bg-transparent mb-15">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 278 152"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="276"
                        height="150"
                        rx="15"
                        ry="15"
                        stroke="#C147E9"
                        strokeWidth="2"
                        strokeDasharray="11 11"
                      />
                    </svg>

                    <div
                      className="relative flex flex-col items-start gap-4 rounded-[15px] w-full h-full"
                      style={{ padding: "24px" }}
                    >
                      <p
                        className="w-[230px]"
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "#58595D",
                        }}
                      >
                        Get instant insights on total visitors, frequent
                        visitors, and department-wise footfall with a smart
                        visual dashboard. <br />
                        <br />
                      </p>
                    </div>

                    <div className="absolute w-12 h-[38px] left-[34px] -top-[15px] bg-[#FDF5FF] flex items-center justify-center">
                      <img
                        src="/assets/images/vector2.png"
                        alt="quote"
                        className="w-[34px] h-[34px] object-contain"
                      />
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="w-full flex justify-start mb-4">
                    <button className="box-border flex flex-row items-center justify-center p-[6px_24px] bg-[#C147E9] border-2 border-[#2E2F35] shadow-[3px_3px_0px_#2E2F35] rounded-lg w-[124px] h-9">
                      <span className="font-['Poppins'] font-semibold text-[16px] leading-6 tracking-[1.2px] uppercase text-white">
                        Explore
                      </span>
                    </button>
                  </div>
                </div>

                {/* Illustration (Bottom) */}
                <div className="flex justify-start w-full mt-0">
                  <div className="w-[195px] h-[300px]">
                    <img
                      src="/assets/images/visitor/22.png"
                      alt="illustration"
                      className="w-full h-full object-contain -mt-10 -scale-x-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Feature 2 (Image Right, Text Left) */}
            <div
              className="flex flex-row-reverse"
              style={{
                width: "1280px",
                height: "639px",
                gap: "24px",
                margin: "0 auto",
              }}
            >
              {/* IMAGE BLOCK - 978px */}
              <div
                style={{
                  width: "978px",
                  height: "639px",
                  borderRadius: "48px",
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "flex",
                }}
              >
                <img
                  src="/assets/images/visitor/3.png"
                  alt="Visitor and Vehicle Check-in Dashboard"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TEXT BLOCK - 278px */}
              <div
                style={{
                  width: "278px",
                  height: "639px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <div>
                  {/* Title with icon */}
                  <div className="flex flex-row items-start gap-2 w-full mb-6">
                    <img
                      src="/assets/images/visitor/thumb.png"
                      alt="illustration"
                      className="w-8 h-8 mt-[2px]"
                    />
                    <h3 className="font-['Poppins'] font-semibold text-[20px] leading-7 tracking-[-0.624px] text-[#C147E9] w-[246px]">
                      Manage Visitor and <br />
                      Vehicle Check-Ins Seamlessly
                    </h3>
                  </div>

                  {/* Dashed Quote box */}
                  <div className="relative w-[278px] h-[178px] isolate bg-transparent mb-6">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 278 178"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="276"
                        height="176"
                        rx="15"
                        ry="15"
                        stroke="#C147E9"
                        strokeWidth="2"
                        strokeDasharray="11 11"
                      />
                    </svg>

                    <div
                      className="relative flex flex-col items-start gap-4 rounded-[15px] w-full h-full"
                      style={{ padding: "24px" }}
                    >
                      <p
                        className="w-[230px]"
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "#58595D",
                        }}
                      >
                        Handle visitor-in, vehicle-in, and vehicle-out entries
                        effortlessly with an organized list of today’s
                        appointments.
                      </p>
                    </div>

                    {/* Quote cutout icon */}
                    <div className="absolute w-12 h-[34px] left-[34px] -top-[15px] bg-[#FDF5FF] flex items-center justify-center">
                      <img
                        src="/assets/images/vector2.png"
                        alt="quote"
                        className="w-[34px] h-[34px] object-contain"
                      />
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="w-full flex justify-end mb-10">
                    <button className="box-border flex flex-row items-center justify-center p-[6px_24px] bg-[#C147E9] border-2 border-[#2E2F35] shadow-[3px_3px_0px_#2E2F35] rounded-lg w-[124px] h-9">
                      <span className="font-['Poppins'] font-semibold text-[16px] leading-6 tracking-[1.2px] uppercase text-white">
                        Explore
                      </span>
                    </button>
                  </div>
                </div>

                {/* Illustration (Bottom) */}
                <div className="flex justify-end w-full">
                  <div className="w-[173px] h-[300px]">
                    <img
                      src="/assets/images/visitor/33.png"
                      alt="illustration"
                      className="w-full h-full object-contain -mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Feature 3 (Image Left, Text Right) */}
            <div
              className="flex flex-row"
              style={{
                width: "1280px",
                height: "639px",
                gap: "24px",
                margin: "0 auto",
              }}
            >
              {/* IMAGE BLOCK - 978px */}
              <div
                style={{
                  width: "978px",
                  height: "639px",
                  borderRadius: "48px",
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "flex",
                }}
              >
                <img
                  src="/assets/images/visitor/4.png"
                  alt="Visitor Details Form"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TEXT BLOCK - 278px */}
              <div
                style={{
                  width: "278px",
                  height: "639px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <div>
                  {/* Title with icon */}
                  <div className="flex flex-row items-start gap-2 w-full mb-4">
                    <img
                      src="/assets/images/visitor/thumb.png"
                      alt="illustration"
                      className="w-8 h-8 mt-[2px]"
                    />
                    <h3 className="font-['Poppins'] font-semibold text-[20px] leading-7 tracking-[-0.624px] text-[#C147E9] w-[246px]">
                      Capture Visitor Details <br />
                      with a Simple, Smart Form
                    </h3>
                  </div>

                  {/* Dashed Quote box */}
                  <div className="relative w-[278px] h-[152px] isolate bg-transparent mb-10">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 278 152"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="276"
                        height="150"
                        rx="15"
                        ry="15"
                        stroke="#C147E9"
                        strokeWidth="2"
                        strokeDasharray="11 11"
                      />
                    </svg>

                    <div
                      className="relative flex flex-col items-start gap-4 rounded-[15px] w-full h-full"
                      style={{ padding: "24px" }}
                    >
                      <p
                        className="w-[230px]"
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "#58595D",
                        }}
                      >
                        Collect essential visitor information, purpose of visit,
                        documents, and approvals in one quick digital form.
                      </p>
                    </div>

                    {/* Quote cutout icon */}
                    <div className="absolute w-12 h-[34px] left-[34px] -top-[15px] bg-[#FDF5FF] flex items-center justify-center">
                      <img
                        src="/assets/images/vector2.png"
                        alt="quote"
                        className="w-[34px] h-[34px] object-contain"
                      />
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="w-full flex justify-start mb-10">
                    <button className="box-border flex flex-row items-center justify-center p-[6px_24px] bg-[#C147E9] border-2 border-[#2E2F35] shadow-[3px_3px_0px_#2E2F35] rounded-lg w-[124px] h-9">
                      <span className="font-['Poppins'] font-semibold text-[16px] leading-6 tracking-[1.2px] uppercase text-white">
                        Explore
                      </span>
                    </button>
                  </div>
                </div>

                {/* Illustration */}
                <div className="flex justify-start w-full">
                  <div className="w-[240px] h-[310px]">
                    <img
                      src="/assets/images/visitor/44.png"
                      alt="illustration"
                      className="w-full h-full object-contain -mt-1 -scale-x-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Feature 4 (Image Right, Text Left) */}
            <div
              className="flex flex-row-reverse"
              style={{
                width: "1280px",
                height: "639px",
                gap: "24px",
                margin: "0 auto",
              }}
            >
              {/* IMAGE BLOCK - 978px */}
              <div
                style={{
                  width: "978px",
                  height: "639px",
                  borderRadius: "48px",
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "flex",
                }}
              >
                <img
                  src="/assets/images/visitor/5.png"
                  alt="Vehicle Management Dashboard"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TEXT BLOCK - 278px */}
              <div
                style={{
                  width: "278px",
                  height: "639px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <div>
                  {/* Title with icon */}
                  <div className="flex flex-row items-start gap-2 w-full mb-6">
                    <img
                      src="/assets/images/visitor/thumb.png"
                      alt="illustration"
                      className="w-8 h-8 mt-[2px]"
                    />
                    <h3 className="font-['Poppins'] font-semibold text-[20px] leading-7 tracking-[-0.624px] text-[#b455f2] w-[246px]">
                      Store and Manage All <br />
                      Visitor Vehicle Records
                    </h3>
                  </div>

                  {/* Dashed Quote box */}
                  <div className="relative w-[278px] h-[178px] isolate bg-transparent mb-6">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 278 178"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="276"
                        height="176"
                        rx="15"
                        ry="15"
                        stroke="#b455f2"
                        strokeWidth="2"
                        strokeDasharray="11 11"
                      />
                    </svg>

                    <div
                      className="relative flex flex-col items-start gap-4 rounded-[15px] w-full h-full"
                      style={{ padding: "24px" }}
                    >
                      <p
                        className="w-[230px]"
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "#4b5563",
                        }}
                      >
                        Maintain detailed vehicle information, ownership data,
                        and visit history for enhanced security and tracking.
                      </p>
                    </div>

                    {/* Quote cutout icon */}
                    <div className="absolute w-12 h-[34px] left-[34px] -top-[15px] bg-[#FDF5FF] flex items-center justify-center">
                      <img
                        src="/assets/images/vector2.png"
                        alt="quote"
                        className="w-[34px] h-[34px] object-contain"
                      />
                    </div>
                  </div>
                            <br/>
                  {/* Explore Button */}
                    <div className="w-full flex justify-end mt-0 mb-2">
                    <button className="box-border flex flex-row items-center justify-center p-[6px_24px] bg-[#b455f2] border-2 border-[#2E2F35] shadow-[3px_3px_0px_#2E2F35] rounded-lg w-[124px] h-9">
                      <span className="font-['Poppins'] font-semibold text-[16px] leading-6 tracking-[1.2px] uppercase text-white">
                        Explore
                      </span>
                    </button>
                  </div>
                </div>

                {/* Illustration */}
                <div className="flex justify-end w-full">
                  <div className="w-[193px] h-[320px]">
                    <img
                      src="/assets/images/visitor/55.png"
                      alt="illustration"
                      className="w-full h-full object-contain -mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ✅ END wrapper */}
        </div>
      </section>

      <Benefits />
      <CallToAction />
    </div>
  );
};

export default VisitorManagement;
