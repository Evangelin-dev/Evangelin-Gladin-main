import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="\images\Bot-new-logo.jpg" alt="About" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <br></br>
        <h3>
          I’m Evangelin Gladin—founder, strategist, and builder. I believe India’s next wave of innovation doesn’t need skyscrapers. It can rise from soil, struggle, and soul.
        </h3>
        <p>
          While our tech hub in Thidiyur is still under construction, the mission has already begun—training local talent, creating digital jobs, and building systems that help businesses scale globally.

        </p>
        <p>
          I’m not waiting for perfection. I’m moving with purpose. From Dharavi to Digital, from coaching to code, I’m here to prove that vision backed by work ethic can change lives—locally and globally.
        </p>
        <Link to="#" className="btn">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default About; 