import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"

import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;import React, { useState } from "react";

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

  return (
    <div className="App">
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
            />
            <div>
              <span
                className="forgot-password-link"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password
              </span>
            </div>
          </div>
          <div className="log_sign_btn">
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleSignUp}>Sign Up</button>
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
  );
}
