import React from "react";
import '../styles/Card.css';

const pictureStyle = {
  width: '100px',
  height: '100px'
};

function HomeCard(props) {
    return (
      <div className="homepageCard col-sm-4">
      <div className="content">
        <div className="img">
         <img src={props.picture} alt="" style={pictureStyle}/>
        </div>
        <div className="details">
          <div className="name">{props.name}</div>
          <div className="job">{props.title}</div>
        </div>
        <div className="media-icons">
          <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      </div>
    );
  }
  
  export default HomeCard;