import starIcon from '../assets/star.svg'

const HeaderTestimonial = ({text, starsCount}) => {
  return (
      <div className='flex flex-col gap-2 justify-center items-center w-fit group'>
          <div id="stars" className='flex gap-2'>
              {Array.from({ length: starsCount }).map((_, index) => (
                  <img className='w-4 h-4 lg:w-6 lg:h-6 group-hover:animate-spin' key={index} src={starIcon} alt='Star icon' />
              ))}
          </div>
          <p className='font-fancy text-gray-400 text-lg lg:text-xl lg:font-semibold'>"{text}"</p>
      </div>
  );
}

export default HeaderTestimonial