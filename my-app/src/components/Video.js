import "./Video.css";

function Video({ title, channel = "Code With Harry", views, time, verified }) {
  //channel = "Code With Harry" to make default value...if channel name is missing in App.js

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://picsum.photos/id/2/160/90" alt="React.js" />
        </div>

        <div className="title">{title}</div>

        <div className="channel">
          {channel} {verified ? "✅" : null}{" "}
        </div>
        <div className="views">
          {views} views <span>•</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
