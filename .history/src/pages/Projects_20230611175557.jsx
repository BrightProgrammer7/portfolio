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
            {project.suptitle}
          </div>

          <div className="subtitle projects-subtitle">
            Over the years, I have worked on various projects and I am proud of the progress I have made. Some of these projects are open-source and available for others to explore and contribute to. If you are interested in any of the projects I have worked on, feel free to check out the code and suggest improvements or ideas for enhancement. Collaborating with others is a great way to learn and grow, and I am always open to new ideas and feedback.
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