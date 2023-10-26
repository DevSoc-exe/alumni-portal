import React, { useState } from "react";
import { Link } from "react-router-dom";
import clgLogo from "../Resources/ccetLogoBlack.png";

export function Login() {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = () => {
    // Simulate login logic here (e.g., check credentials)
    if (rollNumber === "yourRollNumber" && password === "yourPassword") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    // You can implement a password reset feature here
    alert("Forgot password functionality not implemented in this example.");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login_container">

      <div className="login_panel">
        {loggedIn ? (
          <div>
            <h2>Welcome, {rollNumber}!</h2>
            <button onClick={() => setLoggedIn(false)}>Log Out</button>
          </div>
        ) : (
          <div>

            <div className="text_input">
              <label>Roll Number:</label>
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>

            <div className="text_input">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <div className="forgot-password-link">
                <span onClick={() => setShowForgotPassword(true)}>
                  Forgot Password
                </span>
              </div>
            </div>

            <div className="log_sign_btn">
              <button className="log_btn" onClick={handleLogin}>
                Log In
              </button>
              <Link to="/signup">
              <div className="signup_btn">
                <button className="sign_btn">
                  Sign Up
                </button>
              </div>
              </Link>
            </div>
          </div>

        )}

        {showForgotPassword && (
          <div>
            <h2>Forgot Password</h2>
            <div>
              <label>Enter Your Email:</label>
              <input type="email" />
            </div>
            <button onClick={handleForgotPassword}>Submit</button>
            <button onClick={() => setShowForgotPassword(false)}>Cancel</button>
          </div>
        )}
      </div>

      <div className="login_clg">
        <div className="clg-container">
          <span>Chandigarh College of Engineering & Technology</span>
          <img className="clg-logo" src={clgLogo} alt="text"/>
        </div>
        <h1>Alumni Portal</h1>
        <h3>Lorem Ipsum</h3>
      </div>

    </div>
  );
}
