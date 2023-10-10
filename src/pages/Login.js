import React, { useState } from 'react';


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

  const handleSignUp = () => {
    // You can implement a sign-up logic here
    alert("Sign up functionality not implemented in this example.");
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
                onKeyPress={handleKeyPress}
              />
              <div className='forgot-password-link'>
                <span
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password
                </span>
              </div>
            </div>
            <div className="log_sign_btn">
              <button className="log_btn" onClick={handleLogin}>
                Log In
              </button>
              <button className="sign_btn" onClick={handleSignUp}>
                Sign Up
              </button>
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
        <h1>Alumni Portal</h1>
      </div>
    </div>
  );
}
