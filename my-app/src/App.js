import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App">
      <div className="title">Video</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verified}
          views={video.views}
          title={video.title}
          time={video.time}
          id={video.id}
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
      <div style={{ clear: "both", display: "flex" }}>
        {/* <PlayButton
          message="Play"
          onPlay={() => {
            console.log("Play");
          }}
          onPause={() => {
            console.log("Pause");
          }}
        >
          Play
        </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
