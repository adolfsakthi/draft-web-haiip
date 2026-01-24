import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e6f7ef] via-[#e6f7ef] to-white text-center px-4">

            {/* Main Headline */}
            <h1 className="max-w-5xl mx-auto text-8xl md:text-[6.5rem] leading-[1.05] font-bold text-[#004d25] mb-6 tracking-tight">
                Simplify GYM
                <br />
                Operations
            </h1>


            {/* Subheadline */}
            <p className="max-w-3xl mx-auto text-lg md:text-[1.35rem] leading-relaxed text-[#375a46] mb-12 font-medium text-slate-600">
                Streamline memberships, check-ins, payments, and daily operations with a fast, all-in-one gym management system.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
                <button className="bg-[#10b946] hover:bg-[#0da03c] text-white text-lg font-bold px-8 py-3.5 rounded-md transition-transform active:scale-95 shadow-sm min-w-[200px]">
                    Start Free Trial
                </button>
                <button className="bg-transparent border border-[#10b946] text-[#10b946] hover:bg-[#10b946] hover:text-white text-lg font-medium px-8 py-3.5 rounded-md transition-colors min-w-[200px]">
                    Book a Demo
                </button>
            </div>

            {/* Learn More Indicator */}
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center opacity-50 animate-bounce-slow">
                <span className="text-sm text-gray-500 mb-2 font-medium">Learn more</span>
                <ArrowDown className="w-4 h-4 text-gray-400" />
            </div>

        </section>
    );
};
