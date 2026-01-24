import React from 'react';
import Hero from '../components/leave/Hero';
import Features from '../components/leave/Features';
import LMSShowcase from '../components/leave/LMSShowcase';
import LMSShowcase2 from '../components/leave/LMSShowcase2';
import LMSShowcase3 from '../components/leave/LMSShowcase3';
import LMSShowcase4 from '../components/leave/LMSShowcase4';
import Benefits from '../components/leave/Benefits';
import CallToAction from '../components/leave/CallToAction';

export default function LeaveManagement() {
    return (
        <div>
            <Hero />
            <Features />
            <LMSShowcase />
            <LMSShowcase2 />
            <LMSShowcase3 />
            <LMSShowcase4 />
            <Benefits />
            <CallToAction />
        </div>
    );
}
