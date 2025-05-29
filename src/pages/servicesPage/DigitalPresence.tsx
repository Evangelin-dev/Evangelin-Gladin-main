import React, { useState, useEffect } from "react";

const DigitalPresenceSetup = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
           
            <div
                className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{ left: mousePos.x - 8, top: mousePos.y - 8, transition: 'all 0.1s' }}
            />

           
            <div className="fixed inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

           
            <section className="relative min-h-screen flex">
               
                <div className="w-1/2 flex flex-col justify-center px-16 relative z-10">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-16 bg-gradient-to-b from-green-400 to-blue-400" />
                            <span className="text-green-400 font-mono text-sm tracking-widest">DIGITAL TRANSFORMATION</span>
                        </div>

                        <h1 className="text-7xl font-black leading-none">
                            YOUR FIRST
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                                SALESPERSON
                            </span>
                            <br />
                            IS DIGITAL
                        </h1>

                        <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                            Professional websites that convert visitors into customers. Built in 3 days, optimized for growth.
                        </p>

                        <div className="flex gap-6 pt-8">
                            <button className="bg-white text-black px-8 py-4 font-bold hover:bg-green-400 hover:text-black transition-all transform hover:scale-105">
                                START NOW →
                            </button>
                            <button className="border border-gray-600 px-8 py-4 font-bold hover:border-white transition-all">
                                VIEW WORK
                            </button>
                        </div>
                    </div>
                </div>

               
                <div className="w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-400/20 to-purple-400/20" />

                   
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[
                            { text: '<website/>', x: 20, y: 20, delay: 0 },
                            { text: '{branding}', x: 60, y: 40, delay: 0.2 },
                            { text: 'funnel()', x: 30, y: 70, delay: 0.4 },
                            { text: '[social]', x: 70, y: 80, delay: 0.6 }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="absolute text-2xl font-mono text-green-400 animate-pulse"
                                style={{
                                    left: `${item.x}%`,
                                    top: `${item.y}%`,
                                    animationDelay: `${item.delay}s`,
                                    transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`
                                }}
                            >
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            <section className="bg-gray-900 py-8">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-4 gap-8 text-center">
                        {[
                            { num: '3', label: 'Days Build' },
                            { num: '20+', label: 'Years Exp' },
                            { num: '100%', label: 'Conversion Ready' },
                            { num: '24/7', label: 'Support' }
                        ].map((stat, i) => (
                            <div key={i} className="border-l border-green-400 pl-4">
                                <div className="text-4xl font-black text-green-400">{stat.num}</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl font-black mb-4">WHAT WE BUILD</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto" />
                    </div>

                    <div className="space-y-32">
                       
                        <div className="flex items-center gap-16">
                            <div className="flex-1">
                                <div className="bg-gradient-to-r from-green-400 to-blue-400 w-16 h-16 flex items-center justify-center text-black font-black text-2xl mb-6">
                                    01
                                </div>
                                <h3 className="text-4xl font-bold mb-6">Website Development</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Sales-ready platforms with CTA focus, funnel integration, WhatsApp connection.
                                    Fast loading, mobile-optimized, conversion-designed.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['React/WordPress', 'Mobile First', 'SEO Ready', 'Analytics'].map(tag => (
                                        <span key={tag} className="bg-gray-800 px-4 py-2 text-sm rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="bg-gray-800 p-8 transform rotate-3 hover:rotate-0 transition-all">
                                    <div className="text-green-400 font-mono text-sm mb-4">Your Website</div>
                                    <div className="space-y-2 text-gray-300">
                                        <div>const website = {`{`}</div>
                                        <div className="ml-4">design: 'conversion-focused',</div>
                                        <div className="ml-4">speed: 'optimized',</div>
                                        <div className="ml-4">leads: 'automated'</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="flex items-center gap-16 flex-row-reverse">
                            <div className="flex-1">
                                <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-16 h-16 flex items-center justify-center text-black font-black text-2xl mb-6">
                                    02
                                </div>
                                <h3 className="text-4xl font-bold mb-6">Social Media Setup</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Complete brand alignment across Instagram, LinkedIn, Facebook, YouTube.
                                    Branded covers, optimized bios, 12 initial posts.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Instagram', 'LinkedIn', 'Facebook', 'YouTube'].map(platform => (
                                        <div key={platform} className="border border-gray-700 p-4 text-center hover:border-blue-400 transition-all">
                                            {platform}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 h-32 flex items-center justify-center text-2xl">
                                            📱
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                       
                        <div className="flex items-center gap-16">
                            <div className="flex-1">
                                <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-16 h-16 flex items-center justify-center text-black font-black text-2xl mb-6">
                                    03
                                </div>
                                <h3 className="text-4xl font-bold mb-6">Tech Stack Advisory</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Complete guidance on domain, hosting, CMS, email tools, analytics.
                                    Right tech stack for your growth goals.
                                </p>
                                <div className="space-y-3">
                                    {['Domain & Hosting Setup', 'CMS Selection', 'Email Integration', 'Analytics Configuration'].map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform -skew-y-6" />
                                    <div className="relative p-8 space-y-4">
                                        <div className="text-2xl">⚙️ Tech Stack</div>
                                        <div className="text-2xl">🌐 Domain Setup</div>
                                        <div className="text-2xl">📧 Email Tools</div>
                                        <div className="text-2xl">📊 Analytics</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="bg-gray-900 py-24 px-8 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-black text-center mb-16">WHY BUSINESSES CHOOSE US</h2>

                    <div className="grid grid-cols-3 gap-8">
                        {[
                            { icon: '⚡', title: 'Speed', desc: 'Built in 3 days post-approval' },
                            { icon: '🎯', title: 'Strategy', desc: 'Sales-focused, not just pretty' },
                            { icon: '📈', title: 'Results', desc: 'Conversion-ready from day 1' }
                        ].map((item, i) => (
                            <div key={i} className="bg-black p-8 hover:bg-gray-800 transition-all transform hover:-translate-y-2">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-green-400">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            <section className="relative py-32 px-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-6xl font-black mb-8 leading-tight">
                        READY TO DOMINATE
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            DIGITALLY?
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Your competition is already online. Don't let them win by default.
                    </p>

                    <a
                        href="https://calendly.com/harry-thebot/consultation-with-thebot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl"
                    >
                        <button className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-12 py-6 text-xl font-black hover:from-blue-400 hover:to-purple-400 transition-all transform hover:scale-105">
                            BOOK CLARITY CALL NOW
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default DigitalPresenceSetup;