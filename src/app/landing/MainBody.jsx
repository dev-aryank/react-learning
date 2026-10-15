import rightArrow from "../../assets/right-arrow.svg"
import ProjectCard from "../../components/ProjectCard"
import "./MainBody.css"

const MainBody = () => {
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
        <h2>These are my Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, aut.</p>

        <div className="project-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </main>
  )
}

export default MainBody
