import { React, useState } from "react";
import "./AddVideo.css";

const initialVideos = {
  channel: "Code With Harry",
  time: "10 months ago",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = ({ addVideos }) => {
  const [video, setVideo] = useState({ initialVideos });
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialVideos);
  }
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
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
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
};

export default AddVideo;
