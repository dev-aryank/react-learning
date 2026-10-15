import React from 'react'
import "./ProjectCard.css"
import GithubIcon from "../assets/github.svg"

const ProjectCard = () => {
  return (
    <div className='project-card'>
        <div className="img-wrapper">
            <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
        </div>      
        <h3>Uber Clone Application</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, possimus.</p>
        <a href="" className='img-button'>
          <img src={GithubIcon} alt="Github Icon" />
          <span>View on Github</span>
        </a>
    </div>
  )
}

export default ProjectCard
