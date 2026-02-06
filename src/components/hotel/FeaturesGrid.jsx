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
    { icon: icon1, title: "Folios & Payments", desc: "Smart folios and contactless payments." },
    { icon: icon2, title: "Smart Calendar", desc: "Drag & drop booking control." },
    { icon: icon3, title: "Rates & Inventory", desc: "Integrated channel management." },
    { icon: icon4, title: "Housekeeping", desc: "Live arrivals & departures." },
    { icon: icon5, title: "Billing", desc: "Automated guest billing." },
    { icon: icon6, title: "Groups", desc: "Easy group settlements." },
    { icon: icon7, title: "Integrations", desc: "400+ integrations supported." },
    { icon: icon8, title: "Access Control", desc: "Role-based access control." }
]

const FeaturesGrid = () => (
    <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((f, i) => {
                    const isLastMobile = i === features.length - 1;
                    const isRightEdgeTablet = (i + 1) % 2 === 0;
                    const isBottomEdgeTablet = i >= features.length - 2;
                    const isRightEdgeDesktop = (i + 1) % 4 === 0;
                    const isBottomEdgeDesktop = i >= features.length - 4;

                    return (
                        <div
                            key={i}
                            className={`
                                py-12 px-4
                                flex flex-col items-center text-center gap-6
                                border-pink-400
                                border-0
                                /* Mobile */
                                ${!isLastMobile ? 'border-b' : ''}
                                /* Tablet */
                                ${!isRightEdgeTablet ? 'sm:border-r' : 'sm:border-r-0'}
                                ${!isBottomEdgeTablet ? 'sm:border-b' : 'sm:border-b-0'}
                                /* Desktop */
                                ${!isRightEdgeDesktop ? 'lg:border-r' : 'lg:border-r-0'}
                                ${!isBottomEdgeDesktop ? 'lg:border-b' : 'lg:border-b-0'}
                            `}
                        >
                            <img src={f.icon} alt={f.title} className="w-12 h-12" />
                            <h3 className="font-semibold text-lg">{f.title}</h3>
                            <p className="text-sm text-gray-500 max-w-[240px]">
                                {f.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
)

export default FeaturesGrid
