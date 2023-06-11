import { useEffect } from "react";
import { Navbar, Logo, Footer, AllProjects } from './../components';
import { INFO } from "../data";
import "../styles/Projects.css";

const Projects = () => {
  useEffect(() => {
    document.title = `Projects | ${INFO.main.title}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <><div className="projects-content">
      <Navbar active="projects" />
      <div className="content-wrapper">
        <div className="projects-logo-container">
          <div className="projects-logo">
            <Logo width={46} />
          </div>
        </div>
        <div className="projects-container">
          <div className="title projects-title">
            {INFO.project.suptitle}
          </div>

          <div className="subtitle projects-subtitle">
          {project.subtitle}
          </div>

          <div className="projects-list">
            <AllProjects />
          </div>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div></>

  )
}

export default Projects