import React from "react";
import "../../App.css";
const Heading = ({ title }) => {
  return (
    <div>
      <div className="stuff">
        <br />
        <br />
        <h1>Resume</h1>
        <h2>{title}</h2>
        <hr />
        <br />
      </div>
    </div>
  );
};

export default Heading;
