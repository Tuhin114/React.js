import React, { useCallback, useMemo } from "react";
import PlayButton from "./PlayButton";
import Video from "./Video";
import useVideo from "./hooks/Video";

const VideoList = ({ editVideo }) => {
  const videos = useVideo();
  const play = useCallback(() => console.log("Playing..."), []);
  const pause = useCallback(() => console.log("Paused..."), []);
  const memoButton = useMemo(
    () => (
      <PlayButton message="Play" onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [pause, play]
  );
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
          {memoButton}
        </Video>
      ))}
    </div>
  );
};

export default VideoList;
