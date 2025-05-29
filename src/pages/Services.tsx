import React from 'react';
import { Link } from 'react-router-dom';

const titles = [
  "Business Strategy & Growth Consulting",
  "Branding & Positioning Services",
  "Digital Presence Setup",
  "Sales Funnel & Lead Engine Creation",
  "Content & Thought Leadership",
  "Mentorship & One-on-One Coaching"
];

const descriptions = [
  "For startups, small businesses, and founders aiming for scale.",
  "Helping brands become memorable and sales-ready.",
  "For founders or businesses starting from scratch.",
  "Set up scalable lead systems via digital channels.",
  "Positioning yourself as an expert across platforms.",
  "For founders, consultants, or agency owners looking to scale."
];

const pageRoutes = [
  "/services/business-strategy",
  "/services/branding",
  "/services/digital-presence",
  "/services/sales-funnel",
  "/services/content-leadership",
  "/services/mentorship"
];

const Services: React.FC = () => {
  return (
    <>
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>

        <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {titles.map((title, index) => (
            <div className="services-box" key={index}>
              <i className={`bx bx-${index % 2 === 0 ? "code-alt" : "bar-chart-alt"}`}></i>
              <h3>{title}</h3>
              <p>{descriptions[index]}</p>
              <Link to={pageRoutes[index]} className="btn">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
