import Video from "./components/Video";
import "./App.css";

function App() {
  let obj = {
    views: "472K",
    channel: "Code With Harry",
    title: "React JS tutorial",
    time: "10 months ago",
  };
  return (
    <div className="App">
      <div className="title">Video</div>
      <Video {...obj}></Video>
      <Video
        views="400K"
        channel="Chai aur Code"
        title="Node JS tutorial"
        time="1 year ago"
      ></Video>
      <Video views="100K" title="Next JS tutorial" time="2 year ago"></Video>
    </div>
  );
}

export default App;
