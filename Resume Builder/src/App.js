import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div id="header"></div>
      <div className="left"></div>
      <div className="stuff">
        <br />
        <br />
        <h1>Resume</h1>
        <h2>Emily</h2>
        <hr />
        <br />
        <p className="head">Interests</p>
        <ul>
          <li>Drawing</li>
          <li>Photography</li>
          <li>Design</li>
          <li>Programming</li>
          <li>Computer Science</li>
        </ul>
        <p className="head">Skills</p>
        <ul>
          <li>Web Design with HTML & CSS</li>
        </ul>
        <p className="head">Education</p>
        <ul>
          <li>
            <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
              Wilton High School
            </a>
          </li>
          <li>
            <a href="https://www.silvermineart.org/">
              Silvermine School of Arts
            </a>
          </li>
          <li>Codeacademy</li>
        </ul>
        <p className="head">Experience</p>
        <ul>
          <li>Student Technology Intern for Wilton School District</li>
          <li>Babysitter</li>
        </ul>
        <p className="head">Extracurriculars</p>
        <ul>
          <li>Recycling Club</li>
          <li>Gardening Club</li>
          <li>Book Club</li>
        </ul>
      </div>
      <div className="right"></div>
      <div id="footer">
        <h2 id="name">Emily</h2>
      </div>
    </div>
  );
};

export default App;
