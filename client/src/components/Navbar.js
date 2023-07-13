import '../styles/Nav.css';


const AppNavbar = () => {
    return (
      <>
  <ul className="nav-links">    
    <li className="home"><a href="/">Home</a></li>
    <li className="profile"><a href="profile">Profile</a></li>
    <li className="signup"><a href="signup">Signup/Login</a></li>
  </ul>
    </>
    )
}

export default AppNavbar;
  