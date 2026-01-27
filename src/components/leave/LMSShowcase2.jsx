// Second dashboard block: Employee List (image-accurate)
export default function LMSShowcase2() {
  return (
    <section className="w-full bg-[#eafafd] py-2 flex justify-center">
      <div
        style={{
          width: "1440px",
          padding: "8px",
          boxSizing: "border-box",
        }}
      >
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
          {/* ✅ IMAGE BLOCK - LEFT (978px) */}
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
              src="/assets/images/leave/2.png"
              alt="Employee List Dashboard"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ✅ TEXT BLOCK - RIGHT (278px) */}
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
                  className="w-7 h-7 mt-[2px]"
                />
                <h3 className="font-['Poppins'] font-semibold text-[20px] leading-7 tracking-[-0.624px] text-[#00B0BA] w-[246px]">
                  Access Complete <br />
                  Employee Leave Profiles Instantly
                </h3>
              </div>

              {/* Dashed Quote box */}
              <div className="relative w-[278px] h-[152px] isolate bg-transparent mb-4">
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
                    View employee details, departments, and leave-related
                    information in a clean, searchable directory.
                  </p>
                </div>

                <div className="absolute w-12 h-[34px] left-[34px] -top-[15px] bg-[#eafafd] flex items-center justify-center">
                  <img
                    src="/assets/images/vector.png"
                    alt="quote"
                    className="w-[32px] h-[32px] object-contain"
                  />
                </div>
              </div>

              {/* Explore Button */}
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <button className="box-border flex flex-row items-center justify-center p-[6px_24px] bg-[#00B0BA] border-2 border-[#2E2F35] shadow-[3px_3px_0px_#2E2F35] rounded-lg w-[124px] h-9">
                  <span className="font-['Poppins'] font-semibold text-[16px] leading-6 tracking-[1.2px] uppercase text-white">
                    Explore
                  </span>
                </button>
              </div>
            </div>

            {/* Illustration (Bottom) change this  */}
            <div className="flex justify-start ">
              <div className="w-[205px] h-[430px]">   
                <img
                  src="/assets/images/leave/22.png"
                  alt="illustration"
                  className="w-full h-full object-contain -scale-x-100 -translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
