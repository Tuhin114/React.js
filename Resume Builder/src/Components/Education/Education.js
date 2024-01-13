import React from "react";
import "../../App.css";

const Education = ({ education }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Education</p>
        <ul>
          {education.map((education, index) => (
            <li key={index}>{education}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Education;
