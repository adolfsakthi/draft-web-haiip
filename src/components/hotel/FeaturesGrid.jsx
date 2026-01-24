import React from "react"
import icon1 from "../../assets/images/hotel/icon1.png"
import icon2 from "../../assets/images/hotel/icon2.png"
import icon3 from "../../assets/images/hotel/icon3.png"
import icon4 from "../../assets/images/hotel/icon4.png"
import icon5 from "../../assets/images/hotel/icon5.png"
import icon6 from "../../assets/images/hotel/icon6.png"
import icon7 from "../../assets/images/hotel/icon7.png"
import icon8 from "../../assets/images/hotel/icon8.png"

const features = [
    {
        title: "Folios & Payments",
        desc: "Simplify guest management with smart folios and contactless payments.",
        icon: icon1
    },
    {
        title: "Smart Calendar",
        desc: "Easily manage bookings with drag-and-drop control and smart allocation.",
        icon: icon2
    },
    {
        title: "Rates & Inventory",
        desc: "Control rates and availability with integrated channel management.",
        icon: icon3
    },
    {
        title: "Housekeeping",
        desc: "Monitor arrivals, departures, and room readiness in one view.",
        icon: icon4
    },
    {
        title: "Billing Automation",
        desc: "Automate folios and enable fast, secure, contactless transactions.",
        icon: icon5
    },
    {
        title: "Groups",
        desc: "Manage group bookings, inquiries, and bulk settlements with ease.",
        icon: icon6
    },
    {
        title: "Integrations",
        desc: "Connect with 400+ integrations to automate business operations.",
        icon: icon7
    },
    {
        title: "Users & Access Control",
        desc: "Create and manage admins, front desk, housekeeping, and accounts teams.",
        icon: icon8
    }
]

const FeaturesGrid = () => {
    return (
        <section className="bg-white py-28">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                    {/* VERTICAL DIVIDERS (LG only) */}
                    <div className="hidden lg:block absolute top-20 bottom-20 left-1/4 gradient-divider-vertical" />
                    <div className="hidden lg:block absolute top-20 bottom-20 left-1/2 gradient-divider-vertical" />
                    <div className="hidden lg:block absolute top-20 bottom-20 left-3/4 gradient-divider-vertical" />

                    {/* HORIZONTAL DIVIDER (LG only) */}
                    <div className="hidden lg:block absolute left-20 right-20 top-1/2 gradient-divider-horizontal" />

                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center p-10 pt-6"
                        >
                            {/* ICON / IMAGE */}
                            <div className="mb-6">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-24 h-24 object-contain"
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold mb-2">
                                {feature.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
                                {feature.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default FeaturesGrid
