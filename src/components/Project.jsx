import '../styles/Project.css'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const Project = (props) => {
    const { logo, title, description, linkText, link } = props;
    return (
        <><div className="project">
            <Link to={link}>
                <div className="project-container">
                    <div className="project-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="project-title">{title}</div>
                    <div className="project-description">{description}</div>
                    <div className="project-link">
                        <div className="project-link-icon">
                            <FontAwesomeIcon icon={faLink} />
                        </div>

                        <div className="project-link-text">{linkText}</div>
                    </div>
                </div>
            </Link>
        </div></>
    )
}
Project.propTypes = {
    logo: PropTypes.instanceOf(Date).isRequired,
    // formattedDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
  };
export default Project