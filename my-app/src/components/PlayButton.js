import React from "react";
import "./PlayButton.css";

const PlayButton = ({ message, children, onPlay, onPause }) => {
  let playing = false; //Not recommended approach
  function handleClick() {
    if (playing) {
      onPause();
    } else {
      onPlay();
      playing = !playing;
    }
  }
  return (
    <div>
      <button onClick={handleClick}>
        {children} : {playing ? ">" : "||"}
      </button>
    </div>
  );
};

export default PlayButton;
