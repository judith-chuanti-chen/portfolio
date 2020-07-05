import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({projects, title, showLink}) => {
  return (
  <section className="section projects">
    <Title title={title}/>
    <div className="section-center projects-center">
      {projects.map((project, index)=> 
        {return <Project key={project.id} index={index} {...project}/>}
        )}
    </div>
    {
      showLink && 
      (<Link to="/projects" className="btn center-btn">PROJECTS</Link>) //if showLink is true, then we render <Link>
    }
</section>)
}

export default Projects
