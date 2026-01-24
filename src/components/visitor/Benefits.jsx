export default function Benefits() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3">

          {[
            {
              title: "Manage visitor check-ins and security with ease",
              desc: "Easily handle visitor registrations, verify identity, and streamline entry processes for a smooth front-desk workflow.",
              bold: false,
            },
            {
              title: "Generate custom visitor reports for smarter insights",
              desc: "Access detailed visitor history, entry/exit logs, and security patterns – create custom reports to fit your needs.",
              bold: false,
            },
            {
              title: "Personalize visitor badges to match your company branding",
              desc: "Customize badge layouts, logos, colors, and access levels to align with your organization’s identity and security rules.",
              bold: false,
            },
            {
              title: "Automate visitor check-ins for faster, error-free processing",
              desc: "Enable digital forms, auto-approvals, instant host notifications, and seamless visitor flow without paperwork.",
              bold: true,
            },
            {
              title: "Fully secure & compliant for improved safety",
              desc: "Your visitor and vehicle data is protected with enterprise-grade security, access control, and audit-ready logs.",
              bold: true,
            },
            {
              title: "Get 24/7 support whenever you need it",
              desc: "Our team is here around the clock to help you with visitor workflows, access management, and technical support.",
              bold: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                px-12 py-16 text-center
                border-r border-b
                border-[rgba(247,102,128,0.8)]
                md:[&:nth-child(3n)]:border-r-0
                md:[&:nth-last-child(-n+3)]:border-b-0
              `}
            >
              <h3
                className={`mb-5 leading-snug ${
                  item.bold
                    ? "text-xl font-bold text-black"
                    : "text-xl font-medium text-black"
                }`}
              >
                {item.title}
              </h3>

              <p className="text-[15px] text-[#64748b] leading-relaxed max-w-[340px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
