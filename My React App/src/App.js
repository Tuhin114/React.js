import "./App.css";
import videoDB from "./data/data";
import { useCallback, useReducer, useState } from "react";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/ThemeContext";
import VideosContext from "./components/context/VideosContext";
import VideoDispatchContext from "./components/context/VideoDispatchContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const updatedVideos = [...videos];
        updatedVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return updatedVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  const editVideo = useCallback(
    function editVideo(id) {
      setEditableVideo(videos.find((video) => video.id === id));
    },
    [videos]
  );

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`} onClick={() => {}}>
            <Counter></Counter>
            <button
              onClick={() => {
                setMode(mode === "darkMode" ? "lightMode" : "darkMode");
              }}
            >
              Mode
            </button>
            <AddVideo editableVideo={editableVideo}></AddVideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
