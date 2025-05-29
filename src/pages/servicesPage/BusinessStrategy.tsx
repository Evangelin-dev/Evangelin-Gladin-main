import React, { useState, useEffect } from "react";

const BusinessStrategy = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    included: false,
    casestudy: false,
    cta: false
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const textPrimary = '#ffffff';
  const textSecondary = '#e2e8f0';
  const accent = '#6366f1';
  const cardBg = 'rgba(255, 255, 255, 0.1)';

  return (
    <div 
      className="min-h-screen mt-16 relative overflow-hidden transition-all duration-1000"
    >
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${accent}, transparent)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'left 0.3s ease, top 0.3s ease'
          }}
        />
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      
      <div className="fixed top-6 right-6 z-50">
        <div
          className="p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl"
          style={{ 
            backgroundColor: cardBg,
            border: `1px solid ${accent}40`
          }}
        >
          <div className="w-6 h-6" style={{ color: accent }}>
            ✨
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 py-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          
          <div 
            id="hero"
            className={`text-center mb-10 transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="relative inline-block">
              <h1 
                className="text-5xl md:text-8xl font-black mb-6 leading-tight"
                style={{ color: textPrimary }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Business Strategy
                </span>
                <br />
                <span className="relative">
                  & Growth Consulting
                  <div 
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"
                    style={{ width: '100%' }}
                  />
                </span>
              </h1>
            </div>

            <div 
              className="max-w-4xl mx-auto mt-10 p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:scale-105"
              style={{ 
                backgroundColor: cardBg,
                borderColor: `${accent}30`,
                boxShadow: `0 20px 40px ${accent}20`
              }}
            >
              <p className="text-2xl md:text-3xl leading-relaxed" style={{ color: textSecondary }}>
                With over <span className="font-bold text-3xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">19 years of experience</span> in international sales and marketing, I've worked with <span className="font-bold text-3xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">50+ Indian brands</span> to unlock global growth, boost revenue, and build long-term sales engines.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 animate-pulse`}
                      style={{ 
                        backgroundColor: accent,
                        borderColor: textPrimary,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                <span className="text-lg" style={{ color: textSecondary }}>50+ Success Stories</span>
              </div>
            </div>
          </div>

          
          <section 
            id="included"
            className={`mb-10 transform transition-all duration-1000 delay-300 ${
              isVisible.included ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 
              className="text-4xl md:text-6xl font-bold mb-10 text-center"
              style={{ color: textPrimary }}
            >
              <span className="inline-block animate-bounce mr-4">🔍</span>
              What's Included
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Go-to-Market Strategy",
                  desc: "Identify the right audience, pricing, and market positioning — especially for brands looking to enter international markets.",
                  color: "from-red-400 to-pink-400"
                },
                {
                  icon: "💰",
                  title: "Sales & Revenue Planning",
                  desc: "Build a performance-based model that aligns with your business goals and customer lifecycle.",
                  color: "from-green-400 to-emerald-400"
                },
                {
                  icon: "🚀",
                  title: "Lead Generation Systems",
                  desc: "Set up high-conversion inbound and outbound lead engines — including WhatsApp, IndiaMART, and email outreach.",
                  color: "from-blue-400 to-cyan-400"
                },
                {
                  icon: "🎙️",
                  title: "Clarity Call (1:1 Session)",
                  desc: "A strategic session to review your business, uncover growth blockers, and design a clear next step.",
                  color: "from-purple-400 to-indigo-400"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer`}
                  style={{ 
                    backgroundColor: cardBg,
                    borderColor: `${accent}30`,
                    boxShadow: `0 10px 30px ${accent}15`
                  }}
                >
                  <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {item.icon}
                  </div>
                  <h3 
                    className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: textSecondary }}>
                    {item.desc}
                  </p>
                  <div 
                    className="mt-4 h-1 bg-gradient-to-r rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: `linear-gradient(to right, ${accent}, ${accent}80)` }}
                  />
                </div>
              ))}
            </div>
          </section>

          
          <section 
            id="casestudy"
            className={`mb-8 transform transition-all duration-1000 delay-500 ${
              isVisible.casestudy ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div 
              className="relative p-10 md:p-16 rounded-3xl backdrop-blur-xl border overflow-hidden"
              style={{ 
                backgroundColor: cardBg,
                borderColor: `${accent}40`,
                boxShadow: `0 25px 50px ${accent}25`
              }}
            >
              
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-bounce" />
                <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative z-10">
                <h3 
                  className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4"
                  style={{ color: textPrimary }}
                >
                  <span className="text-5xl animate-spin">🧩</span>
                  Real Case Study: Groundscrew
                </h3>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-xl md:text-2xl leading-relaxed mb-6" style={{ color: textSecondary }}>
                      One of our most impactful engagements was with <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Groundscrew</span>, a product startup based in India. They had an innovative product but no roadmap for international expansion.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Repositioned their brand for global appeal",
                        "Designed a go-to-market strategy for international buyers", 
                        "Enabled their first export transaction",
                        "Helped them generate ₹12 crore in revenue from newly created global leads"
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 hover:scale-105`}
                          style={{ 
                            backgroundColor: `${accent}10`,
                            borderColor: `${accent}30`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          <div 
                            className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: accent }}
                          />
                          <span className="text-lg" style={{ color: textSecondary }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div 
                      className="inline-block p-8 rounded-full mb-6 animate-pulse"
                      style={{ backgroundColor: `${accent}20` }}
                    >
                      <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        ₹12cr
                      </div>
                    </div>
                    <p className="text-xl font-semibold" style={{ color: textPrimary }}>
                      Revenue Generated
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{ 
                            backgroundColor: accent,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section 
            id="cta"
            className={`text-center transform transition-all duration-1000 delay-700 ${
              isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div 
              className="p-12 rounded-3xl backdrop-blur-xl border relative overflow-hidden"
              style={{ 
                backgroundColor: cardBg,
                borderColor: `${accent}40`,
                boxShadow: `0 25px 50px ${accent}25`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-pulse" />
              
              <div className="relative z-10">
                <h4 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  style={{ color: textPrimary }}
                >
                  <span className="inline-block animate-bounce mr-4">✅</span>
                  Ready to create your breakthrough?
                </h4>
                
                <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: textSecondary }}>
                  We'll spend <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">30 minutes</span> reviewing your business model and identifying how to unlock the next level of growth.
                </p>
                
                <div className="flex justify-center gap-6 flex-wrap">
                  <a
                    href="https://calendly.com/harry-thebot/consultation-with-thebot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl"
                    style={{ 
                      backgroundColor: accent,
                      color: textPrimary,
                      boxShadow: `0 20px 40px ${accent}40`
                    }}
                  >
                    <span className="relative z-10 text-white">Book a Clarity Call</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  
                  <a
                    href="/contact"
                    className="px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border-2"
                    style={{ 
                      borderColor: accent,
                      color: accent,
                      backgroundColor: 'transparent'
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BusinessStrategy;