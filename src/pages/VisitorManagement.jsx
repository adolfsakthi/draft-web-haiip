import React from 'react'
import Hero from '../components/visitor/Hero'
import Benefits from '../components/visitor/Benefits'
import CallToAction from '../components/visitor/CallToAction'

const VisitorManagement = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <Hero />


            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP ROW (3 items) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 text-center border-b border-[#d9468f]">

                        {/* Item 1 */}
                        <div className="px-10 py-16 border-r border-[#d9468f] md:last:border-r-0">
                            <img src="/assets/images/visitor/calender.png" alt="" className="mx-auto mb-6 w-10 h-10" />
                            <h3 className="text-lg font-semibold mb-4">Visitor Dashboard</h3>
                            <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
                                Monitor real-time visitor activity with insights on total visitors,
                                frequent visits, and department-wise footfall.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="px-10 py-16 border-r border-[#d9468f] md:last:border-r-0">
                            <img src="/assets/images/visitor/calender.png" alt="" className="mx-auto mb-6 w-10 h-10" />
                            <h3 className="text-lg font-semibold mb-4">Visitor Appointments</h3>
                            <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
                                Track visitor-in, vehicle-in, and vehicle-out entries with a clear
                                list of scheduled and completed appointments.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="px-10 py-16">
                            <img src="/assets/images/visitor/calender.png" alt="" className="mx-auto mb-6 w-10 h-10" />
                            <h3 className="text-lg font-semibold mb-4">Visitor Registration</h3>
                            <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
                                Capture visitor details, visit purpose, and approvals using a quick
                                and user-friendly registration form.
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM ROW (2 items, centered) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 text-center max-w-4xl mx-auto">

                        {/* Item 4 */}
                        <div className="px-10 py-16 border-r border-[#d9468f]">
                            <img src="/assets/images/visitor/calender.png" alt="" className="mx-auto mb-6 w-10 h-10" />
                            <h3 className="text-lg font-semibold mb-4">Vehicle Management</h3>
                            <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
                                Maintain complete records of visitor vehicles with owner details,
                                visit history, and entry/exit tracking.
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="px-10 py-16">
                            <img src="/assets/images/visitor/calender.png" alt="" className="mx-auto mb-6 w-10 h-10" />
                            <h3 className="text-lg font-semibold mb-4">Reports & Analytics</h3>
                            <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
                                Generate detailed visitor and vehicle reports to improve security,
                                compliance, and operational visibility.
                            </p>
                        </div>
                    </div>

                </div>
            </section>





            {/* What's about VMS Section */}
            <section className="py-24 bg-[#fdf2ff]">
                <div className="max-w-[1600px] mx-auto px-6">


                    {/* Heading */}
                    <div className="relative text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
                            What's about VMS?
                        </h2>

                        {/* Badge */}
                        <span className="hidden md:inline-block absolute -top-6 right-25 bg-[#b455f2] text-white text-xs font-semibold px-5 py-1 rounded-full rotate-[10deg] shadow">
                            YOUR IDEA STARTS HERE
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row items-start gap-16">

                        {/* LEFT: Dashboard */}
                        <div className="lg:w-2/3 w-full flex justify-center">
                            <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-5xl">
                                <img
                                    src="/assets/images/visitor/2.png"
                                    alt="VMS Dashboard"
                                    className="rounded-[24px] w-full"
                                />
                            </div>
                        </div>

                        {/* RIGHT: Text + CTA + Illustration */}
                        <div className="lg:w-1/3 w-full flex flex-col items-start">

                            <h3 className="text-lg font-semibold text-[#b455f2] mb-6 flex items-center gap-2">
                                <img
                                    src="/assets/images/visitor/thumb.png"
                                    alt="illustration"
                                    className="w-7"
                                />Track All Visitors in Real Time
                            </h3>

                            {/* Dashed Quote Box */}
                            <div className="relative border-2 border-dashed border-[#b455f2] rounded-xl p-6 text-sm text-[#4b5563] mb-8 leading-relaxed">
                                <span className="absolute -top-4 left-4 text-3xl text-[#b455f2]">“</span>
                                Get instant insights on total visitors, frequent visitors,
                                and department-wise footfall with a smart visual dashboard.
                            </div>

                            {/* Explore Button */}
                            <button className="border-2 border-[#b455f2] text-[#b455f2] font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#b455f2] hover:text-white transition mb-16">
                                EXPLORE
                            </button>

                            {/* Illustration */}
                            <img
                                src="/assets/images/visitor/22.png"
                                alt="illustration"
                                className="w-40 self-end"
                            />
                        </div>

                    </div>


                    <br /><br />




                    {/* Feature 2: Manage visitor and vehicle check in seamlessly (Reversed) */}
                    <div className="flex flex-col lg:flex-row-reverse items-start gap-16">

                        {/* RIGHT: Dashboard */}
                        <div className="lg:w-2/3 w-full flex justify-center">
                            <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-5xl">
                                <img
                                    src="/assets/images/visitor/3.png"
                                    alt="Visitor and Vehicle Check-in Dashboard"
                                    className="rounded-[24px] w-full"
                                />
                            </div>
                        </div>

                        {/* LEFT: Text + CTA + Illustration */}
                        <div className="lg:w-1/3 w-full flex flex-col items-start">

                            <h3 className="text-lg font-semibold text-[#b455f2] mb-6 flex items-start gap-2">
                                <img
                                    src="/assets/images/visitor/thumb.png"
                                    alt="illustration"
                                    className="w-7"
                                /> Manage Visitor and <br />
                                Vehicle Check-Ins Seamlessly
                            </h3>

                            {/* Dashed Quote Box */}
                            <div className="relative border-2 border-dashed border-[#b455f2] rounded-xl p-6 text-sm text-[#4b5563] mb-8 leading-relaxed">
                                <span className="absolute -top-4 left-4 text-3xl text-[#b455f2]">“</span>
                                Handle visitor-in, vehicle-in, and vehicle-out entries
                                effortlessly with an organized list of today’s appointments.
                            </div>

                            {/* Explore Button */}
                            <button className="border-2 border-[#b455f2] text-[#b455f2] font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#b455f2] hover:text-white transition mb-16">
                                EXPLORE
                            </button>

                            {/* Illustration */}
                            <img
                                src="/assets/images/visitor/33.png"
                                alt="illustration"
                                className="w-40 self-end"
                            />
                        </div>

                    </div>





                    <br />
                    <br />




                    {/* Feature 3: Capture visitor details with a form */}
                    <div className="flex flex-col lg:flex-row items-start gap-16">

                        {/* LEFT: Modal form dashboard */}
                        <div className="lg:w-2/3 w-full flex justify-center">
                            <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-5xl">
                                <img
                                    src="/assets/images/visitor/4.png"
                                    alt="Visitor Details Form"
                                    className="rounded-[24px] w-full"
                                />
                            </div>
                        </div>

                        {/* RIGHT: Text + CTA + Illustration */}
                        <div className="lg:w-1/3 w-full flex flex-col items-start">

                            <h3 className="text-lg font-semibold text-[#b455f2] mb-6 flex items-start gap-2">
                                <img
                                    src="/assets/images/visitor/thumb.png"
                                    alt="illustration"
                                    className="w-7"
                                /> Capture Visitor Details <br />
                                with a Simple, Smart Form
                            </h3>

                            {/* Dashed Quote Box */}
                            <div className="relative border-2 border-dashed border-[#b455f2] rounded-xl p-6 text-sm text-[#4b5563] mb-8 leading-relaxed">
                                <span className="absolute -top-4 left-4 text-3xl text-[#b455f2]">“</span>
                                Collect essential visitor information, purpose of visit,
                                documents, and approvals in one quick digital form.
                            </div>

                            {/* Explore Button */}
                            <button className="border-2 border-[#b455f2] text-[#b455f2] font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#b455f2] hover:text-white transition mb-16">
                                EXPLORE
                            </button>

                            {/* Illustration */}
                            <img
                                src="/assets/images/visitor/44.png"
                                alt="illustration"
                                className="w-50 self-left"
                            />
                        </div>

                    </div>
                    <br />
                    <br />






                    {/* Feature 4: Store and manage all visitor vehicle records (Reversed) */}
                    <div className="flex flex-col lg:flex-row-reverse items-start gap-16">

                        {/* RIGHT: Vehicle dashboard */}
                        <div className="lg:w-2/3 w-full flex justify-center">
                            <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-5xl">
                                <img
                                    src="/assets/images/visitor/5.png"
                                    alt="Vehicle Management Dashboard"
                                    className="rounded-[24px] w-full"
                                />
                            </div>
                        </div>

                        {/* LEFT: Text + CTA + Illustration */}
                        <div className="lg:w-1/3 w-full flex flex-col items-start">

                            <h3 className="text-lg font-semibold text-[#b455f2] mb-6 flex items-start gap-2">
                                <img
                                    src="/assets/images/visitor/thumb.png"
                                    alt="illustration"
                                    className="w-7"
                                /> Store and Manage All <br />
                                Visitor Vehicle Records
                            </h3>

                            {/* Dashed Quote Box */}
                            <div className="relative border-2 border-dashed border-[#b455f2] rounded-xl p-6 text-sm text-[#4b5563] mb-8 leading-relaxed">
                                <span className="absolute -top-4 left-4 text-3xl text-[#b455f2]">“</span>
                                Maintain detailed vehicle information, ownership data,
                                and visit history for enhanced security and tracking.
                            </div>

                            {/* Explore Button */}
                            <button className="border-2 border-[#b455f2] text-[#b455f2] font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#b455f2] hover:text-white transition mb-16">
                                EXPLORE
                            </button>

                            {/* Illustration */}
                            <img
                                src="/assets/images/visitor/55.png"
                                alt="illustration"
                                className="w-50 self-right"
                            />
                        </div>

                    </div>


                    <Benefits />

                </div>
            </section>

            <CallToAction />

        </div>
    )
}

export default VisitorManagement
