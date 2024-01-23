import React, { useState, useEffect, useRef } from "react";
import "./AddVideo.css";
import useVideoDispatch from "./hooks/VideoDispatch";

const initialVideoState = {
  channel: "Code With Harry",
  time: "10 months ago",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialVideoState);
  const dispatch = useVideoDispatch();
  const inputRef = useRef(null);

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
    // inputRef.current.placeholder = "";
    inputRef.current.focus();
    // "type here".split("").forEach((char, i) => {
    //   setTimeout(() => {
    //     inputRef.current.placeholder = inputRef.current.placeholder + char;
    //   }, 200 * i);
    // });
    //Basically it is showing a text animation but due to some error it is not showing anything...
  }, [editableVideo]);

  return (
    <form>
      <input
        ref={inputRef}
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
