
import { Navbar, Logo} from '../components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import {INFO} from '../data';
import '../styles/NotFound.css'


const NotFound = () => {
  useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);
  return (
    <><div className="not-found page-content">
      <Navbar />
      <div className="content-wrapper">
        <div className="notfound-logo-container">
          <div className="projects-logo">
            <Logo width={46} />
          </div>
        </div>
        <div className="notfound-container">
          <div className="notfound-message">
            <div className="notfound-title">
              Oops! <FontAwesomeIcon icon={faFaceSadTear} />
            </div>
            <div className="not-found-message">
              We can`t seem to find the page you`re looking
              for.
              <br />
              The requested URL `{window.location.href}` was
              not found on this server.
            </div>
            <a href="/" className="not-found-link">
              Go back to the home page
            </a>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default NotFound