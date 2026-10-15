import rightArrow from "../../assets/right-arrow.svg"
import ProjectCard from "../../components/ProjectCard"
import TechStackCard from "../../components/TechStackCard"
import YellowBorder from "../../components/YellowBorder"
import "./MainBody.css"

const MainBody = () => {

  const projectList = [
    {
      title:"Uber Clone Application",
      description:"Uber desc",
      imgUrl:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail" ,
      githubLink:"https://github.com/dev-aryank"
    },
    {
      title:"AirBnb Hotel Booking Clone",
      description:"AirBnb desc",
      imgUrl:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1920px-Airbnb_Logo_B%C3%A9lo.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail" ,
      githubLink:"https://github.com/dev-aryank/stayease-backend"
    },
    {
      title:"LinkedIn Microservice Project",
      description:"LinkedIn desc",
      imgUrl:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1920px-LinkedIn_2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail" ,
      githubLink:"https://github.com/dev-aryank"
    }
  ];

  const techStackList = [
    {name: "C++", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ISO_C%2B%2B_Logo.svg"},
    {name: "Java",image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"},
    {name: "Spring Boot",image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Spring_Boot.svg"},
    {name: "PostgreSQL",image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Postgresql_elephant.svg"},
    {name: "Redis",image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Logo-redis_(old).svg"},
    {name: "Kafka",image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Apache_Kafka_logo.svg"},
    {name: "JavaScript",image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
    {name: "Node.js",image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Node.js_logo.svg"},
    {name: "NestJS",image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/NestJS.svg"}
  ];  

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
        {/* <YellowBorder>
          <h2>These are my Projects</h2>  This h2 is passed as children prop inside the YellowBorder component 
        </YellowBorder> 
        */}
        <h2>These are my Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, aut.</p>

        <div className="project-container">

          {projectList.map(project => <ProjectCard {...project} key={project.title}/>)};

        </div>
      </section>

      <section className="techstack-section">
        <h2>Technologies that I know.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, aut.</p>

        <div className="techstack-container">
          {techStackList.map(techStack => <TechStackCard {...techStack} key={techStack.name}/>)}
        </div>
      </section>
    </main>
  )
}

export default MainBody
