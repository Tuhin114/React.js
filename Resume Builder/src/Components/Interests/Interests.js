import React from "react";
import "../../App.css";

const Interests = ({ interests }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Interests</p>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Interests;
