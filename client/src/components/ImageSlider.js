import React, { useState } from 'react';
import "../styles/Homepage.css";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="wrapper">
      <img src={images[currentImageIndex]} alt="Slider" className="carousel" />
      <button onClick={goToPreviousImage}><i class="fa-solid fa-arrow-left button" id="prev"></i></button>
      <button onClick={goToNextImage}><i class="fa-solid fa-arrow-right button" id="next"></i></button>
    </div>
  );
};

export default ImageSlider;
