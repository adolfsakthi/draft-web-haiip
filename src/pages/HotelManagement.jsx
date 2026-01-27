import React from "react"
import Hero from "../components/hotel/Hero"
import FeaturesGrid from "../components/hotel/FeaturesGrid"
import SectionWithImage from "../components/hotel/SectionWithImage"
import FinalCTA from "../components/hotel/FinalCTA"

import img8 from "../assets/images/hotel/img8.png"
import img9 from "../assets/images/hotel/img9.png"
import img10 from "../assets/images/hotel/img10.png"
import img11 from "../assets/images/hotel/img11.png"

import financeDashboard from "../assets/images/hotel/Finance_Overview_Dashboard.png"
import hotelOperationsDashboard from "../assets/images/hotel/Hotel_Operations_Overview_Dashboard.png"
import kitchenOrderManagement from "../assets/images/hotel/Kitchen_Order_Management.png"
import pmsmaindashboard from "../assets/images/hotel/PMS_Main_Dashboard.png"
import posstayview from "../assets/images/hotel/Pms_Stay_View.png"
import possalesdashboard from "../assets/images/hotel/POS_Sales_Dashboard.png"
import propertyoverviewdashboard from "../assets/images/hotel/Property_Overview_Dashboard.png"
import roomavailabilitybookingtimeline from "../assets/images/hotel/Room_Availability&Booking_Timeline.png"
import roomstatusoverview from "../assets/images/hotel/Room_Status_Overview .png"
import reportsinsights from "../assets/images/hotel/Reports&Insights.png"
import PMS_Inventory_Management from "../assets/images/hotel/PMS_Inventory_Management.png"
import inside_picture from "../assets/images/hotel/Inside_pic.png"


import character1 from "../assets/images/hotel/character.png"
import character2 from "../assets/images/hotel/character2.png"
import character3 from "../assets/images/hotel/character3.png"
import character4 from "../assets/images/hotel/character4.png"

const sections = [
    {
        title: "Property Overview Dashboard",
        quote: "A real-time view of arrivals, departures, occupancy, reservations, and housekeeping.",
        image: propertyoverviewdashboard,
        character: character1,
        isReversed: true
    },
    {
        title: "Room Availability & Booking Timeline",
        quote: "View room-wise availability, reservations, check-ins and check-outs.",
        image: roomavailabilitybookingtimeline,
        character: character2,
        isReversed: false
    },
    {
        title: "Room Status Overview",
        quote: "Monitor vacant, occupied, reserved, booked and dirty rooms.",
        image: roomstatusoverview,
        character: character3,
        isReversed: true
    },
    {
        title: "POS Sales Dashboard",
        quote: "Track orders, revenue and preparation status in real time.",
        image: possalesdashboard,
        character: character4,
        isReversed: false
    },
    {
        title: "Kitchen Order Management",
        quote: "Monitor live kitchen orders with preparation timers, item details, and order status to ensure faster service and smooth kitchen operations.",
        image: kitchenOrderManagement,
        character: character1,
        isReversed: true
    },
    {
        title: "Inventory Management",
        quote: "Manage and update stock levels in real time, track usage and wastage, and maintain accurate inventory records for smooth daily operations.",
        image: PMS_Inventory_Management,
        overlayImage: inside_picture, 
        character: character2,
        isReversed: false
    },
    {
        title: "Reports & Insights",
        quote: "Access detailed reports across front office, housekeeping, groups, and revenue to analyze performance and make informed operational decisions.",
        image: reportsinsights,
        character: character3,
        isReversed: true
    },
    {
        title: "Finance Overview Dashboard",
        quote: "Track revenue, expenses, net profit, payments, and occupancy insights in one place to monitor financial performance and make confident business decisions.",
        image: financeDashboard,
        character: character4,
        isReversed: false
    },
    {
        title: "Hotel Operations Overview Dashboard",
        quote: "Track arrivals, departures, in-house guests, occupancy, guest status, reservations, and housekeeping progress—all in one place for faster daily decisions.",
        image: hotelOperationsDashboard,
        character: character1,
        isReversed: true
    }

]

const HotelManagement = () => {
    return (
        <>
            <Hero />

            <div className="mt-20">
                <FeaturesGrid />
            </div>

            {/* PMS SECTION (single yellow background, no white gaps) */}
            <section className="bg-[#fff9e6] mt-20">

                {/* HEADING */}
                <div className="py-20 max-w-[1280px] mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
                        What's about{" "}
                        <span className="relative inline-block">
                            PMS
                            <span className="absolute -top-8 md:-top-10 -right-8 md:-right-24 rotate-[15deg] opacity-0 animate-sticker">
                                <span className="flex items-center justify-center text-white font-bold bg-[#FFD02F] rounded shadow px-3 py-[2px] text-[10px]">
                                    YOUR IDEA STARTS HERE
                                </span>
                            </span>
                        </span>
                        ?
                    </h2>
                </div>

                {/* CONTENT */}
                {sections.map((section, index) => (
                    <SectionWithImage key={index} {...section} />
                ))}
            </section>

            <div className="mt-20">
                <FinalCTA />
            </div>
        </>
    )
}

export default HotelManagement