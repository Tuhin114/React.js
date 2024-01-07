import React from "react";
import "./PlayButton.css";

const PlayButton = ({ message, children }) => {
  function handleClick() {
    console.log({ message });
  }
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default PlayButton;
