import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':'', fontSize:23}}>Freshy</div>
        <span  style={{color: darkMode?'white':'whitesmoke'}}>2023 </span>
        <span>Graduated</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2.83</div>
        <span  style={{color: darkMode?'white':'whitesmoke'}}>CGPA </span>
        <span>BS-SE</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':'', fontSize:12}}>+923204176894</div>
        <span  style={{color: darkMode?'white':'whitesmoke'}}>Phone</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Experience;
