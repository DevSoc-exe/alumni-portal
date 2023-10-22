import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import Forum from './pages/forum';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
