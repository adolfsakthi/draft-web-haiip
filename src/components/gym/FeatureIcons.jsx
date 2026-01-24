import React from 'react';
import featureIcon from '../../assets/images/gym/feature-icon.png';

const features = [
    { title: 'Members & Check-ins', desc: 'Track member profiles, daily check-ins, attendance history, and membership status from one place.' },
    { title: 'Smart Class Scheduler', desc: 'Manage workout schedules, trainer sessions, and batch timings with easy rescheduling support.' },
    { title: 'Billing & Payments', desc: 'Handle membership fees, renewals, discounts, and payment history with secure, organized billing.' },
    { title: 'Packages & Pricing', desc: 'Create flexible membership plans with custom durations, pricing rules, and branch-wise offers.' },
    { title: 'Enquiries & Follow-ups', desc: 'Capture walk-in and online enquiries, track follow-ups, and convert leads into active members.' },
    { title: 'Reports & Analytics', desc: 'Generate detailed reports on members, revenue, attendance, and performance for better decisions.' },
    { title: 'Staff Management', desc: 'Manage multiple branches, trainers, and front desk staff with role-based access control.' },
    { title: 'Notifications', desc: 'Send alerts for renewals, pending payments, expiring packages, and important updates.' },
];

export const FeatureIcons = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto relative">
            {/* GRID */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {/* VERTICAL DIVIDERS (LG only) */}
                <div className="hidden lg:block absolute top-16 bottom-16 left-1/4 gradient-divider-vertical" />
                <div className="hidden lg:block absolute top-16 bottom-16 left-1/2 gradient-divider-vertical" />
                <div className="hidden lg:block absolute top-16 bottom-16 left-3/4 gradient-divider-vertical" />

                {/* HORIZONTAL DIVIDER (LG only) */}
                <div className="hidden lg:block absolute left-16 right-16 top-1/2 gradient-divider-horizontal" />

                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center p-10"
                    >
                        <div className="mb-6">
                            <img
                                src={featureIcon}
                                alt={feature.title}
                                className="w-12 h-12 object-contain"
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {feature.title}
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 max-w-xs">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
