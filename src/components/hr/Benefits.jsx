import React from 'react';

// Benefits grid section (exact flat grid with dividers)
export default function Benefits() {
    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3  border-[#d9468f]">

                    {[
                        {
                            title: "Manage shifts and staff allocation with ease.",
                            desc: "Create schedules, assign duties, and handle shift rotations effortlessly.",
                        },
                        {
                            title: "Generate accurate HR reports for smarter insights.",
                            desc: "Access ready-made reports or create custom HR analytics based on your needs.",
                        },
                        {
                            title: "Automate attendance for faster, error-free processing.",
                            desc: "Reduce manual corrections with real-time syncing, reminders, and automated calculations.",
                        },
                        {
                            title: "Fully secure & access-controlled system",
                            desc: "Protect employee data with strict access permissions and industry-standard security.",
                        },
                        {
                            title: "Fully GDPR-ready for secure HR data.",
                            desc: "We follow strict data protection standards to ensure all employee information is securely stored and managed.",
                        },
                        {
                            title: "Get 24/7 support whenever you need it.",
                            desc: "Our HR support team is available around the clock via chat and call to assist with any LMS queries.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`
                px-6 py-8 md:px-10 md:py-14 text-center
                border-b border-[#d9468f] md:border-r
                md:[&:nth-child(3n)]:border-r-0
                md:[&:nth-last-child(-n+3)]:border-b-0
                last:border-b-0
              `
                            }
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
