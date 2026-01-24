import React from 'react';

export const CallToAction = () => {
    return (
        <section className="bg-[#22d3ee] py-20 px-4 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-90"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Try the GYM for free and experience effortless automation.
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Hassle-free migration with no hidden charges — a one-stop solution for sales, marketing, and operations.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <button className="bg-white text-blue-500 font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:bg-gray-50 transition-colors min-w-[220px]">
                        Get a Free Demo
                    </button>

                    <a href="#" className="text-white font-semibold underline decoration-2 underline-offset-4 hover:text-blue-50">
                        Start Your 7 Days Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
};
export default CallToAction;
