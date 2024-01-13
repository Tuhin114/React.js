import React from "react";
import "../../App.css";

const Skills = ({ skills }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Skills</p>
        <ul>
          <li>{skills}</li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
