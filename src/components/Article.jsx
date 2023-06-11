import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

const Article = (props) => {
  const { date, title, description, link } = props;
  const formattedDate = date.toISOString();

  return (
    <><div className="article">
      <div className="article-left-side">
        <div className="article-date">{formattedDate}</div>
      </div>

      <Link to={link}>
        <div className="article-right-side">
          <div className="article-title ">{title}</div>
          <div className="article-description">{description}</div>
          <div className="article-link">
            {/* Read Article{" "} */}
            See Project{" "}
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronRight}
            />
          </div>
        </div>
      </Link>
    </div></>
  )
}
Article.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  // formattedDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Article