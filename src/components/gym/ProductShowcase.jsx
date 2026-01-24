import React from 'react';

import Rect1 from '../../assets/images/gym/Rectangle1.png';
import Rect2 from '../../assets/images/gym/Rectangle2.png';
import Rect3 from '../../assets/images/gym/Rectangle3.png';
import Rect4 from '../../assets/images/gym/Rectangle4.png';
import Rect5 from '../../assets/images/gym/Rectangle5.png';
import Rect6 from '../../assets/images/gym/Rectangle6.png';
import Person1 from '../../assets/images/gym/rectangle-person1.png';
import Person2 from '../../assets/images/gym/rectangle-person2.png';
import Person3 from '../../assets/images/gym/rectangle-person3.png';

const persons = [Person1, Person2, Person3];

const sections = [
    {
        title: 'Smart Front Desk Control',
        desc: 'Handle member flow, billing updates, and daily activity from a single, distraction-free workspace. Built to help front desk staff stay fast, accurate, and in control during peak gym hours.',
        image: Rect1,
    },
    {
        title: 'Enquiry Management Workspace',
        desc: 'Capture, review, and organize all member enquiries in one structured flow. From first contact to follow-up, this page helps your team respond faster and track intent clearly.',
        image: Rect2,
    },
    {
        title: 'Expense Tracking & Control',
        desc: 'Record, categorize, and review daily gym expenses with clarity. Maintain accurate cost records and monitor spending patterns effortlessly.',
        image: Rect3,
    },
    {
        title: 'Package & Pricing Configuration',
        desc: 'Create and manage gym packages with clear pricing, durations, and rules. Apply branch-level offers easily.',
        image: Rect4,
    },
    {
        title: 'Purchase & Inventory Records',
        desc: 'Track purchase orders, vendors, and inventory movements for each branch with complete transparency.',
        image: Rect5,
    },
    {
        title: 'Centralized Reports & Insights',
        desc: 'Generate detailed reports for members, enquiries, attendance, and revenue across branches.',
        image: Rect6,
    },
];

export const ProductShowcase = () => {
    return (
        <section className="py-24 bg-[#ecfdf3]">
            <div className="max-w-[1600px] mx-auto px-6">

                {/* Heading */}
                <div className="relative text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">
                        What's about GYM?
                    </h2>

                    {/* Badge */}
                    <span className="hidden md:inline-block absolute -top-6 right-25 bg-[#22c55e] text-white text-xs font-semibold px-5 py-1 rounded-full rotate-[10deg] shadow">
                        YOUR IDEA STARTS HERE
                    </span>
                </div>

                <div className="space-y-32">
                    {sections.map((section, index) => {
                        const isReverse = index % 2 !== 0;
                        const personImage = persons[index % persons.length];

                        return (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-start gap-16 ${isReverse ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* IMAGE BLOCK */}
                                <div className="lg:w-2/3 w-full flex justify-center">
                                    <div className="bg-black rounded-[36px] p-4 shadow-2xl w-full max-w-5xl">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="rounded-[24px] w-full"
                                        />
                                    </div>
                                </div>

                                {/* TEXT BLOCK */}
                                <div className="lg:w-1/3 w-full flex flex-col items-start">
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-[#16a34a] mb-6 flex items-start gap-2">
                                        <img
                                            src="/assets/images/visitor/thumb.png"
                                            alt="illustration"
                                            className="w-7"
                                        />
                                        {section.title}
                                    </h3>

                                    {/* Dashed Quote Box */}
                                    <div className="relative border-2 border-dashed border-[#22c55e] rounded-xl p-6 text-sm text-[#4b5563] mb-8 leading-relaxed">
                                        <span className="absolute -top-4 left-4 text-3xl text-[#22c55e]">“</span>
                                        {section.desc}
                                    </div>

                                    {/* Explore Button */}
                                    <button
                                        className="
                                            bg-[#22c55e]
                                            text-white
                                            font-extrabold
                                            tracking-wider
                                            px-6
                                            py-2.5
                                            rounded-lg
                                            border-2
                                            border-black
                                            shadow-[3px_3px_0px_#000]
                                            hover:translate-x-[1px]
                                            hover:translate-y-[1px]
                                            hover:shadow-[2px_2px_0px_#000]
                                            transition-all
                                            mb-8
                                        "
                                    >
                                        EXPLORE
                                    </button>

                                    {/* PERSON ILLUSTRATION */}
                                    <img
                                        src={personImage}
                                        alt="Illustration"
                                        className="w-32"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </section>

    );
};
