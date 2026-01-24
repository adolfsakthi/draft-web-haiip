import React from "react"
import Hero from "../components/hotel/Hero"
import FeaturesGrid from "../components/hotel/FeaturesGrid"
import SectionWithImage from "../components/hotel/SectionWithImage"
import FinalCTA from "../components/hotel/FinalCTA"

// Images
import img8 from "../assets/images/hotel/img8.png"
import img9 from "../assets/images/hotel/img9.png"
import img10 from "../assets/images/hotel/img10.png"
import img11 from "../assets/images/hotel/img11.png"
import img12 from "../assets/images/hotel/img12.png"
import img13 from "../assets/images/hotel/img13.png"

const sections = [
    {
        title: "Property Overview Dashboard",
        quote: "A real-time view of arrivals, departures, occupancy, reservations, and housekeeping — everything you need to manage daily operations quickly and confidently.",
        image: img8,
        isReversed: false // Content Left
    },
    {
        title: "Room Availability & Booking Timeline",
        quote: "View room-wise availability, reservations, check-ins, check-outs, and maintenance blocks across dates to plan occupancy and assignments efficiently.",
        image: img9,
        isReversed: true // Image Left
    },
    {
        title: "Room Status Overview",
        quote: "Quickly view the real-time status of all rooms — including vacant, occupied, reserved, booked, due-out, and dirty — to manage room readiness and guest flow efficiently.",
        image: img10,
        isReversed: false
    },
    {
        title: "POS Sales Dashboard",
        quote: "Track orders, revenue, and preparation status in real time with clear insights into daily sales performance, category-wise revenue, and order completion progress.",
        image: img11,
        isReversed: true
    },
    {
        title: "Kitchen Order Management",
        quote: "Monitor live kitchen orders with preparation timers, item details, and order status to ensure faster service and smooth kitchen operations.",
        image: img9, // Using same image as original
        isReversed: false
    },
    {
        title: "Inventory Management",
        quote: "Manage and update stock levels in real time, track usage and wastage, and maintain accurate inventory records for smooth daily operations.",
        image: img11, // Using same image as original
        isReversed: true
    },
    {
        title: "Reports & Insights",
        quote: "Access detailed reports across front office, housekeeping, groups, and revenue to analyze performance and make informed operational decisions.",
        image: img12,
        isReversed: false
    },
    {
        title: "Finance Overview Dashboard",
        quote: "Track revenue, expenses, net profit, payments, and occupancy insights in one place to monitor financial performance and make confident business decisions.",
        image: img13,
        isReversed: true
    },
    {
        title: "Hotel Operations Overview Dashboard",
        quote: "Track arrivals, departures, in-house guests, occupancy, guest status, reservations, and housekeeping progress — all in one place for faster daily decisions and smoother operations.",
        image: img8,
        isReversed: false
    }
]

const HotelManagement = () => {
    return (
        <>
            <Hero />

            <FeaturesGrid />

            {/* WHAT'S ABOUT PMS? (Section Title) */}
            <section className="bg-[#fff9e6] pt-20 pb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
                    What's about PMS?
                </h2>
            </section>

            {/* Alternating Sections */}
            {/* Alternating Sections */}
            {sections.map((section, idx) => (
                <SectionWithImage
                    key={idx}
                    index={idx}
                    {...section}
                />
            ))}

            <FinalCTA />
        </>
    )
}

export default HotelManagement
