import "../styles/Profile.css";
import Avatar from "../images/avatar.webp";

const Profile = () => {
    return (
      <div class="container">
      <div class="box">
      <div class="image">
        <img src={Avatar} alt=""/>
        </div>
        <div class="name_job">Jerry Liu</div>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p>Yoga Instructor</p>
        <p>10 Years Of Experience</p>
        <hr style={{ width: '100%'}} />
        <p>Passionate about yoga and self-improvement. I currently have 38 students all over the world and I love my students.</p>
        <div class="btns">
          <button>Follow</button>
          <button>Chat</button>
        </div>
      </div>
      </div>
    );
  };

export default Profile;