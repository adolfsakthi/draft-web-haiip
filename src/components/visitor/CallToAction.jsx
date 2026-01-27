import React from 'react';

export const CallToAction = () => {
    return (
        <section
            className="flex flex-col justify-center items-center text-center relative overflow-hidden font-poppins"
            style={{
                width: '100%', // Changed to fit screen/full width
                height: '288px',
                padding: '26px 185px',
                gap: '10px',
                background: 'linear-gradient(92.71deg, #0EA5E9 2.27%, #22D3EE 97.73%)',
                boxSizing: 'border-box',
            }}
        >
            <div className="relative z-10 w-full text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 whitespace-nowrap">
                    Try the GYM for free and experience effortless automation.
                </h2>
                <p className="text-sm md:text-base text-white/90 mb-4 max-w-4xl mx-auto">
                    Hassle-free migration with no hidden charges — a one-stop solution for hotel and vacation rental sales, marketing, and operations.
                </p>

                <div className="flex flex-col items-center gap-2">
                    <button className="bg-white text-blue-500 font-bold text-base px-6 py-2.5 rounded-md shadow-lg hover:bg-gray-50 transition-colors min-w-[200px]">
                        Get a Free Demo
                    </button>

                    <p className="text-white text-sm mt-1">
                        Start Your 7 Days Free Trial
                    </p>
                </div>
            </div>
        </section>
    );
};
export default CallToAction;
