import '../../styles/Carrousel.css';
import vectorleft from '../../assets/Vector-left.png';
import vectorright from '../../assets/Vector-right.png';

import { useState } from 'react';

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex]})`,
  };
  
  return (
    <div className="carrousel">
      <div className="slider">
          <div className="arrow">
            <img className= 'vector' src={vectorleft} alt="vector" onClick={goToPrevious} style={{display: slides.length > 1 ? 'block' : 'none' }} />
            <img className= 'vector' src={vectorright} alt="vector" onClick={goToNext} style={{display: slides.length > 1 ? 'block' : 'none' }} />
          </div>
        <div className="slide" style={slideStylesWidthBackground}>
          <span className="carrousel-index">
            {currentIndex + 1}/{slides.length} 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
