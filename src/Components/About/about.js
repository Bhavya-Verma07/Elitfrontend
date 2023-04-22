import React from "react";
import treasurebox from "../pictures/treasurebox.jpg";
import "./about.css";
export default function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src={treasurebox} alt="#" />
                </div>
              </div>

              <h2>Play Puzzles</h2>
              <h3>Indian Heritage</h3>
              <h3> & It's Culture</h3>
            </div>

            <ul className="icons">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <h1>
            Hello<span>!</span>
          </h1>
          <h2>Here's what the game is about.</h2>
          <h3>You can start quiz from "Start Quiz" section above.</h3>
          <h4>Note:</h4>
          <h3>
            You can only start the game when you are Registered and Logged in.
          </h3>
          <p>1. Click on Start button to start the game.</p>

          <p>2. Each puzzle has a clue in the form of image, and hint given.</p>
          <p>3. Each step will lead you towards the destination.</p>
          <p>
            4. You will proceed further only if you have answered correctly.
          </p>
          <p>
            5. Click on Save & Next for next question, and Reset to change your
            answer.
          </p>
          <p>
            At the end, you will reach the destination by crossing all the
            puzzles.
          </p>

          <div className="about-para"></div>

          <div className="credit">
            Made by{" "}
            <a href="https://www.linkedin.com/in/bhavyaverma07">Bhavya Verma</a>
          </div>
        </div>
      </div>
    </>
  );
}
