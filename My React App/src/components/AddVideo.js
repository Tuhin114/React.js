import React, { useState, useEffect, useContext } from "react";
import "./AddVideo.css";
import VideoDispatchContext from "./context/VideoDispatchContext";

const initialVideoState = {
  channel: "Code With Harry",
  time: "10 months ago",
  verified: true,
  title: " ",
  views: " ",
};

const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialVideoState);
  const dispatch = useContext(VideoDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialVideoState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"} Video
      </button>
    </form>
  );
};

export default AddVideo;
