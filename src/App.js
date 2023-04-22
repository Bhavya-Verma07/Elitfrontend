// import logo from './logo.svg';

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "./Components/Navbar";
import Register from "./Components/Register/register";
import Login from "./Components/Login/loginpage";
// import Logout from "./Components/Logout/logout";
import About from "./Components/About/about";
import Profile from "./Components/Profile/profile";
import Error from "./Components/Error";
import Home from "./Components/Home/home";
import Quiz from "./Components/Quiz";
import { ProvideAuth } from "./Context copy/QuizHolder";

function App() {
  return (
    <>
      <ProvideAuth>
        <ButtonAppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Startquiz" element={<Quiz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ProvideAuth>
    </>
  );
}

export default App;
