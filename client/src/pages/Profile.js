import "../styles/Profile.css";
import Avatar from "../images/avatar.webp";
import Workout from "../images/workout.jpg";
import React from 'react';
import { Button, Rate } from 'antd';
import CalendarApp from '../components/Profile/Calendar.tsx';
import Classes from '../components/Profile/Classes';
import Reviews from '../components/Profile/Reviews';

const Profile = () => {
    return (
      <>
      <div className="topSection">
      <div className="box">
      <div className="image">
        <img src={Avatar} alt=""/>
        </div>
        <div className="name_job">Jerry Liu</div>
        <Rate />
        <p>Yoga Instructor</p>
        <p>10 Years Of Experience</p>
        <hr style={{ width: '100%'}} />
        <p>Passionate about yoga and self-improvement. I currently have 38 students all over the world and I love my students.</p>
        <div className="btns">
          <button>Follow</button>
          <button>Chat</button>
        </div>
      </div>
      <div className="stockPhoto">
      <img src={Workout} alt=""/>
      </div>
      <aside>
      <h2 style={{ margin: '30px 0px 30px 0px'}}>Reviews</h2>
      <Reviews
      name="Kyle Chen"
      desc="I've been working with Jerry for over 6 months now, He's very professional and updates my routine on a weekly basis."
      user="K"
      />
      <Reviews
      name="Justin Fong"
      desc="Amazing experience so far. Class gradually increase in difficulty. Worth it!"
      user="J"
      />
      </aside>
      </div>
      <div className="bottomSection">
      <div className="calendar" style={{padding: "24px"}}>
      <h2 style={{textAlign: "center", marginBottom:"15px"}}>Activity Log</h2>
      <CalendarApp id="calendar"/>
      </div>
      <div className="classesSection">
      <h2>Classes</h2>
      <Classes
      activity="Yoga"
      plan="1 Month Plan"
      desc="This will include 1 month of daily routines and weekly challenges tailored to your level."/>
      <Classes
      activity="Yoga"
      plan="3 Month Plan"
      desc="This will include 3 months of extensive yoga program customized for your level."/>
      <Classes
      activity="Yoga"
      plan="1 Session, 1-1 Video Session"
      desc="This will include 1 yoga session of 1 on 1 via Zoom."/>
      </div>
      </div>
      </>
    );
  };

export default Profile;