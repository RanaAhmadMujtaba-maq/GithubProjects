import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import TourExplorer from "../../img/Tour Explorer.png";
import imageSlider from "../../img/image Slider.png";
import whatsapp from "../../img/whatsapp.jpeg";
import unichat from "../../img/unichat.png";
import instagram from "../../img/instagram.jpeg";
import Shopping from "../../img/Online Shopping Site.png";
import MobileCourse from "../../img/Mobile React Native Course.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={TourExplorer} alt="" />
          <div className="text" id="text">
                Tour Explorer
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={unichat} alt="" />
          <div className="text" id="text">
          &nbsp;&nbsp;&nbsp;UniChat
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageSlider} alt="" />
          <div className="text" id="text">
              ImageSlider
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shopping} alt="" />
          <div className="text" id="text">
              Online Shopping Site
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MobileCourse} alt="" />
          <div className="text" id="text">
              MobileCourse
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={instagram} alt="" />
          <div className="text" id="text">
              Tour Explorer
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={whatsapp} alt="" />
          <div className="text" id="text">
              Whatsapp Clone
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
            <br /><br />Github: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; github.com/ahmadmujaba-23/web-projects
            <br /><br />Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rahmadmujtaba.maq@gmail.com 
            <br /><br />LinkedIn: &nbsp;&nbsp; linkedin.com/in/ahmad-mujtaba-maq
      </div>
    </div>
  );
};

export default Portfolio;
