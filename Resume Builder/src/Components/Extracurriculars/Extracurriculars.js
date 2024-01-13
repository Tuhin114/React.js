import React from "react";
import "../../App.css";

const Extracurriculars = ({ extracurriculars }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Extracurriculars</p>
        <ul>
          <li>{extracurriculars}</li>
        </ul>
      </div>
    </>
  );
};

export default Extracurriculars;
