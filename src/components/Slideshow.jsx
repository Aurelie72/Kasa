import { useState } from "react";
import "../styles/slidehow.scss";

import arrowback from "../assets/arrow_back.svg";
import arrownext from "../assets/arrow_next.svg";

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);

  const length = pictures.length;

  const prevSlide = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  return (
    <div className="slideshow">
      <img src={pictures[index]} alt="logement" className="slide-image" />

      {length > 1 && (
        <>
          <img
            src={arrowback}
            alt="précédent"
            className="arrow left"
            onClick={prevSlide}
          />
          <img
            src={arrownext}
            alt="suivant"
            className="arrow right"
            onClick={nextSlide}
          />
          <div className="slide-counter">
            {index + 1} / {length}
          </div>
        </>
      )}
    </div>
  );
}
export default Slideshow;
