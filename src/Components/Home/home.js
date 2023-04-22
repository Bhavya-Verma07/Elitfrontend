import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import bgimage from "../pictures/binoculars-magnifying-glass-retro-maps.jpg";
import treasurebox from "../pictures/treasurebox.jpg";
import playpuzzle from "../pictures/bgpuzzles.jpg";
import { Link } from 'react-router-dom';

const images = [
    {
        url:playpuzzle
    },
    {
        url:treasurebox
    }
]

const Home = () => {
  return (
    <div
    style={{ 
      backgroundImage: {bgimage},
      paddingTop: "30px",
      height: "100vh",
    }}
  >
    <center>
      <h1 style={{color:"redsmoke"}}>Welcome to Incredible India</h1>
    </center>
    <center>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </center>
    <div>
      <center>
        <h3 style={{ color: "black" }}>
         Start the game.
        </h3>
        <h4>Instrnctions</h4>
        <div>
        <Link to="/About">
            <button type="button" className="white_btn" style={{color:"green"}}>
             Click Here For Instructions
            </button>
          </Link>
          </div>
      </center>
    </div>
  </div>
  )
}

export default Home;