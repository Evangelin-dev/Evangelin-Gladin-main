import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <>
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Strategic Marketing</h3>
            <p>
              Crafting targeted marketing strategies that connect your brand with the right audience and drive measurable growth.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3>Rapid Growth</h3>
            <p>
              Accelerating your business with focused strategies that boost visibility, engagement, and revenue quickly.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <i className="bx bx-bar-chart-alt"></i>
            <h3>Real Results</h3>
            <p>
              Delivering measurable outcomes that drive growth, build trust, and create lasting impact for your brand.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="services" id="packages">
        <h2 className="heading">
          <span>Packages</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <h3>30-Day Clarity Sprint (Positioning + Roadmap)</h3>
            <p>
              This focused sprint is designed to help you define your unique value and create a clear, actionable plan. Over 30 days, you’ll gain insight into your positioning, identify your goals, and map out the next steps to move forward with confidence and purpose.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <h3>60-Day Growth Activation (Brand + Outreach Setup)</h3>
            <p>
              This program helps you build a strong brand presence and establish effective outreach channels. Over 60 days, you’ll develop key brand elements and set up strategies to connect with your audience, paving the way for sustainable growth.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <h3>90-Day Scale-Up Support (Campaigns + Planning)</h3>
            <p>
              This phase focuses on executing targeted campaigns and detailed planning to scale your business. Over 90 days, you'll receive guidance to optimize your marketing efforts, track performance, and adjust strategies to maximize impact and growth.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 