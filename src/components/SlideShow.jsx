import { useState } from "react"
import HouseListing from '../assets/logements.json'
import '../styles/SlideShow.css'
import arrowLeft from '../assets/arrow_back_ios-24px 1.png'
import arrowRight from '../assets/arrow_forward_ios-24px 1.png'
function SlideShow () {
    const pictures = HouseListing.flatMap((id) => id.pictures)
    const [currentIndex, setCurrentIndex] = useState(0);

  const NextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const PrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
    





    return (
        <div>
             <nav className="displaySlideshow">

             <img src={pictures[currentIndex]} alt={`Photo ${currentIndex + 1}`}
        className= 'houseSlideShow'/>
        
        <div className="arrow__links">
            <button onClick={PrevSlide}><img src={arrowLeft }alt="arrow left" className="arrowLeft" /></button>
            <button onClick={NextSlide}><img src={arrowRight}alt="arrow Right" className="arrowRight" /></button>
           
        </div>
    </nav>

        </div>
    )
}

export default SlideShow