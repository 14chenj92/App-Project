import "../styles/Profile.css";
import Avatar from "../images/avatar.webp";
import React from 'react';
import { Button, Space } from 'antd';
import CalendarApp from '../components/Calendar.tsx';

const Profile = () => {
    return (
      <>
      <div className="box">
      <div className="image">
        <img src={Avatar} alt=""/>
        </div>
        <div className="name_job">Jerry Liu</div>
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>Yoga Instructor</p>
        <p>10 Years Of Experience</p>
        <hr style={{ width: '100%'}} />
        <p>Passionate about yoga and self-improvement. I currently have 38 students all over the world and I love my students.</p>
        <div className="btns">
          <button>Follow</button>
          <button>Chat</button>
        </div>
      </div>
      <div className="activityLog">
      
      </div>
      <div id="container" style={{padding: "24px"}}><CalendarApp/></div>
      </>
    );
  };

export default Profile;