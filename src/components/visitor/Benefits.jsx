export default function Benefits() {
  const benefits = [
    {
      title: "Manage visitor check-ins and security with ease",
      desc: "Easily handle visitor registrations, verify identity, and streamline entry processes for a smooth front-desk workflow.",
    },
    {
      title: "Generate custom visitor reports for smarter insights.",
      desc: "Access detailed visitor history, entry/exit logs, and security patterns – create custom reports to fit your needs.",
    },
    {
      title: "Personalize visitor badges to match your company branding",
      desc: "Customize badge layouts, logos, colors, and access levels to align with your organization’s identity and security rules.",
    },
    {
      title: "Automate visitor check-ins for faster, error-free processing",
      desc: "Enable digital forms, auto-approvals, instant host notifications, and seamless visitor flow without paperwork.",
    },
    {
      title: "Fully secure & compliant for improved safety",
      desc: "Your visitor and vehicle data is protected with enterprise-grade security, access control, and audit-ready logs.",
    },
    {
      title: "Get 24/7 support whenever you need it",
      desc: "Our team is here around the clock to help you with visitor workflows, access management, and technical support.",
    },
  ];



return (
    <section className="w-full bg-white flex justify-center">
      {/* Frame 1984079281 */}
      <div className="relative w-[1440px] h-[544px] flex flex-col items-start p-[80px] isolate bg-white">
        {/* Grid wrapper = 1280x416 */}
        <div className="relative w-[1280px] h-[416px] flex flex-col">
          
          {/* Row 1 */}
          <div className="flex flex-row items-center w-[1280px] h-[192px]">
            {benefits.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-[24px] gap-[24px] w-[426px] h-[192px]"
              >
                <div className="flex flex-col items-center gap-[12px] w-[378px] h-[144px]">
                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[30px] text-center text-black whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center text-[#718096] whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-row items-start w-[1280px] h-[192px]">
            {benefits.slice(3, 6).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-[24px] gap-[24px] w-[426px] h-[192px]"
              >
                <div className="flex flex-col items-center gap-[12px] w-[378px] h-[144px]">
                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[30px] text-center text-black whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-center text-[#718096] whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Vertical Divider Line 1 (Rectangle 26) */}
          <div
  className="absolute w-[1px] h-[295px] left-[426px] top-1/2 -translate-y-1/2"
  style={{
    background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
  }}
/>

          {/* ✅ Vertical Divider Line 2 (Rectangle 27) */}
          <div
  className="absolute w-[1px] h-[295px] left-[852px] top-1/2 -translate-y-1/2"
  style={{
    background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
  }}
/>

          {/* ✅ Horizontal Divider Line (Rectangle 23) */}
          <div
            className="absolute w-[1280px] h-[1px] left-0 top-1/2 -translate-y-1/2"
            style={{
              background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
            }}
          />

        </div>
      </div>
    </section>
  );
}




