import "../styles/Profile.css";
import Avatar from "../images/avatar.webp";

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
      <p>Activity Log</p>
      <div className="monthText">January 2023</div>
    <table bgcolor="lightgrey" align="center" 
        cellspacing="21" cellpadding="21">
        <tbody>
            <tr><td></td><td></td><td></td><td></td><td></td><td>1</td><td>2</td></tr>
            <tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
            <tr><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr>
            <tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr>
            <tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>
            <tr><td>31</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
        </tbody>
    </table>
      </div>
      </>
    );
  };

export default Profile;