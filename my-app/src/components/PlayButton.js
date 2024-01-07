import React from "react";
import "./PlayButton.css";

const PlayButton = ({ message, children, onClick }) => {
  function handleClick() {
    onClick();
  }
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default PlayButton;
