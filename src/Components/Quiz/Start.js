import React from "react";
import "./Start.css";
import backgimg from "../bgimages/binoculars-magnifying-glass-retro-maps.jpg";
import { useAuth } from "../../Context copy/QuizHolder";

const Start = () => {
  const { setStart, user } = useAuth();
  if (user)
    return (
      <div
        className="startbutton"
        style={{
          height: "80%",
          width: "100wh",
          backgroundImage: { backgimg },
          backgroundSize: "100%",
          borderRadius: "10px",
          borderWidth: "2px",
          borderColor: "rgb(130, 115, 115)",
        }}
      >
        <button className="Startbtn" onClick={() => setStart(true)}>
          Start
        </button>
      </div>
    );
  else
    return (
      <>
        <p>You have been logged out, Please login</p>
      </>
    );
};

export default Start;
