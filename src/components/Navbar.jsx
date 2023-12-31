import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { PropTypes } from 'prop-types';

const Navbar = (props)=> {
    const { active } = props;
  return (  
    <>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === "articles" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/articles">Articles</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
Navbar.propTypes = {
  active: PropTypes.string.isRequired,
};
export default Navbar;
