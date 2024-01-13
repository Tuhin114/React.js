import React from "react";
import "../../App.css";

const Interests = ({ interests }) => {
  return (
    <>
      <div className="stuff">
        <p className="head">Interests</p>
        <ul>
          <li>{interests}</li>
        </ul>
      </div>
    </>
  );
};

export default Interests;
