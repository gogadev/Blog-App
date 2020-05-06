import React from "react";

import Jump from "react-reveal/Jump";

import "./hero.style.css";

const Hero = () => {
  return (
    <div className="hero">
      <Jump>
        <span className="subtitle">Welcome</span>
      </Jump>
    </div>
  );
};

export default Hero;
