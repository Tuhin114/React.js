// import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
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
  // const [videos, setVideos] = useState(videoDB);

  function AddVideos(video) {
    dispatch({ type: "ADD", payload: video }); //action:{type:'ADD', payload:'video'}
    // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    dispatch({ type: "DELETE", payload: id });
    // setVideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    // const index = videos.findIndex((v) => v.id === video.id);
    // const updatedVideos = [...videos];
    // updatedVideos.splice(index, 1, video);
    dispatch({ type: "UPDATE", payload: video });
    // setVideos(updatedVideos);
  }

  return (
    <div className="App" onClick={() => {}}>
      <AddVideo
        addVideos={AddVideos}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      ></AddVideo>
      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
    </div>
  );
}

export default App;
