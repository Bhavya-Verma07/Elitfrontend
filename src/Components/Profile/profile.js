import React from "react";

import "./profile.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await axios.get("/logout");
    //  console.log(res);
       navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="profilePage">
      This is my profile
      <button
        onClick={() => {
          logout();
        }}
        style={{
          backgroundColor: "yellow",
          borderWidth: "4px",
          margin: "3px",
          borderColor: "yellow",
        }}
      >
        Log out
      </button>
    </div>
  );
}
