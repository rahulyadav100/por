import React from "react";
import Navbar from "../Components/Navbar";
import "../Pages-css/About.css";
function About() {
  return (
    <div className="About-main">
      <Navbar />
      <div className="about-main-head">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-content-1"></div>
        <div className="about-content-2">
          <div className="about-content-2-1">
            <p>
              Enthusiastic and detail-oriented Full Stack Developer with a
              strong foundation in both front-end and back-end technologies.
              Eager to leverage my skills in JavaScript, Node.js, and React to
              contribute to innovative and impactful projects. Adept at
              problem-solving and passionate about continuous learning and
              growth in the tech industry.
            </p>
          </div>
          <div className="about-content-2-2">
            <h2>10th</h2>
            <h2>07-2019 to 04-2020 </h2>
          </div>

          <div className="about-content-2-2">
            <h2>12th</h2>
            <h2>07-2020 to 04-2022 </h2>
          </div>

          <div className="about-content-2-2">
            <h2>B.SC Computer Science</h2>
            <h2>07-2022 to 04-2025 </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
