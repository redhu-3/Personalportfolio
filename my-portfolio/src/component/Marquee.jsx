import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const text = "MERN STACK • USER-FOCUSED WEB SOLUTIONS • INTERACTIVE MOTION DESIGN • FULL-STACK DEVELOPMENT • CLEAN CODE • ";
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
