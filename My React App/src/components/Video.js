import "./Video.css";

function Video({
  title,
  id,
  channel = "Code With Harry",
  views,
  time,
  verified,
  children,
  deleteVideo,
  editVideo,
}) {
  //channel = "Code With Harry" to make default value...if channel name is missing in App.js

  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
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
}

export default Video;
