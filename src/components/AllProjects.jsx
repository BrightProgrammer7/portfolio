import Project from './Project';
import {INFO} from './../data';
import "../styles/AllProjects.css"
const AllProjects = () => {
  
  return (
    <><div className="all-projects-container">
    {INFO.projects.map((project, index) => (
      <div className="all-projects-project" key={index}>
        <Project
          logo={project.logo}
          title={project.title}
          description={project.description}
          linkText={project.linkText}
          link={project.link}
        />
      </div>
    ))}
  </div></>
  )
}


export default AllProjects