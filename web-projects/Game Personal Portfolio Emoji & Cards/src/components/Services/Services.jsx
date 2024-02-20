import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Ahmad Mujtaba Game Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "white" }}>My Awesome</span>
        <span>services</span>
        <spane style={{ color: darkMode ? "white" : "white" }}>
          Unlock the potential of your digital dreams with my services. 
          <br /> As a beginner web developer, I offer fresh perspectives and a hunger to innovate. 
          <br /> From crafting stylish websites to enhancing user experiences, 
          <br /> I'm on a mission to turn your ideas into digital reality.
          <br /> Let's embark on this web adventure together!
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards" >
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design & UI"}
            detail={"Figma, visio"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Game Developer"}
            detail={"Unity, C#, Game-Scripting, OOP, DSA"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Other Languages"}
            detail={
              "Java, C++, C"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4rd */}
        <motion.div
          initial={{ left: "-11rem", top: "30rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Tools"}
            detail={
              "Unity, Viso, Figma"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
