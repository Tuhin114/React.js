import { useContext, useEffect, memo } from "react";
import "./Video.css";
import ThemeContext from "./context/ThemeContext";
import useVideoDispatch from "./hooks/VideoDispatch";

const Video = memo(function Video({
  title,
  id,
  channel = "Code With Harry",
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();

  useEffect(() => {
    const idx = setInterval(() => {
      //SetInterval returns an id
      // console.log("Video Playing", id);
      // console.log(idx);
    }, 3000);
    return () => {
      clearInterval(idx);
    };
  }, [id]);

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/250/150`} alt="React.js" />
        </div>

        <div className="title">{title}</div>

        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>
        <div className="views">
          {views} views <span>•</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
});

export default Video;
