import { useEffect } from "react";
import { Footer, Logo, Navbar, Socials } from "../components";
import { INFO } from "../data";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    document.title = `About | ${INFO.main.title}`;
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about-content">
        <Navbar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-left-side">
                <div className="title about-title text-6xl">
                  {INFO.about.title} 
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>
              </div>
              <div className="about-right-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src="about.jpg" alt="about" className="about-image" />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
