import React from 'react';
import './AboutSection.css';
import redhuPhoto from '../assets/redhu.jpg';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <div className='abt-content'>
      <h1 id="mme">About me</h1>

      <div className="abt-grid">
        <ScrollReveal delay={0.1}>
          <div className="photoparent">
            <img className='RedhuPhoto2' src={redhuPhoto} alt="Redhu" /> 
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="contparent">
            <div className="cont">
              <p className='abt_me'>
                I’m Redhu Darsini G, an enthusiastic Information Technology student passionate about building real-world applications that make an impact.
                I enjoy working with technologies like MERN Stack (MongoDB, Express.js, React.js, Node.js), C, and Java, and I love turning ideas into fully functional web solutions.
                <br /><br />
                With strong problem-solving, teamwork, and organizational skills, I’ve coordinated college events and developed projects that aim to simplify people’s lives.
                <br /><br />
                I’m continuously learning, exploring modern web technologies, and working towards becoming a full-stack developer who combines design and logic seamlessly.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default AboutSection;
