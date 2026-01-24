import React, { useState } from 'react';
import { Sparkles, Loader2, ClipboardCheck } from 'lucide-react';
import { generateGymPlan } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export const AiAssistant = () => {
    const [gymType, setGymType] = useState('Crossfit Box');
    const [goal, setGoal] = useState('Maximize Revenue');
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const result = await generateGymPlan(gymType, goal);
            setPlan(result);
        } catch (e) {
            setPlan("Sorry, we couldn't generate a plan at this moment. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="services" className="py-24 bg-white px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Left Side: Controls */}
                    <div className="w-full md:w-1/3 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 text-[#10b946]">
                            <Sparkles className="w-6 h-6" />
                            <h2 className="text-xl font-bold text-gray-900">AI Growth Assistant</h2>
                        </div>
                        <p className="text-gray-600 mb-8 text-sm">
                            Use our Gemini-powered assistant to generate instant operational strategies for your gym.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Gym Type</label>
                                <select
                                    value={gymType}
                                    onChange={(e) => setGymType(e.target.value)}
                                    className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-green-500 outline-none"
                                >
                                    <option>Crossfit Box</option>
                                    <option>Yoga Studio</option>
                                    <option>Traditional Gym</option>
                                    <option>Pilates Studio</option>
                                    <option>MMA Gym</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Goal</label>
                                <select
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value)}
                                    className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-green-500 outline-none"
                                >
                                    <option>Maximize Revenue</option>
                                    <option>Improve Retention</option>
                                    <option>Operational Efficiency</option>
                                    <option>Staff Management</option>
                                </select>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="w-full bg-[#004d25] text-white font-bold py-3 rounded-lg hover:bg-[#003d1e] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                                {loading ? 'Analyzing...' : 'Generate Strategy'}
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Output */}
                    <div className="w-full md:w-2/3">
                        {plan ? (
                            <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-8 shadow-sm min-h-[400px]">
                                <div className="flex items-center gap-2 text-[#166534] mb-4 border-b border-[#bbf7d0] pb-4">
                                    <ClipboardCheck className="w-6 h-6" />
                                    <h3 className="font-bold text-lg">Your Personalized Strategy</h3>
                                </div>
                                <div className="prose prose-green max-w-none text-slate-700">
                                    <ReactMarkdown>{plan}</ReactMarkdown>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                    <Sparkles className="w-8 h-8 text-gray-300" />
                                </div>
                                <h3 className="text-gray-900 font-semibold text-lg mb-2">Ready to optimize?</h3>
                                <p className="text-gray-500 max-w-sm">Select your gym type and goal to generate a custom operational plan using Google Gemini.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};
