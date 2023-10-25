import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import Forum from './pages/forum';

function App() {
  
  const currentUser = {name: 'John Doe', userImage: "", email: 'johnDoe@gmail.com', designation: "Senior Product Developer", company: "Google"};
  const posts = [{creatorName: "John Doe", designation: "Senior Product Developer", company: "Google", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", likes: 20, image: ""},];

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forum' element={<Forum posts={posts} currUser={currentUser}/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
