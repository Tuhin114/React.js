import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>Hello</div>
      <Video
        views="472K"
        channel="Code With Harry"
        title="React JS tutorial"
        time="10 months ago"
      ></Video>
      <Video
        views="400K"
        channel="Chai aur Code"
        title="Node JS tutorial"
        time="1 year ago"
      ></Video>
    </div>
  );
}

export default App;
