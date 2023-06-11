import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Works.css';
import Card from './Card';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Works = () => {
  return (
    <><FontAwesomeIcon
      icon={faBriefcase}
      className="work-icon"
    />
      <Card /></>
  )
}

export default Works