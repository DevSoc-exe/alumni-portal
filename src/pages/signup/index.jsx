import React, { useState } from "react";
import { Link } from "react-router-dom";
import clgLogo from "../../Resources/ccetLogoBlack.png";
import back from "../../Resources/back.png";

export function Signup() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");

  const handleRegistration = () => {
    // Add your registration logic here
    if (password === confirmPassword) {
      // Registration is successful
      // You can proceed with the registration here
      alert("Registration successful!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  const calculateYearAndBranch = (rollNumber) => {
    if (rollNumber.length === 5) {
      const yearPrefix = rollNumber.substring(0, 2);
      const branchCode = rollNumber.substring(2, 3);

      switch (branchCode) {
        case "1":
          setBranch("Mech");
          break;
        case "2":
          setBranch("Civil");
          break;
        case "3":
          setBranch("CSE");
          break;
        case "5":
          setBranch("ECE");
          break;
        default:
          setBranch("Unknown Branch");
          break;
      }

      setYear(`20${yearPrefix}`);
    } else {
      setYear("");
      setBranch("");
    }
  };

  const handleRollNumberChange = (value) => {
    setRollNumber(value);
    calculateYearAndBranch(value);
  };

  return (
    <div className="login_container">
      <div className="login_panel">
        <div>
        <div className="back-link">
          <Link to="/">
          <img className="back-logo" src={back} alt="Back Logo" />
           Back to Login
          </Link>
        </div>
          <div className="text_input">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="text_input">
            <label>Roll Number:</label>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => handleRollNumberChange(e.target.value)}
            />
          </div>
          <div className="text_input">
            <label className="branch-year">
              Branch: {branch} &nbsp; Year: {year}
            </label>
          </div>
          <div className="text_input">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text_input">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="log_sign_btn">
            <button onClick={handleRegistration}>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="login_clg">
        <div className="clg-container">
          <span>Chandigarh College of Engineering & Technology</span>
          <img className="clg-logo" src={clgLogo} alt="College Logo" />
        </div>
        <h1>Alumni Portal</h1>
        <h3>Lorem Ipsum</h3>
      </div>
    </div>
  );
}
