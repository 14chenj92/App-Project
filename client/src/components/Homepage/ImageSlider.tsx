
import React from 'react';
import { Carousel } from 'antd';
// import Workout from "../../images/workout.jpg";

const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'end',
  background: '#364d79',
};

const Picture1: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  textAlign: 'end',
  fontSize: '24px',
  background: 'black',
  position:'relative'
};

const text: React.CSSProperties = {
  alignSelf: 'flex-end'
};

const ImageSlider: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel style={Picture1} afterChange={onChange}>
      <div>
        <h3 style={text}>Find Your Personal Trainer Today</h3>
      </div>
      <div>
        <h3 style={contentStyle}> </h3>
      </div>
      <div>
        <h3 style={contentStyle}> </h3>
      </div>
      <div>
        <h3 style={contentStyle}> </h3>
      </div>
    </Carousel>
  );
};

export default ImageSlider;
