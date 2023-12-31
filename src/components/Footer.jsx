import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-links">
          <ul className="footer-nav-link-list">
            <li className="footer-nav-link-item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-credits">
          <div className="footer-credits-text">
            © 2023 Abdelilah AKHMIM. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
