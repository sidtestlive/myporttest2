import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3665468/pexels-photo-3665468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="me-as-a-photographer"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">Right</div>
    </div>
  );
};

export default About;
