import React from "react";
import "../../App.css";

const Education = ({ education }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Education</p>
        <ul>
          <li>{education}</li>
        </ul>
      </div>
    </>
  );
};

export default Education;
