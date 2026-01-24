import React from "react"

const FinalCTA = () => {
    return (
        <section className="bg-white">

            {/* FEATURES GRID */}
            <div className="max-w-7xl mx-auto px-6 py-28 relative">

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 text-center relative">

                    {/* VERTICAL DIVIDERS (md+) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-pink-400" />
                    <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-pink-400" />

                    {/* HORIZONTAL DIVIDER (md+) */}
                    <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-pink-400" />

                    {/* ROW 1 */}
                    <div className="px-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Simplify leave requests and approvals with ease.
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Employees can apply for leave instantly, while managers review
                            and approve with just one click.
                        </p>
                    </div>

                    <div className="px-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Generate custom leave reports for better insights.
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Access detailed leave summaries, department-wise reports, and
                            trend analytics tailored to your needs.
                        </p>
                    </div>

                    <div className="px-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Customize leave policies to fit your organization.
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Set yearly limits, carry-forward rules, holidays, and leave
                            types to match your company policies perfectly.
                        </p>
                    </div>

                    {/* ROW 2 */}
                    <div className="px-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Automate leave calculations for error-free management.
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Auto-calculate entitlements, balances, accruals, and deductions
                            without manual efforts or mistakes.
                        </p>
                    </div>

                    <div className="px-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Secure and compliant employee leave data.
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Your data is protected with enterprise-grade security and strict
                            access-control management.
                        </p>
                    </div>

                    <div className="px-8">
                        <h3 className="text-2xl font-semibold mb-4">
                            Get 24/7 support whenever you need it.
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Our HR support team is available around the clock via chat and
                            call to assist with any LMS queries.
                        </p>
                    </div>

                </div>
            </div>

            {/* FINAL CTA */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-24 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Try the PMS for free and experience effortless automation.
                </h2>

                <p className="text-lg mb-10 max-w-3xl mx-auto">
                    Hassle-free migration with no hidden charges — a one-stop solution
                    for hotel and vacation rental sales, marketing, and operations.
                </p>

                <button className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-100 transition">
                    Get a Free Demo
                </button>

                <p className="mt-4 underline cursor-pointer">
                    Start Your 7 Days Free Trial
                </p>
            </div>

        </section>
    )
}

export default FinalCTA
