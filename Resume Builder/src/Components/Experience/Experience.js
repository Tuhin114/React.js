import React from "react";
import "../../App.css";

const Experience = ({ experience }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Experience</p>
        <ul>
          <li>{experience}</li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
