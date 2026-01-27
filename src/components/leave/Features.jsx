// Features grid section - Exact Figma Design
export default function Features() {
  const features = [
    {
      title: "Leave Types & Policies",
      desc: "Easily define leave categories, yearly limits, and carry-forward rules for your entire organization.",
    },
    {
      title: "Leave Balance Tracking",
      desc: "Automatically track available, used, and upcoming leave balances for each employee in real time.",
    },
    {
      title: "Leave Requests & Approvals",
      desc: "employee leave submissions with a smooth approval workflow and instant status updates.",
    },
    {
      title: "Team & Department View",
      desc: "View leave distribution across teams to avoid conflicts and ensure proper workforce coverage.",
    },
    {
      title: "Employee Leave Records",
      desc: "Access complete leave histories with quick filters for date, department, and employee details.",
    },
    {
      title: "Leave Reports & Analytics",
      desc: "Generate detailed reports on leave usage, trends, and department-wise summaries in one click.",
    },
    {
      title: "Users & Access Controls",
      desc: "Securely manage who can view, request, approve, or modify leave data with role-based access.",
    },
    {
      title: "Holiday & Weekend Configuration",
      desc: "Add holidays, weekly-offs, and custom work calendars to ensure accurate leave calculations.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF6] flex flex-col items-center py-0">
      <div className="relative w-full max-w-[1438px] px-[79px] py-[80px]">
        {/* Features Grid - 4 columns with dividers */}
        <div className="relative flex flex-row justify-between items-center gap-[17px] isolate">
          {/* Column 1 */}
          <div className="flex flex-col gap-[2px] w-[308px]">
            {[features[0], features[1]].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded"
              >
                <img
                  src="/assets/images/leave/calender.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          

          {/* Divider 3 */}
          {/* <div className="w-px h-[416px] bg-gradient-to-b from-[#F76680] to-[rgba(87,0,123,0.1)] rotate-180"></div> */}

              <img
                src="/assets/images/line.png"
                alt="line"
                className="w-px h-[416px]"
              />


          {/* Column 2 */}
          <div className="flex flex-col gap-[2px] w-[308px]">
            {[features[2], features[3]].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded"
              >
                <img
                  src="/assets/images/leave/calender.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider 2 (BOTTOM HALF only) */}
          <img
                src="/assets/images/line.png"
                alt="line"
                className="w-px h-[416px] rotate-180"
              />

          {/* Column 3 */}
          <div className="flex flex-col gap-[2px] w-[308px]">
            {[features[4], features[5]].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded"
              >
                <img
                  src="/assets/images/leave/calender.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[16px] leading-6 tracking-[-0.17px] text-[#303030]">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider 3 (TOP HALF only) */}
          <img
                src="/assets/images/line.png"
                alt="line"
                className="w-px h-[416px]"
              />

          {/* Column 4 */}
          <div className="flex flex-col gap-[2px] w-[308px]">
            {[features[6], features[7]].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-[24px_17px] gap-4 rounded"
              >
                <img
                  src="/assets/images/leave/calender.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-center items-center gap-3">
                  <h3 className="font-['Poppins'] font-medium text-[15px] leading-6 tracking-[-0.17px] text-[#303030]">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins'] font-light text-[14px] leading-[21px] tracking-[-0.07px] text-center text-[#8F8F8F] max-w-[251px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Middle Horizontal gradient divider (NOW VISIBLE) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-[rgba(89,0,123,0.5)] via-[#F76680] to-[rgba(89,0,123,0.5)]" />
          
        </div>
      </div>
    </section>
  );
}
