import HeaderTestimonial from "./HeaderTestimonial";

const Hero = () => {
  return (
      <div>
          <div id="testimonial-container">
              <HeaderTestimonial text="The best I’ve found." />
              <HeaderTestimonial text="Way easier than Calendly." />
              <HeaderTestimonial text="Okay, I’m hooked!" />
          </div>
          <h1>
              The modern way to <span>find a time to meet</span>
          </h1>
          <p>
              You’ll love it for the flexible controls to keep your calendar
              sane. They’ll love it for the ultra-convenient booking experience.
          </p>
          <button>Try SavvyCal risk-free</button>
          <p>Join over 2,000 happy customers</p>
      </div>
  );
}

export default Hero