import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";

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
        ></Video>
      ))}
    </div>
  );
}

export default App;
