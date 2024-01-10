import { React } from "react";
import "./AddVideo.css";

const AddVideo = () => {
  function handleSubmit() {}
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
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
        //   {
        //     id: videos.length + 1,
        //     views: "472K",
        //     channel: "Code With Harry",
        //     title: "React JS tutorial",
        //     time: "10 months ago",
        //     verified: true,
        //   },
        // ]);
        // }}
      >
        Add Video
      </button>
    </form>
  );
};

export default AddVideo;
