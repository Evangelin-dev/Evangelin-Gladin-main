import React, { useState, useEffect } from "react";
import { ArrowRight } from 'lucide-react';

const ContentLeadership = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    casestudy: false,
    cta: false
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  type ContentElement = {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    symbol: string;
  };
  
  const [contentElements, setContentElements] = useState<ContentElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.15) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    setTimeout(() => {
      document.querySelectorAll('[id]').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      speed: Math.random() * 3 + 2,
      symbol: ['✍️', '📝', '💡', '📢', '🎯', '📊', '🚀', '💬'][i]
    }));
    setContentElements(elements);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textPrimary = '#ffffff';
  const textSecondary = '#a1a1aa';
  const accent = '#6366f1';
  const accent2 = '#8b5cf6';
  const accent3 = '#06b6d4';

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${accent}40, transparent)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        />
        
        {contentElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-20 animate-pulse"
            style={{
              left: `${(element.x + Math.sin(Date.now() / 2000 + element.id) * 10) % 90}%`,
              top: `${(element.y + Math.cos(Date.now() / 2000 + element.id) * 8) % 90}%`,
              fontSize: `${element.size}px`,
              color: [accent, accent2, accent3][element.id % 3],
              animationDelay: `${element.id * 0.5}s`,
              animationDuration: `${element.speed}s`,
              transform: `rotate(${scrollY * 0.1 + element.id * 45}deg)`
            }}
          >
            {element.symbol}
          </div>
        ))}
      </div>

      
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 transition-all duration-300"
          style={{ width: `${Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
        />
      </div>

      <div className="relative z-10 px-6 py-20 md:px-20">
        <div className="max-w-7xl mx-auto">

          
          <div 
            id="hero"
            className={`mb-32 transition-all duration-1500 ease-out ${
              isVisible.hero 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="relative">
              
              <div className="text-center mb-16">
                <div className="relative inline-block">
                  <h1 className="text-6xl md:text-9xl font-black tracking-tight">
                    <span 
                      className="block transform hover:scale-105 transition-transform duration-500"
                      style={{ 
                        background: `linear-gradient(45deg, ${accent}, ${accent2})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      CONTENT
                    </span>
                    <span 
                      className="block text-4xl md:text-6xl mt-2 tracking-widest"
                      style={{ color: textPrimary }}
                    >
                      & THOUGHT LEADERSHIP
                    </span>
                  </h1>
                  
                  
                  <div className="absolute -top-8 -left-20 w-16 h-1 bg-gradient-to-r from-transparent to-indigo-400" />
                  <div className="absolute -bottom-8 -right-20 w-16 h-1 bg-gradient-to-l from-transparent to-purple-400" />
                </div>
                
                <p className="text-2xl md:text-3xl font-light mt-8 max-w-4xl mx-auto leading-relaxed" style={{ color: textSecondary }}>
                  Transform your ideas into <span className="font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">industry influence</span> that drives engagement and growth
                </p>
              </div>

              
              <div className="flex flex-wrap justify-center gap-8 mb-16">
                <div 
                  className="relative w-48 h-48 rounded-full border-2 backdrop-blur-sm hover:scale-110 transition-all duration-500 cursor-pointer group"
                  style={{ borderColor: accent }}
                >
                  <div className="absolute inset-4 rounded-full border border-indigo-400/30" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-400/20 to-transparent" />
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <div className="text-3xl font-black mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">25+</div>
                    <div className="text-sm font-semibold" style={{ color: textPrimary }}>Executive Op-Eds Published</div>
                  </div>
                </div>

                <div 
                  className="relative w-48 h-48 rounded-full border-2 backdrop-blur-sm hover:scale-110 transition-all duration-500 cursor-pointer group"
                  style={{ borderColor: accent2 }}
                >
                  <div className="absolute inset-4 rounded-full border border-purple-400/30" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent" />
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <div className="text-2xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10M+</div>
                    <div className="text-sm font-semibold" style={{ color: textPrimary }}>Organic Impressions</div>
                  </div>
                </div>

                <div 
                  className="relative w-48 h-48 rounded-full border-2 backdrop-blur-sm hover:scale-110 transition-all duration-500 cursor-pointer group"
                  style={{ borderColor: accent3 }}
                >
                  <div className="absolute inset-4 rounded-full border border-cyan-400/30" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent" />
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <div className="text-2xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">3X</div>
                    <div className="text-sm font-semibold" style={{ color: textPrimary }}>Leadership Authority</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <section 
            id="services"
            className={`mb-32 transition-all duration-1500 ease-out ${
              isVisible.services 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-8" style={{ color: textPrimary }}>
                WHAT WE CREATE
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto" />
            </div>
            
            <div className="space-y-24">
              {[
                {
                  title: "Content Strategy",
                  desc: "Strategic content planning aligned with your brand goals, audience insights, and industry positioning.",
                  gradient: "from-indigo-400 to-purple-400",
                  align: "left"
                },
                {
                  title: "Thought Leadership Development", 
                  desc: "Position your executives as industry voices through strategic content and media placements.",
                  gradient: "from-purple-400 to-pink-400",
                  align: "right"
                },
                {
                  title: "Executive Ghostwriting",
                  desc: "High-quality content authored for executives and professionals that builds authority and trust.",
                  gradient: "from-cyan-400 to-blue-400", 
                  align: "left"
                },
                {
                  title: "Branded Editorial & Media",
                  desc: "Custom editorial content and strategic media placement that blends value with brand promotion.",
                  gradient: "from-blue-400 to-indigo-400",
                  align: "right"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center ${service.align === 'right' ? 'flex-row-reverse' : ''} gap-12 md:gap-20`}
                >
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl font-black text-white/10">0{index + 1}</div>
                      <div className="flex-1">
                        <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                          {service.title}
                        </h3>
                        <div className={`h-1 w-24 bg-gradient-to-r ${service.gradient} rounded-full`} />
                      </div>
                    </div>
                    <p className="text-xl leading-relaxed max-w-2xl" style={{ color: textSecondary }}>
                      {service.desc}
                    </p>
                  </div>

                  
                  <div className="flex-shrink-0">
                    <div 
                      className="w-64 h-64 relative group cursor-pointer"
                      style={{ transform: `rotate(${index * 15}deg)` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 transform group-hover:scale-110 transition-transform duration-500`} 
                           style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                      <div className={`absolute inset-4 bg-gradient-to-br ${service.gradient} opacity-40 transform group-hover:scale-95 transition-transform duration-500`}
                           style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          
          <section 
            id="casestudy"
            className={`mb-32 transition-all duration-1500 ease-out ${
              isVisible.casestudy 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative">
              
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 gap-4 h-full">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full animate-pulse"
                         style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>

              <div className="relative z-10 text-center mb-16">
                <h3 className="text-5xl md:text-6xl font-black mb-8" style={{ color: textPrimary }}>
                  SUCCESS STORY
                </h3>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8">
                  Fintech CEO Transformation
                </div>
                <div className="w-48 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto" />
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <p className="text-xl leading-relaxed" style={{ color: textSecondary }}>
                    Transformed a promising fintech founder into a <span className="font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">recognized industry thought leader</span> with high-profile media placements and viral content.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      "Strategic thought leadership positioning",
                      "Tier-1 media placement strategy", 
                      "Viral LinkedIn content creation",
                      "Executive ghostwriting & op-eds",
                      "Industry conference speaking opportunities"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center text-black font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-lg group-hover:text-indigo-400 transition-colors" style={{ color: textSecondary }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                
                <div className="relative">
                  <div className="text-center p-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 transform rotate-3" />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 transform -rotate-3" />
                    
                    <div className="relative z-10">
                      <div className="text-8xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        500%
                      </div>
                      <div className="text-2xl font-bold mb-4" style={{ color: textPrimary }}>
                        Engagement Growth
                      </div>
                      <div className="text-lg" style={{ color: textSecondary }}>
                        From founder to thought leader
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section 
            id="cta"
            className={`text-center transition-all duration-1500 ease-out ${
              isVisible.cta 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative">
              
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-96 h-96 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 transform rotate-45" />
                  <div className="absolute inset-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform -rotate-45" />
                  <div className="absolute inset-16 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 transform rotate-12" />
                </div>
              </div>

              <div className="relative z-10 py-24">
                <h4 className="text-4xl md:text-6xl font-black mb-8 leading-tight" style={{ color: textPrimary }}>
                  YOUR IDEAS SHOULD
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    LEAD THE CONVERSATION
                  </span>
                </h4>
                
                <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: textSecondary }}>
                  Ready to transform your expertise into industry-leading thought leadership and content that drives engagement?
                </p>
                
                <button
                  className="group relative inline-block"
                >
                    <a
                        href="https://calendly.com/harry-thebot/consultation-with-thebot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-2xl"
                    >
                  <div className="relative px-16 py-6 text-2xl font-bold text-black bg-gradient-to-r from-indigo-400 to-purple-400 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3"
                       style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}>
                    BOOK CLARITY CALL →<ArrowRight className="h-6 w-6" />
                  </div>
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-110"
                       style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContentLeadership;