import '../styles/Nav.css';


const AppNavbar = () => {
    return (
      <>
  <ul className="nav-links">
    <li className="home"><a href="/">Home</a></li>
    <li className="profile"><a href="profile">Profile</a></li>
    <li className="signup"><a href="signup">Signup/Login</a></li>
    <div class="form-inner">
               <form action="#" className="search">
                  <div class="field control has-icons-left">
                     <input class="input is-success" type="text" placeholder="Search"></input>
                <button class="icon">
                <i class="fas fa-search"></i>
                </button>
                  </div></form>
      </div>
  </ul>
    </>
    )
}

export default AppNavbar;
  