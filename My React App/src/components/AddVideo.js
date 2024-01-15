import React, { useState, useEffect } from "react";
import "./AddVideo.css";

const initialVideoState = {
  channel: "Code With Harry",
  time: "10 months ago",
  verified: true,
  title: " ",
  views: " ",
};

const AddVideo = ({ addVideos, updateVideo, editableVideo }) => {
  const [video, setVideo] = useState(initialVideoState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
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
