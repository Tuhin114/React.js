import React from "react";
import "./PlayButton.css";

const PlayButton = () => {
  function handleClick() {
    console.log("play");
  }
  return (
    <div>
      <button onClick={handleClick}>Play</button>
    </div>
  );
};

export default PlayButton;
