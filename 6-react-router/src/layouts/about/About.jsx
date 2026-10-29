import { lazy, Suspense, useState } from "react";
import Loader from "../../component/Loader";
const AboutMe = lazy(() => import("./AboutMe"));

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>About Us</h1>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="bg-amber-300 cursor-pointer"
      >
        Toggle About Me
      </button>
      <Suspense fallback={<Loader />}>{show && <AboutMe />}</Suspense>
    </div>
  );
};

export default About;
