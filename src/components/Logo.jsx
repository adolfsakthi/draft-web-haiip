import React from "react";
import logo from "../assets/images/layout/FinalLogo2.png";

export const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img
                src={logo}
                alt="Hezee Access Logo"
                className="h-full w-full object-contain"
            />
        </div>
    );
};
