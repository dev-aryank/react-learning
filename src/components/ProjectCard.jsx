import React from 'react'
import "./ProjectCard.css"
import GithubIcon from "../assets/github.svg"

const ProjectCard = ({title, description, imgUrl, githubLink}) => {
  return (
    <div className='project-card'>
        <div className="img-wrapper">
            <img src={imgUrl} alt={"Project Icon "+title} />
        </div>      
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink} className='img-button'>
          <img src={GithubIcon} alt="Github Icon" />
          <span>View on Github</span>
        </a>
    </div>
  )
}

export default ProjectCard
