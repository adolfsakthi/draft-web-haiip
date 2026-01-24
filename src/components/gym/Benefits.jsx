import React from 'react';

const benefits = [
    {
        title: 'Manage memberships and corporate plans effortlessly',
        desc: 'Easily handle individual and corporate memberships with flexible billing cycles, renewals, and payment tracking.',
    },
    {
        title: 'Create insightful reports for better decisions',
        desc: 'Access ready-made reports or build custom ones to analyze member activity, revenue, and performance trends.',
    },
    {
        title: 'Customize packages to fit your gym brand',
        desc: 'Personalize membership plans, pricing rules, and package terms to match your gym’s offerings and brand identity.',
    },
    {
        title: 'Automate payments and renewal reminders',
        desc: 'Enable auto-renewals, payment alerts, and due reminders to reduce manual follow-ups and missed payments.',
    },
    {
        title: 'Secure data with enterprise-grade protection',
        desc: 'Keep member and payment data safe with robust security standards and controlled system access.',
    },
    {
        title: 'Get reliable support when you need it',
        desc: 'Count on responsive assistance to help your team run daily gym operations smoothly and confidently.',
    },
];

export const Benefits = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 relative">

                {/* GRID WRAPPER */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {/* VERTICAL DIVIDERS (LG only) */}
                    <div className="hidden lg:block absolute top-16 bottom-16 left-1/3 gradient-divider-vertical" />
                    <div className="hidden lg:block absolute top-16 bottom-16 left-2/3 gradient-divider-vertical" />

                    {/* HORIZONTAL DIVIDER (LG only, between rows) */}
                    <div className="hidden lg:block absolute left-16 right-16 top-1/2 gradient-divider-horizontal" />

                    {benefits.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-10 flex flex-col space-y-3"
                        >
                            <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
