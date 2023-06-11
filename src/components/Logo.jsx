import { Link } from "react-router-dom";
import INFO from "../data/user.js";
import { PropTypes } from "prop-types";
import "../styles/Logo.css";

const Logo = (props)=>{
    let { width, link } = props;

    if (link === undefined) {
        link = true;
    }

    const imageElement = (
        <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
    );

    return <>{link ? <Link to="/">{imageElement}</Link> : imageElement}</>;
}
Logo.propTypes = {
    width: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
export default Logo;
