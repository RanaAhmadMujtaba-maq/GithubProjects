import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: 700 }} />
      <div className="f-content" id="text">
      <span><br /><br />Github: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; github.com/ahmadmujaba-23/unity-projects
        <br /><br />Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rahmadmujtaba.maq@gmail.com
        <br /><br />LinkedIn: &nbsp;&nbsp; linkedin.com/in/ahmad-mujtaba-game
        <br /><br />Phone No: &nbsp; +923204176894</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
