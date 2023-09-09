import React, { useState } from 'react';
import "../styles/Signup.css";
import { Link } from 'react-router-dom';
import Google from "../images/googleicon.png";
import SignUpModal from '../components/SignUp/SignUpModal.tsx';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      setFormState({
        email: '',
        password: '',
      });
    };

    return (
        <>
            <section className="logincontainer forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>
                        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <div>
              <form onSubmit={handleFormSubmit}>
                <input
                  className="field input-field form-input userinput"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="field input-field form-input userinput"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn postBtn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
              {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
</div>)}
                            <div className="form-link">
                                <a href="#" className="forgot-pass">Forgot password?</a>
                            </div>

                            <div className="field button-field">
                                    <Link to="/dashboard">
                                        <button>Login</button>
                                    </Link>
                                <div>
                                </div>
                            </div>

                        <div className="form-link">
                            <span>Don't have an account?  <SignUpModal className="link signup-link">Signup</SignUpModal></span>
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