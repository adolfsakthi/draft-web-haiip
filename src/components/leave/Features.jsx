// Features grid section (exact flat grid like image)
export default function Features() {
  return (
    <section className="w-full bg-[#fdf6e8] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Leave Types & Policies",
              desc: "Easily define leave categories, yearly limits, and carry-forward rules for your entire organization.",
            },
            {
              title: "Leave Requests & Approvals",
              desc: "Employee leave submissions with a smooth approval workflow and instant status updates.",
            },
            {
              title: "Employee Leave Records",
              desc: "Access complete leave histories with quick filters for date, department, and employee details.",
            },
            {
              title: "Users & Access Controls",
              desc: "Securely manage who can view, request, approve, or modify leave data with role-based access.",
            },
            {
              title: "Leave Balance Tracking",
              desc: "Automatically track available, used, and upcoming leave balances for each employee in real time.",
            },
            {
              title: "Team & Department View",
              desc: "View leave distribution across teams to avoid conflicts and ensure proper workforce coverage.",
            },
            {
              title: "Leave Reports & Analytics",
              desc: "Generate detailed reports on leave usage, trends, and department-wise summaries in one click.",
            },
            {
              title: "Holiday & Weekend Configuration",
              desc: "Add holidays, weekly-offs, and custom work calendars to ensure accurate leave calculations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                px-8 py-14 flex flex-col items-center text-center
    border-r border-b border-[#b8a36a]
    lg:[&:nth-child(4n)]:border-r-0
    lg:[&:nth-last-child(-n+4)]:border-b-0
    md:[&:nth-last-child(-n+2)]:border-b-0
              `}
            >
              <span className="mb-6">
                <img
                  src="/assets/images/leave/calender.png"
                  alt=""
                  className="w-12 h-12"
                />
              </span>

              <h3 className="text-base font-semibold text-[#2b2b2b] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#5f5f5f] leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
