import startIcon from '../assets/star.svg'

const HeaderTestimonial = ({text, starsCount}) => {
  return (
      <div>
          <div id="stars">
              {Array.from({ length: starsCount }).map((_, index) => (
                  <img key={index} src={startIcon} alt='Star icon' />
              ))}
          </div>
          <p>"{text}"</p>
      </div>
  );
}

export default HeaderTestimonial