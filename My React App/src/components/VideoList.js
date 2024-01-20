import React, { useContext } from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";
import VideosContext from "./context/VideosContext";

const VideoList = ({ editVideo }) => {
  const videos = useContext(VideosContext);
  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verified}
          views={video.views}
          title={video.title}
          time={video.time}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            message="Play"
            onPlay={() => {
              console.log("Playing...", video.title);
            }}
            onPause={() => {
              console.log("Paused...", video.title);
            }}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
};

export default VideoList;
