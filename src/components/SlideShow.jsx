import { useState } from "react";
import { useParams } from "react-router-dom";
import HouseListing from "../assets/logements.json";
import "../styles/SlideShow.css";
import arrowLeft from "../assets/arrow_back_ios-24px 1.png";
import arrowRight from "../assets/arrow_forward_ios-24px 1.png";

function SlideShow() {
  const { id } = useParams();
  const logement = HouseListing.find((log) => log.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const pictures = logement.pictures;

  const NextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const PrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="displaySlideshow">
      <img
        src={pictures[currentIndex]}
        alt={`${logement.title} ${currentIndex + 1}`}
        className="houseSlideShow"
      />

      {pictures.length > 1 && ( // Afficher les flèches seulement s'il y a plusieurs images
        <div className="arrow__links">
          <button onClick={PrevSlide}>
            <img src={arrowLeft} alt="Précédent" className="arrowLeft" />
          </button>
          <button onClick={NextSlide}>
            <img src={arrowRight} alt="Suivant" className="arrowRight" />
          </button>
        </div>
      )}
    </div>
    </>
  );
}

export default SlideShow;
