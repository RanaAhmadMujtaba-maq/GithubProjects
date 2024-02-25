import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Aligator from "../../img/aligator.jpeg";
import carhunt from "../../img/jeephunt.png";
import city from "../../img/city.jpeg";
import dino from "../../img/dino.jpg";
import fpsenemy from "../../img/fps.png";
import Helicopter from "../../img/helicopter.jpeg";
import racing from "../../img/racing.jpeg";
import spaceship from "../../img/warship.png";
import soccer from "../../img/football.jpeg";
import solar from "../../img/MilkyWayPanorama8K.jpg";
import fpsconfig from "../../img/fps config.webp";
import cube from "../../img/Cube.jpg";
// Import images
import img1 from "./media/CHOSS ACTION.png";
import img2 from "./media/DAILY REWARD.png";
import img3 from "./media/LOADING MOCKUP.png";
import img4 from "./media/Main Menu mockup.png";
import img5 from "./media/PRIVACY.png";
import img6 from "./media/SETTING.png";
import img7 from "./media/YOU LOSS.png";
import img8 from "./media/YOU WIN.png";
import img9 from "./media/ad.png";
import img10 from "./media/congrats.png";
import img11 from "./media/internet.png";
import img12 from "./media/pop.png";
import img13 from "./media/wed1.png";
import img14 from "./media/wed2.png";

// Import videos
import video1 from "./media/5video.mp4";
import video2 from "./media/10video.mp4";

import script1 from './scripts/PlayerEvents.cs';
import APK from './media/Wedding Run @30 jan.apk';

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': 'orange'}}>Recent Project</span>
        <h3 style={{color: darkMode?'white': 'orange'}}>Wedding Run</h3>
        <p style={{color: darkMode?'white': 'white'}}>A 3D Running Game having 7 scenes with 28 levels. Animation, C# Scripting,
           UI implemented, controller for each level designed. 
           Each scene having its own Events script with cinebrain camera setup, ontrigger events handling.
            Particle system used for different fireworks and smoke effects and many more.
        </p>
          {/* slider */}
      <Swiper
        spaceBetween={1}
        slidesPerView={5}
        grabCursor={true}
        className="portfolio-slider"
        style={{paddingBottom: 300, imageOrientation: "from-image"}}
      >
        <SwiperSlide>
        <video controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </SwiperSlide>
        <SwiperSlide>
        <video controls>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img14} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img12} alt="" />
        </SwiperSlide>
      </Swiper>

      <div >
        <a href={script1} download>
          <button className="button s-button" >Download Sample Script</button>
        </a>
        <a href={APK} download>
          <button className="button s-button" >Download Wedding Run APK</button>
        </a>
      </div>

      <span style={{color: darkMode?'white': '', paddingTop: 150}}>My Project Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio2"
        style={{paddingBottom: 350}}
      >
        <SwiperSlide>
          <img src={Aligator} alt="" />
          <div className="text" id="text">
                Aligator 2D
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carhunt} alt="" />
          <div className="text" id="text">
          &nbsp;&nbsp;&nbsp;Car Hunt 2D
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={city} alt="" />
          <div className="text" id="text">
              City Simulation Game
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dino} alt="" />
          <div className="text" id="text">
              Dinomon 2D
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fpsenemy} alt="" />
          <div className="text" id="text">
              FPS Enemy Game
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Helicopter} alt="" />
          <div className="text" id="text">
              Helicopter FPS Game
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={racing} alt="" />
          <div className="text" id="text">
              Racing Game
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaceship} alt="" />
          <div className="text" id="text">
              SpaceShip Hunter 2D
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={soccer} alt="" />
          <div className="text" id="text">
              Soccer Game
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={solar} alt="" />
          <div className="text" id="text">
              Solar System Simulation
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fpsconfig} alt="" />
          <div className="text" id="text">
              FPS Configuration
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cube} alt="" />
          <div className="text" id="text">
              Cube Rotation & Physics Control
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="project-links" style={{paddingTop: 50, paddingBottom: 400}}>
            <br /><br />Github: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://github.com/RanaAhmadMujtaba-maq/GithubProjects/tree/main/unity-projects
            <br /><br />Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ahmadmujtaba.786.maq@gmail.com 
            <br /><br />LinkedIn: &nbsp;&nbsp; linkedin.com/in/ahmad-mujtaba-maq
            <br /><br />Phone No: &nbsp; +923204176894
      </div>
    </div>
  );
};

export default Portfolio;
