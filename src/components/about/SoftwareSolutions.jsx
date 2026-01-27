import React from "react";
import img17 from "../../assets/images/about/img17.png";
import { Users, Receipt, Dumbbell, Building2, Factory, Code } from "lucide-react";

// Helper for the connection icons
const ConnectionIcon = ({ icon: Icon }) => (
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm z-10 shrink-0">
        <Icon size={20} strokeWidth={2.5} />
    </div>
);

// Helper for the cards
const SolutionCard = ({ title, desc, align = "left" }) => (
    <div className={`bg-[#060d25] text-white p-6 rounded-xl w-80 lg:w-96 shadow-xl relative z-20 hover:scale-105 transition-transform duration-300 ${align === "right" ? "text-left" : "text-left"}`}>
        <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
        <p className="text-sm text-gray-300 leading-relaxed font-light opacity-90">
            {desc}
        </p>
    </div>
);

const SoftwareSolutions = () => {
    return (
        <section
            className="relative py-20 lg:py-32 bg-[#f8fbff] overflow-hidden flex justify-center items-center mix-blend-normal"
            style={{ minHeight: '872px', fontFamily: "'Poppins', sans-serif" }}
        >

            {/* BACKGROUND CONCENTRIC CIRCLES IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <img
                    src={img17}
                    alt="Background Pattern"
                    className="w-[1000px] h-auto object-contain opacity-100"
                />
            </div>

            {/* CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center">

                {/* --- LAYOUT GRID --- */}
                {/* We map the positions absolutely relative to the center for precise control matching the radial image */}

                <div className="relative w-full h-[800px] hidden lg:block">

                    {/* TOP LEFT: HRMS */}
                    <div className="absolute top-0 left-[10%] flex items-center gap-6">
                        <SolutionCard
                            title="HRMS & Payroll Software"
                            desc="Employee lifecycle, attendance, leave, and payroll automation."
                        />
                        <ConnectionIcon icon={Users} />
                    </div>

                    {/* TOP RIGHT: POS */}
                    <div className="absolute top-0 right-[10%] flex items-center gap-6 flex-row-reverse">
                        <SolutionCard
                            title="POS & KOT Billing Software"
                            desc="Fast billing and seamless kitchen order management."
                        />
                        <ConnectionIcon icon={Receipt} />
                    </div>


                    {/* MIDDLE LEFT: GYM */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-6">
                        <SolutionCard
                            title="Gym Management Software"
                            desc="Membership, billing, and reporting solutions."
                        />
                        <ConnectionIcon icon={Dumbbell} />
                    </div>

                    {/* MIDDLE RIGHT: HOTEL */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center gap-6 flex-row-reverse">
                        <SolutionCard
                            title="Hotel Management Software"
                            desc="End-to-end property and booking management."
                        />
                        <ConnectionIcon icon={Building2} />
                    </div>


                    {/* BOTTOM LEFT: PRODUCTION */}
                    <div className="absolute bottom-0 left-[10%] flex items-center gap-6">
                        <SolutionCard
                            title="Production Management Software"
                            desc="Inventory, planning, and operational analytics."
                        />
                        <ConnectionIcon icon={Factory} />
                    </div>

                    {/* BOTTOM RIGHT: CUSTOM DEV */}
                    <div className="absolute bottom-0 right-[10%] flex items-center gap-6 flex-row-reverse">
                        <SolutionCard
                            title="Custom Software Development"
                            desc="Web and enterprise applications tailored to business needs."
                        />
                        <ConnectionIcon icon={Code} />
                    </div>

                </div>

                {/* MOBILE VIEW (Stacked) */}
                <div className="lg:hidden grid grid-cols-1 gap-8 mt-20">
                    <div className="flex flex-col items-center text-center gap-3">
                        <ConnectionIcon icon={Users} />
                        <SolutionCard title="HRMS & Payroll Software" desc="Employee lifecycle, attendance, leave, and payroll automation." />
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <ConnectionIcon icon={Receipt} />
                        <SolutionCard title="POS & KOT Billing Software" desc="Fast billing and seamless kitchen order management." />
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <ConnectionIcon icon={Dumbbell} />
                        <SolutionCard title="Gym Management Software" desc="Membership, billing, and reporting solutions." />
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <ConnectionIcon icon={Building2} />
                        <SolutionCard title="Hotel Management Software" desc="End-to-end property and booking management." />
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <ConnectionIcon icon={Factory} />
                        <SolutionCard title="Production Management Software" desc="Inventory, planning, and operational analytics." />
                    </div>
                    <div className="flex flex-col items-center text-center gap-3">
                        <ConnectionIcon icon={Code} />
                        <SolutionCard title="Custom Software Development" desc="Web and enterprise applications tailored to business needs." />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SoftwareSolutions;
