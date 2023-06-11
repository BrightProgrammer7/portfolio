import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Card.css";
import { PropTypes } from "prop-types";

const Card = (props) => {
  const { icon, title, body } = props;

  return (
    <>
      <div className="card">
        <div className="card-container">
          <div className="card-header">
            <div className="card-icon">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="card-title">{title}</div>
          </div>
          <div className="card-body">
            <div className="card-text">{body}</div>
          </div>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default Card;
