// Benefits grid section (Exact Figma Design)
export function Benefits() {
  const benefits = [
    {
      title: "Manage memberships and corporate plans effortlessly",
      desc: "Easily handle individual and corporate memberships with flexible billing cycles, renewals, and payment tracking.",
    },
    {
      title: "Create insightful reports for better decisions",
      desc: "Access ready-made reports or build custom ones to analyze member activity, revenue, and performance trends.",
    },
    {
      title: "Customize packages to fit your gym brand",
      desc: "Personalize membership plans, pricing rules, and package terms to match your gym’s offerings and brand identity.",
    },
    {
      title: "Automate payments and renewal reminders",
      desc: "Enable auto-renewals, payment alerts, and due reminders to reduce manual follow-ups and missed payments.",
    },
    {
      title: "Secure data with enterprise-grade protection",
      desc: "Keep member and payment data safe with robust security standards and controlled system access.",
    },
    {
      title: "Get reliable support when you\nneed it",
      desc: "Count on responsive assistance to help your team run daily gym operations smoothly and confidently.",
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
