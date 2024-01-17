import React, { useContext } from "react";
import "./PlayButton.css";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";

const PlayButton = ({ children, onPlay, onPause }) => {
  // let playing = false; //Not recommended approach
  const theme = useContext(ThemeContext);
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // console.log(e);
    e.stopPropagation();
    // e.preventDefault();
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  }

  return (
    <div>
      <button className={theme} onClick={handleClick}>
        {children} : {playing ? "⏸️" : "▶️"}
      </button>
    </div>
  );
};

export default PlayButton;
