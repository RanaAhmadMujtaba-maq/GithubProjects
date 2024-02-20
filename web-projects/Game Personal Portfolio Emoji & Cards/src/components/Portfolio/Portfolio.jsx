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
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': 'white'}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
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

      <div className="project-links">
            <br /><br />Github: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; github.com/ahmadmujaba-23/unity-projects
            <br /><br />Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rahmadmujtaba.maq@gmail.com 
            <br /><br />LinkedIn: &nbsp;&nbsp; linkedin.com/in/ahmad-mujtaba-game
      </div>
    </div>
  );
};

export default Portfolio;
