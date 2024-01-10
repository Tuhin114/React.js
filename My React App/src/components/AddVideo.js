import { React, useState } from "react";
import "./AddVideo.css";

const AddVideo = () => {
  const [video, setVideo] = useState({
    channel: "Code With Harry",
    title: "React JS tutorial",
    time: "10 months ago",
    verified: true,
  });
  function handleSubmit() {}
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(video);
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        // setVideos([
        //   ...videos,

        // ]);
        // }}
      >
        Add Video
      </button>
    </form>
  );
};

export default AddVideo;