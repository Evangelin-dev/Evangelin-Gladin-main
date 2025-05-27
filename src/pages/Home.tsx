import React from 'react';
import { Link } from 'react-router-dom';
import FooterTest from '../components/Footer';
import ContactSection from '../components/Connect';


const Home: React.FC = () => {
  return (

    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, I am</h3>
          <h1>Evangelin Gladin</h1>
          <h2>"Helping Entrepreneurs Scale Smarter — Not Harder."</h2>
          <p>
            <br /> Strategic support for founders who need clarity, momentum, and scalable marketing systems.
          </p>

          <div className="social-media">
            <a href="https://www.facebook.com/evangelinglen">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://x.com/evangelingladin">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.instagram.com/evangelingladin/">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/evangelin-gladin-profile/">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>

          <Link to="#" className="btn">
            Book Your Strategy Call
          </Link>
          <br />
          <br />
          <Link to="#" className="btn1">
            Download My 90-Day Growth Checklist
          </Link>
        </div>

        <div className="profession-container">
          <div className="profession-box">
            <div className="profession" style={{ '--i': 0 } as React.CSSProperties}>
              <h3>Founder of BOT</h3>
            </div>
            <div className="profession" style={{ '--i': 1 } as React.CSSProperties}>
              <h3>Marketing Consultant</h3>
            </div>
            <div className="profession" style={{ '--i': 2 } as React.CSSProperties}>
              <h3>ICF PCC-Leadership</h3>
            </div>
            <div className="profession" style={{ '--i': 3 } as React.CSSProperties}>
              <h3>Strategic Coach</h3>
            </div>
            <div className="circle"></div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="home-img">
          <img src="/images/Pic.png" alt="Profile" />
        </div>
      </section>
      <ContactSection />
      <FooterTest />
    </>
  );
};

export default Home;
