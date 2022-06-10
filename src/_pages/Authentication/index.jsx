import React, { useState } from 'react'
import './index.css'

const Authentication = () => {
  const [uname, setUname] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const onLogin = (e) => {
    e.preventDefault()
    if(uname && password) {
      
    }
  }
  const onRegister = (e) => {
    e.preventDefault()
    if(uname && password) {
      
    }
  }
  const signin = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  }
  const signup = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  }
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          {/* Signin */}
          <form action="#" className="sign-in-form" onClick={(e) => onLogin(e)}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name="uname" value={uname} handleChange={(e) => setUname(e.target.value) }/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='password' value={password} handleChange={(e) => setPassword(e.target.value) }/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          {/* signup  */}
          <form action="#" className="sign-up-form" onClick={(e) => onRegister(e)}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name='uname' value={uname} handleChange={(e) => setUname(e.target.value)}/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name='email' value={email} handleChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='password' value={password} handleChange={(e) => setPassword(e.target.value) }/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" name='cpassword' value={cpassword} handleChange={(e) => setCPassword(e.target.value) }/>
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => signup()}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => signin()}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}
export default Authentication