// import React, { useState } from 'react';
// import "../styles/Homepage.css";

// const ImageSlider = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPreviousImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="wrapper">
//       <img src={images[currentImageIndex]} alt="Slider" className="carousel" />
//       <button onClick={goToPreviousImage}><i class="fa-solid fa-arrow-left button" id="prev"></i></button>
//       <button onClick={goToNextImage}><i class="fa-solid fa-arrow-right button" id="next"></i></button>
//     </div>
//   );
// };

// export default ImageSlider;

import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ImageSlider: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>Picture 1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default ImageSlider;
