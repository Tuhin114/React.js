import React from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList = ({ videos, deleteVideo, editVideo }) => {
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
          deleteVideo={deleteVideo}
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
