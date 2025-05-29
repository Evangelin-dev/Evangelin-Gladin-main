import React, { useState, useEffect } from "react";

const SalesFunnelLeadEngine = () => {
    const [isVisible, setIsVisible] = useState({ hero: false, included: false, casestudy: false, cta: false });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsVisible(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[id]').forEach(el => observer.observe(el));

        const handleMouseMove = (e: { clientX: any; clientY: any; }) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const accent = '#6366f1';
    const cardBg = 'rgba(255, 255, 255, 0.1)';

    return (
        <div className="min-h-screen mt-16 relative overflow-hidden transition-all duration-1000">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse" style={{ background: `radial-gradient(circle, ${accent}, transparent)`, left: mousePosition.x - 192, top: mousePosition.y - 192, transition: 'left 0.3s ease, top 0.3s ease' }} />
            </div>

            <div className="relative z-10 px-6 py-8 md:px-20">
                <div className="max-w-6xl mx-auto">

                    
                    <div id="hero" className={`text-center mb-10 transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">Sales Funnel</span><br />
                            & Lead Engine Creation
                        </h1>
                        <p className="text-2xl md:text-3xl max-w-4xl mx-auto text-slate-200">
                            Leads are the lifeblood of any business — but not all leads are created equal. I help businesses set up intent-driven, automated lead funnels that attract, qualify, and convert high-quality prospects through proven digital channels.
                        </p>
                    </div>

                    
                    <section id="included" className={`mb-10 transition-all duration-1000 delay-300 ${isVisible.included ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center text-white">What's Included</h2>
                        <div className="space-y-8">
                            <div className="p-8 rounded-xl backdrop-blur-lg border border-slate-400/20" style={{ backgroundColor: cardBg }}>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Funnel Building (Landing Page + Email Automation)</h3>
                                <ul className="text-xl text-slate-200 list-disc list-inside space-y-2">
                                    <li>High-converting landing pages with action-based CTAs</li>
                                    <li>Email flows: welcome, follow-up, nurturing</li>
                                    <li>WhatsApp integration for instant conversation</li>
                                    <li>Optional retargeting pixel setup</li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-xl backdrop-blur-lg border border-slate-400/20" style={{ backgroundColor: cardBg }}>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">IndiaMART + WhatsApp Lead Automation</h3>
                                <ul className="text-xl text-slate-200 list-disc list-inside space-y-2">
                                    <li>SEO-optimized IndiaMART profile</li>
                                    <li>Instant WhatsApp lead replies</li>
                                    <li>Team training for follow-ups and CRM</li>
                                </ul>
                            </div>
                            <div className="p-8 rounded-xl backdrop-blur-lg border border-slate-400/20" style={{ backgroundColor: cardBg }}>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Facebook/Meta Ad Strategy</h3>
                                <ul className="text-xl text-slate-200 list-disc list-inside space-y-2">
                                    <li>Ad setup, pixel tracking, and creative strategy</li>
                                    <li>Audience targeting & conversion optimization</li>
                                    <li>Optional monthly reporting & audits</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    
                    <section id="casestudy" className={`mb-8 transition-all duration-1000 delay-500 ${isVisible.casestudy ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white text-center">Case Study: UsedCars24x7</h2>
                        <div className="p-8 rounded-xl backdrop-blur-lg border border-slate-400/20 space-y-6" style={{ backgroundColor: cardBg }}>
                            <ul className="text-xl text-slate-200 list-disc list-inside space-y-3">
                                <li>High-conversion landing page with WhatsApp & enquiry form</li>
                                <li>Facebook Ads campaign targeting Gen Z in Mumbai — 20+ leads in 7 days</li>
                                <li>Instagram, reels & Google Business for visibility</li>
                                <li>CRM support & backend lead tracking</li>
                                <li>Closed first 3 sales in 2 weeks</li>
                            </ul>
                            <p className="text-xl text-slate-300 italic">A full digital funnel built and deployed in 10 days.</p>
                        </div>
                    </section>

                    
                    <section id="cta" className={`text-center transition-all duration-1000 delay-700 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Want to generate consistent, qualified leads?</h3>
                        <p className="text-2xl text-slate-300 mb-8">Book your clarity call now and stop chasing leads manually.</p>

                        <a
                            href="https://calendly.com/harry-thebot/consultation-with-thebot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl"
                        >

                            <button className="px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:scale-105 transition-transform">Book Clarity Call</button>

                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SalesFunnelLeadEngine;