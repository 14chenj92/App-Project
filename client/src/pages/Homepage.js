import React from 'react';
import ImageSlider from '../components/ImageSlider';
import HomeCard from '../components/Card';
import SearchFilter from '../components/SearchFilter';

import "../styles/Homepage.css";
import Workout from "../images/workout.jpg";
import Workout2 from "../images/workout2.jpg";
import Workout3 from "../images/workout3.avif";
import Workout4 from "../images/workout4.png";
import Avatar from "../images/avatar.webp";

const Homepage = () => { 
    const images = [
      Workout,
      Workout2,
      Workout3,
      Workout4,
    ];
  
    return (
      <div>
        <ImageSlider images={images}/>
        <SearchFilter/>
        <HomeCard
        picture={Avatar}
        name="Jerry Liu"
        title="Good Person"
        />
        <HomeCard
        picture={Avatar}
        name="Kyle Chen"
        title="Weeb"
        />
      </div>
    );
  };
  
  export default Homepage;
  
  
  
  
  