import React from 'react';
import "../../styles/Homepage.css";
import Workout from "../../images/workout.jpg";
import Workout2 from "../../images/workout2.jpg";
import Workout3 from "../../images/workout3.avif";
import Workout4 from "../../images/workout4.png";

import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'blue',
  marginBottom: '5%'
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img src={Workout} style={contentStyle}></img>
    </div>
    <div>
    <img src={Workout2} style={contentStyle}></img>
    </div>
    <div>
    <img src={Workout3} style={contentStyle}></img>
    </div>
    <div>
    <img src={Workout4} style={contentStyle}></img>
    </div>
  </Carousel>
);

export default App;
