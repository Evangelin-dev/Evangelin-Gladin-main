import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Case <span>Studies</span>
      </h2>
      <center>

      </center>

      <div className="portfolio-container1">
        <div className="portfolio-box1">
          <img src="/images/portfolio1.jpg" alt="Founder Strategy Tips" />
          <div className="portfolio-layer1">
            <h4>How I Helped X Brand Achieve Y in 60 Days</h4>
            <p>Practical strategies and focused action that delivered measurable growth and impact.</p>
            <Link to="#">
              <i className="bx bx-link-external"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 