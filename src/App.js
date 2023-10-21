import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"

import { Forum } from "./pages/forum"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forum' element={<Forum />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;