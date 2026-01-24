import React from 'react';

export const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            {/* Icon Graphic */}
            <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-l-green-400 border-b-green-400 transform -rotate-45"></div>
                <span className="text-blue-900 font-bold text-lg relative z-10">H</span>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
                <h1 className="text-xl font-extrabold text-blue-900 tracking-tight leading-none">
                    HEZEE <span className="text-blue-700">ACCESS</span>
                </h1>
            </div>
        </div>
    );
};
