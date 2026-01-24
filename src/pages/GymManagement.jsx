import React from 'react';
import { Hero } from '../components/gym/Hero';
import { FeatureIcons } from '../components/gym/FeatureIcons';
import { ProductShowcase } from '../components/gym/ProductShowcase';
import { Benefits } from '../components/gym/Benefits';
import { CallToAction } from '../components/gym/CallToAction';

export const GymManagement = () => {
    return (
        <div className="bg-white font-sans text-slate-900">
            <Hero />
            <FeatureIcons />
            <ProductShowcase />
            <Benefits />
            <CallToAction />
        </div>
    );
};

export default GymManagement;
