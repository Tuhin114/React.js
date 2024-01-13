import React from "react";
import "../../App.css";

const Extracurriculars = ({ extracurriculars }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Extracurriculars</p>
        <ul>
          {extracurriculars.map((extracurriculars, index) => (
            <li key={index}>{extracurriculars}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Extracurriculars;
