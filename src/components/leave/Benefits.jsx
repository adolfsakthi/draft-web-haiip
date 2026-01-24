// Benefits grid section (exact flat grid with dividers)
export default function Benefits() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3  border-[#d9468f]">

          {[
            {
              title: "Simplify leave requests and approvals with ease.",
              desc: "Employees can apply for leave instantly, while managers review and approve with just one click.",
            },
            {
              title: "Generate custom leave reports for better insights.",
              desc: "Access detailed leave summaries, department-wise reports, and trend analytics tailored to your needs.",
            },
            {
              title: "Customize leave policies to fit your organization.",
              desc: "Set yearly limits, carry-forward rules, holidays, and leave types to match your company policies perfectly.",
            },
            {
              title: "Automate leave calculations for error-free management.",
              desc: "Auto-calculate entitlements, balances, accruals, and deductions without manual efforts or mistakes.",
            },
            {
              title: "Secure and compliant employee leave data.",
              desc: "Your data is protected with enterprise-grade security and strict access-control management.",
            },
            {
              title: "Get 24/7 support whenever you need it.",
              desc: "Our HR support team is available around the clock via chat and call to assist with any LMS queries.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                px-10 py-14 text-center
                border-r border-b border-[#d9468f]
                md:[&:nth-child(3n)]:border-r-0
                md:[&:nth-last-child(-n+3)]:border-b-0
              `}
            >
              <h3 className="text-lg font-semibold text-black mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-[#64748b] leading-relaxed max-w-md mx-auto">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
