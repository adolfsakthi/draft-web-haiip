import React from "react";
import logo from "../assets/images/layout/FinalLogo2.png";

export const Logo = () => {
    return (
        <div className="flex items-center">
            <img
                src={logo}
                alt="Hezee Access Logo"
                className="h-9 md:h-[45px] w-auto"
            />
        </div>
    );
};
