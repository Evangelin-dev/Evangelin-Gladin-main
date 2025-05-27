/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Blog <span>Thought Leadership</span>
      </h2>
      <center>
        <h2 className="title">
          Clarity Corner: <span>Strategies, Stories, Systems</span>
        </h2>
      </center>

      <div className="portfolio-container">
        <div className="portfolio-box">

          <img src="/images/portfolio1.jpg" alt="Founder Strategy Tips" />
          <div className="portfolio-layer">
            <h4>Founder Strategy Tips</h4>
            <p>Insights and practical advice from the founder's perspective to help you navigate challenges and seize opportunities.</p>
            <Link to="#">
              <i className="bx bx-link-external"></i>
            </Link>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="/images/portfolio2.jpg" alt="Marketing Systems" />
          <div className="portfolio-layer">
            <h4>Marketing Systems</h4>
            <p>Proven frameworks and tools to streamline your marketing efforts and drive consistent growth.</p>
            <Link to="#">
              <i className="bx bx-link-external"></i>
            </Link>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="/images/portfolio3.jpg" alt="Scaling Stories" />
          <div className="portfolio-layer">
            <h4>Scaling Stories</h4>
            <p>Real-world experiences of growth, challenges, and success to inspire your journey.</p>
            <Link to="#">
              <i className="bx bx-link-external"></i>
            </Link>

          </div>

        </div>
        <center> <a href="#" className="btn3">  Evangelin's Essays</a> </center>
      </div>
    </section>
  );
};

export default Blog; 