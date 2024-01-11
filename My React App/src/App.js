// import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function AddVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <div className="App" onClick={() => {}}>
      <AddVideo addVideos={AddVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
