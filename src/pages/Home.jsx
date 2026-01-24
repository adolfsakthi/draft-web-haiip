import React from "react";
// Navbar and Footer are handled by the Layout
import HeroBanner from "../components/home/HeroBanner";
import SolutionCarousel from "../components/home/SolutionCarousel";
import AboutUs from "../components/home/AboutUs";
import ProvideSection from "../components/home/ProvideSection";
import ServicesSection from "../components/home/ServicesSection";
import TechSupportSection from "../components/home/TechSupportSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import SmartSolutions from "../components/home/SmartSolution";
import WhatOurClientSay from "../components/home/WhatOurClientSay";
import FAQSection from "../components/home/FAQ";
import ContactSection from "../components/home/ContactSection";
import CTA from "../components/home/CTA";
import SmartOrbit from "../components/home/SmartOrbit";

const Home = () => {
    return (
        <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
            <main className="flex flex-col gap-0">
                <HeroBanner />
                <SolutionCarousel />
                <AboutUs />
                <ProvideSection />
                <ServicesSection />
                <TechSupportSection />
                <WhyChooseSection />
                <SmartOrbit />
                <SmartSolutions />
                <WhatOurClientSay />
                <FAQSection />
                <ContactSection />
                <CTA />
            </main>
        </div>
    );
};

export default Home;
