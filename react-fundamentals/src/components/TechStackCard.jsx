import React from 'react'
import "./TechStackCard.css"

const TechStackCard = ({name, image}) => {
  return (
    <div className='techstack-card'>
        <img src={image} alt={name} />      
    </div>
  )
}

export default TechStackCard
