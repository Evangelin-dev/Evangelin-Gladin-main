import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MentorshipPage = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: { clientX: any; clientY: any; }) => setMousePos({ x: e.clientX, y: e.clientY });

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
                            <span className="text-green-400 font-mono text-sm tracking-widest">MENTORSHIP & COACHING</span>
                        </div>

                        <h1 className="text-7xl font-black leading-none">
                            SCALE YOUR
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                                BUSINESS
                            </span>
                            <br />
                            WITH CLARITY
                        </h1>

                        <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                            Direct mentorship for founders, consultants, and agency owners ready to break through their next milestone with 19+ years of proven experience.
                        </p>

                        <div className="flex gap-6 pt-8">
                            <a
                                href="https://calendly.com/harry-thebot/consultation-with-thebot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl"
                            >
                                <button className="bg-white text-black px-8 py-4 font-bold hover:bg-green-400 hover:text-black transition-all transform hover:scale-105">
                                    BOOK CLARITY CALL →
                                </button>
                            </a>
                            <Link to={"/results"} className="border flex justify-center items-center border-gray-600 px-8 py-4 font-bold hover:border-white transition-all">
                            <button >
                                VIEW RESULTS
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-400/20 to-purple-400/20" />


                    <div className="absolute inset-0 flex items-center justify-center">
                        {[
                            { text: 'Strategy', icon: '🎯', x: 20, y: 20, delay: 0 },
                            { text: 'Scale', icon: '📈', x: 60, y: 40, delay: 0.2 },
                            { text: 'Systems', icon: '⚙️', x: 30, y: 70, delay: 0.4 },
                            { text: 'Growth', icon: '🚀', x: 70, y: 80, delay: 0.6 }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="absolute text-center animate-pulse"
                                style={{
                                    left: `${item.x}%`,
                                    top: `${item.y}%`,
                                    animationDelay: `${item.delay}s`,
                                    transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`
                                }}
                            >
                                <div className="text-4xl mb-2">{item.icon}</div>
                                <div className="text-green-400 font-mono text-sm">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-gray-900 py-8">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-4 gap-8 text-center">
                        {[
                            { num: '19+', label: 'Years Experience' },
                            { num: '100+', label: 'Founders Mentored' },
                            { num: '2x', label: 'Avg Revenue Growth' },
                            { num: '90', label: 'Days to Scale' }
                        ].map((stat, i) => (
                            <div key={i} className="border-l border-green-400 pl-4">
                                <div className="text-4xl font-black text-green-400">{stat.num}</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-black mb-6">WHO IS THIS FOR?</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-16" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: '👨‍💼', title: 'Founders', desc: 'Stuck between growth and burnout' },
                            { icon: '💼', title: 'Consultants', desc: 'Want to productize or scale services' },
                            { icon: '🏢', title: 'Agency Owners', desc: 'Moving from execution to CEO mindset' },
                            { icon: '🎯', title: 'Entrepreneurs', desc: 'Need strategic co-pilot for next milestone' }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-900 p-6 hover:bg-gray-800 transition-all transform hover:-translate-y-2">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-green-400">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl font-black mb-4">WHAT'S INCLUDED</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto" />
                    </div>

                    <div className="space-y-24">

                        <div className="flex items-center gap-16">
                            <div className="flex-1">
                                <div className="bg-gradient-to-r from-green-400 to-blue-400 w-16 h-16 flex items-center justify-center text-black font-black text-2xl mb-6">
                                    01
                                </div>
                                <h3 className="text-4xl font-bold mb-6">Monthly Mentorship Plan</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Ideal for long-term guidance and decision-making support with consistent accountability.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        'Two 1:1 strategy sessions/month',
                                        'WhatsApp/email access for check-ins',
                                        'Roadmaps, templates, and SOPs',
                                        'Accountability checklists and tracking'
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                                            <span className="text-gray-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="bg-gray-800 p-8 transform rotate-3 hover:rotate-0 transition-all">
                                    <div className="text-green-400 font-mono text-sm mb-4">Monthly Growth</div>
                                    <div className="space-y-2 text-gray-300">
                                        <div>const mentorship = {`{`}</div>
                                        <div className="ml-4">sessions: 'bi-weekly',</div>
                                        <div className="ml-4">access: '24/7',</div>
                                        <div className="ml-4">results: 'guaranteed'</div>
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
                                <h3 className="text-4xl font-bold mb-6">90-Day Scale Blueprint</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    A personalized 3-month sprint to take you from confusion to execution with clear milestones.
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        'Audit your current system',
                                        'Set realistic goals',
                                        'Step-by-step strategy implementation',
                                        'Weekly action plans'
                                    ].map(item => (
                                        <div key={item} className="border border-gray-700 p-4 hover:border-blue-400 transition-all">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 transform -skew-y-6" />
                                    <div className="relative p-8 space-y-4 text-center">
                                        <div className="text-3xl">📋 Audit</div>
                                        <div className="text-3xl">🎯 Goals</div>
                                        <div className="text-3xl">⚡ Execute</div>
                                        <div className="text-3xl">📈 Scale</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center gap-16">
                            <div className="flex-1">
                                <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-16 h-16 flex items-center justify-center text-black font-black text-2xl mb-6">
                                    03
                                </div>
                                <h3 className="text-4xl font-bold mb-6">Brand & Sales Audit</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Deep-dive analysis with detailed report identifying growth blockers and clear recommendations.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        'Brand perception & messaging assessment',
                                        'Sales pipeline analysis',
                                        'Positioning evaluation',
                                        'Detailed growth recommendations'
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                            <span className="text-gray-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="bg-gray-800 p-8 transform -rotate-3 hover:rotate-0 transition-all">
                                    <div className="text-purple-400 font-mono text-sm mb-4">Audit Report</div>
                                    <div className="space-y-2 text-gray-300">
                                        <div>const audit = {`{`}</div>
                                        <div className="ml-4">brand: 'analyzed',</div>
                                        <div className="ml-4">sales: 'optimized',</div>
                                        <div className="ml-4">growth: 'unlocked'</div>
                                        <div>{`}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray-900 py-24 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-black text-center mb-16">REAL IMPACT</h2>

                    <div className="text-center mb-12">
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Many of my past mentees have achieved breakthrough results through structured mentorship + real-time execution:
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: '🚀', title: 'Launched', desc: 'New business lines' },
                            { icon: '💰', title: 'Built', desc: 'High-ticket offers' },
                            { icon: '📊', title: 'Doubled', desc: 'Revenue in 6 months' },
                            { icon: '⚙️', title: 'Created', desc: 'Scalable systems' }
                        ].map((item, i) => (
                            <div key={i} className="bg-black p-8 hover:bg-gray-800 transition-all transform hover:-translate-y-2">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-green-400">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-gray-400">
                            These results didn't come from theory — they came from structured mentorship + real-time execution.
                        </p>
                    </div>
                </div>
            </section>


            <section className="relative py-32 px-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-6xl font-black mb-8 leading-tight">
                        READY FOR YOUR
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            BREAKTHROUGH?
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        If you're serious about growth, let's build your breakthrough phase — together.
                    </p>
                    <a
                        href="https://calendly.com/harry-thebot/consultation-with-thebot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl"
                    >
                        <button className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-12 py-6 text-xl font-black hover:from-blue-400 hover:to-purple-400 transition-all transform hover:scale-105">
                            BOOK YOUR CLARITY CALL NOW
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MentorshipPage;