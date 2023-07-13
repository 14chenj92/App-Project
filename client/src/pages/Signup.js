import "../styles/Signup.css";
import Google from "../images/googleicon.png";

const Signup = () => {
    return (
      <>
        <section className="logincontainer forms">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"></input>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Password" className="password"></input>
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="form-link">
                            <a href="#" className="forgot-pass">Forgot password?</a>
                        </div>

                        <div className="field button-field">
                            <button>Login</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Don't have an account? <a href="#" className="link signup-link">Signup</a></span>
                    </div>
                </div>

                <div className="line"></div>

                <div className="media-options">
                    <a href="#" className="field facebook">
                        <i className="fab fa-facebook facebook-icon"></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="#" alt="" className="google-img"></img>
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>

            <div className="form signup">
                <div className="form-content">
                    <header>Signup</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"></input>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Create password" className="password"></input>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Confirm password" className="password"></input>
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Already have an account? <a href="#" className="link login-link">Login</a></span>
                    </div>
                </div>

                <div className="line"></div>

                <div className="media-options">
                    <a href="#" className="field facebook">
                        <i className='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div className="media-options">
                    <a href="#" className="field google">
                        <img src={Google} alt="" className="google-img"></img>
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>
        </section>
      </>
    );
  };

export default Signup;