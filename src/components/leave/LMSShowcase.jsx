// Section: What's about LMS? – exact UI like image
export default function LMSShowcase() {
  return (
    <section className="w-full bg-[#ECFEFF] py-[38px] flex justify-center">
      <div
        style={{
          width: "1440px",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <div className="relative flex flex-col items-center mb-10">
          <h2
            className="text-[#000000] text-center"
            style={{
              fontFamily: '"Zen Dots", sans-serif',
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "58px",
              marginBottom: "40px",
            }}
          >
            What's about LMS?
          </h2>

          {/* Badge */}
          <span
            className="hidden md:inline-block absolute -top-4 bg-[#00b6f3] rotate-[10deg] text-white text-xs font-semibold px-4 py-1 rounded-full shadow"
            style={{ right: "18rem" }}
          >
            YOUR IDEA STARTS HERE
          </span>
        </div>

        {/* ✅ Gym ProductShowcase positioning row */}
        <div
          className="flex flex-row"
          style={{
            width: "1280px",
            height: "639px",
            gap: "12px",
            margin: "0 auto",
          }}
        >
          {/* ✅ TEXT BLOCK - 278px (NOW LEFT) */}
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
            {/* Top Content */}
            <div>
              {/* Title with icon */}
              <div className="flex flex-row items-start gap-2 w-full mb-3">
                <img
                  src="/assets/images/leave/thumb.png"
                  alt="illustration"
                  className="w-7 h-7 mt-[2px]"  ///change this 
                />
                <h3 className="font-['Poppins'] font-semibold text-[20px] leading-7 tracking-[-0.624px] text-[#00B0BA] w-[246px]">
                  Manage Leave Policies <br />
                  and Requests with Ease
                </h3>
              </div>

              {/* Dashed Quote box */}
              <div className="relative w-[278px] h-[152px] isolate bg-transparent mb-4">
                {/* Dashed border */}
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
                    stroke="#00B0BA"
                    strokeWidth="2"
                    strokeDasharray="11 11"
                  />
                </svg>

                {/* Content */}
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
                    Define leave types, set yearly limits, and track all employee
                    leave requests in one organized view.
                  </p>
                </div>

                {/* Quote cutout icon */}
                <div className="absolute w-12 h-[34px] left-[34px] -top-[15px] bg-[#ECFEFF] flex items-center justify-center">
                  <img
                    src="/assets/images/vector.png"
                    alt="quote"
                    className="w-[32px] h-[32px] object-contain"
                  />
                </div>
              </div>

              {/* Explore Button (Gym-style auto align = left) */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="box-border flex flex-row items-center justify-center p-[6px_24px] bg-[#00B0BA] border-2 border-[#2E2F35] shadow-[3px_3px_0px_#2E2F35] rounded-lg w-[124px] h-9">
                  <span className="font-['Poppins'] font-semibold text-[16px] leading-6 tracking-[1.2px] uppercase text-white">
                    Explore
                  </span>
                </button>
              </div>
            </div>

            {/* Illustration (Bottom) */}
            <div className="flex justify-end">
              <div className="w-[195px] h-[300px]">
                <img
                  src="/assets/images/leave/11.png"
                  alt="illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* ✅ IMAGE BLOCK - 978px (NOW RIGHT) */}
          <div
            style={{
              width: "940px",
              height: "610px",
              borderRadius: "48px",
              overflow: "hidden",
              flexShrink: 0,
              display: "flex",
            }}
          >
            <img
              src="/assets/images/leave/1.png"
              alt="Dashboard Preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
