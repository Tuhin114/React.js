import React from "react";
import "../../App.css";

const Skills = ({ skills }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Skills</p>
        <ul>
          {skills.map((skills, index) => (
            <li key={index}>{skills}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
