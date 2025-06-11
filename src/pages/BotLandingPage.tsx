import Navbar from "../botlanding/components/hero";
import TestimonialSection from '../botlanding/components/test'
import { FeaturesSectionDemo } from "../botlanding/components/you";
import  IsThisYou  from "../botlanding/components/isit";
import  PromoSection  from "../botlanding/components/aork";
import InvestmentOutcome from "../botlanding/components/InvestmentOutcome";
import Footer from '../botlanding/components/Footer';
import LogoCloudSection from "../botlanding/components/logo";
import WhatAppTest from "../botlanding/components/whatAppTest";
import PopupApplicationForm from "../botlanding/components/ApplicationForm";
import LiveNotifications from "../botlanding/components/NotificationPopup";
import IndustriesWeServe from "../botlanding/components/Indrustries";
import AnimatedClientsShowcase from "../botlanding/components/OurClients";
import { BackgroundBeams } from "../botlanding/components/ui/background-beams";

function BotLandingPage() {
    return (
        <>
            <style>{`
                .bot-landing-container {
                    width: 100vw !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    max-width: none !important;
                    box-sizing: border-box !important;
                    overflow-x: hidden !important;
                }
                
                .bot-landing-container * {
                    box-sizing: border-box !important;
                }
                
                
                .bot-landing-container .max-w-7xl,
                .bot-landing-container .max-w-6xl,
                .bot-landing-container .max-w-5xl,
                .bot-landing-container .max-w-4xl,
                .bot-landing-container .max-w-3xl,
                .bot-landing-container .max-w-2xl,
                .bot-landing-container .max-w-xl,
                .bot-landing-container .container {
                    max-width: none !important;
                    width: 100% !important;
                }
                
                
                .bot-landing-container section,
                .bot-landing-container header,
                .bot-landing-container nav,
                .bot-landing-container footer {
                    width: 100% !important;
                    max-width: none !important;
                }
                
                
                .bot-landing-container .mx-auto {
                    margin-left: auto !important;
                    margin-right: auto !important;
                    max-width: 1200px !important;
                }
                
                
                .bot-landing-container {
                    font-size: 16px !important;
                    line-height: 1.5 !important;
                }
                
                
                .bot-landing-container h1 {
                    font-size: clamp(2.5rem, 8vw, 8rem) !important;
                    line-height: 1.1 !important;
                }
                
                .bot-landing-container h2 {
                    font-size: clamp(2rem, 5vw, 4rem) !important;
                    line-height: 1.2 !important;
                }
                
                .bot-landing-container h3 {
                    font-size: clamp(1.5rem, 3vw, 2.5rem) !important;
                    line-height: 1.3 !important;
                }
                
                .bot-landing-container p {
                    font-size: clamp(1rem, 2vw, 1.25rem) !important;
                    line-height: 1.6 !important;
                }
                
                .bot-landing-container .text-xs { font-size: 0.75rem !important; }
                .bot-landing-container .text-sm { font-size: 0.875rem !important; }
                .bot-landing-container .text-base { font-size: 1rem !important; }
                .bot-landing-container .text-lg { font-size: 1.125rem !important; }
                .bot-landing-container .text-xl { font-size: 1.25rem !important; }
                .bot-landing-container .text-2xl { font-size: 1.5rem !important; }
                .bot-landing-container .text-3xl { font-size: 1.875rem !important; }
                .bot-landing-container .text-4xl { font-size: 2.25rem !important; }
                .bot-landing-container .text-5xl { font-size: 3rem !important; }
                .bot-landing-container .text-6xl { font-size: 3.75rem !important; }
                .bot-landing-container .text-7xl { font-size: 4.5rem !important; }
                .bot-landing-container .text-8xl { font-size: 6rem !important; }
                .bot-landing-container .text-9xl { font-size: 8rem !important; }
                
                .bot-landing-container button,
                .bot-landing-container .btn,
                .bot-landing-container a[class*="bg-gradient"] {
                    font-size: 1.125rem !important;
                    padding: 1rem 2rem !important;
                }
                
                
                
                    font-size: inherit !important;
                } */
            `}</style>
            
            <div className="bot-landing-container">
                        <div className="fixed inset-0 -z-10 pointer-events-none">
          <BackgroundBeams />
        </div>
                <Navbar />
                <LogoCloudSection />
                <IsThisYou />
                <FeaturesSectionDemo />
                <InvestmentOutcome />
                <PromoSection />
                <TestimonialSection />
                <PopupApplicationForm />
                <LiveNotifications />
                <WhatAppTest />
                <AnimatedClientsShowcase />
                <IndustriesWeServe />
                <Footer />
            </div>
        </>
    )
}

export default BotLandingPage