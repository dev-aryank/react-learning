import rightArrow from "../../assets/right-arrow.svg"
import ProjectCard from "../../components/ProjectCard"
import YellowBorder from "../../components/YellowBorder"
import "./MainBody.css"

const MainBody = () => {

  const airBnbProjectObj = {
    title:"AirBnb Hotel Booking Clone",
    description:"AirBnb desc",
    imgUrl:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1920px-Airbnb_Logo_B%C3%A9lo.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail" ,
    githubLink:"https://github.com/dev-aryank/stayease-backend"

  }

  return (
    <main>
      <h2 className='nameHeading'>My name is Aryan</h2>
      <ol>
        <li>I like React Programming</li>
        <li>I like Vite also</li>
        <li>Let's build some interactive react projects!</li>
      </ol>
      <a href="#" className='hire-me-button'>
        <span>Hire Me</span>
        <img src={rightArrow} alt="Right arrow" />
      </a>

      <section className="project-section">
        <YellowBorder>
          <h2>These are my Projects</h2> {/* This h2 is passed as children prop inside the YellowBorder component */}
        </YellowBorder>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, aut.</p>

        <div className="project-container">
          <ProjectCard title="Uber Clone Application" 
                      description="Uber desc" 
                      imgUrl="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail" 
                      githubLink="https://github.com/dev-aryank" />
          
          <ProjectCard {...airBnbProjectObj}/>
          
          <ProjectCard title="LinkedIn Microservice Project" 
                      description="LinkedIn desc" 
                      imgUrl="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1920px-LinkedIn_2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
                      githubLink="https://github.com/dev-aryank" />
        </div>
      </section>
    </main>
  )
}

export default MainBody
