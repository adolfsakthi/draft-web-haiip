import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-5xl md:text-6xl font-zendots text-[#0f172a] mb-6 leading-tight">
                            GET IN <span className="text-blue-600">TOUCH</span>
                        </h1>
                        <p className="text-lg text-gray-600 font-poppins">
                            Have questions about our software solutions? Our team is here to help you transform your business with smart digital infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {/* Contact Cards */}
                        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-500">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <Phone className="text-blue-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-white transition-colors">Call Us</h3>
                            <p className="text-gray-600 group-hover:text-blue-100 transition-colors">+91 9036122890</p>
                            <p className="text-gray-600 group-hover:text-blue-100 transition-colors">+91 8050012890</p>
                        </div>

                        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 flex flex-col items-center text-center group hover:bg-purple-600 transition-all duration-500">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <Mail className="text-purple-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-white transition-colors">Email Us</h3>
                            <p className="text-gray-600 group-hover:text-purple-100 transition-colors">info.hezee@gmail.com</p>
                            <p className="text-gray-600 group-hover:text-purple-100 transition-colors">sales@hezee.co.in</p>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center text-center group hover:bg-orange-600 transition-all duration-500">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <MapPin className="text-orange-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-white transition-colors">Visit Us</h3>
                            <p className="text-gray-600 group-hover:text-orange-100 transition-colors">Bangalore, Karnataka</p>
                            <p className="text-gray-600 group-hover:text-orange-100 transition-colors">India</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white p-8 md:p-16 rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                        {/* Form Section */}
                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Send us a Message</h2>
                                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                                        <option>HRMS Software Inquiry</option>
                                        <option>Gym Management Inquiry</option>
                                        <option>Hotel PMS Inquiry</option>
                                        <option>Visitor Management Inquiry</option>
                                        <option>Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-[#0f172a] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95 group">
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Info Section */}
                        <div className="bg-[#0f172a] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                    <p className="text-gray-400">Reach out to us through any of these channels or visit our office.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <MapPin className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Our Office</h4>
                                            <p className="text-gray-400 mt-1">Hezee Access IT Infrastructure Pvt Ltd,<br />Bangalore, Karnataka, India</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Clock className="text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Working Hours</h4>
                                            <p className="text-gray-400 mt-1">Monday - Saturday: 09:00 AM - 06:00 PM<br />Sunday: Closed</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <MessageSquare className="text-orange-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Live Chat</h4>
                                            <p className="text-gray-400 mt-1">Our support team is available during working hours for quick assistance.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <h4 className="font-bold mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/5 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                                            <span className="font-bold">in</span>
                                        </div>
                                        <div className="w-10 h-10 bg-white/5 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                                            <span className="font-bold">f</span>
                                        </div>
                                        <div className="w-10 h-10 bg-white/5 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                                            <span className="font-bold">tw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
