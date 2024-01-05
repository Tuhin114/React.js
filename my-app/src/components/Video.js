import "./Video.css";

function Video({ title, channel = "Code With Harry", views, time }) {
  //channel = "Code With Harry" to make default value...if channel name is missing in App.js
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://dummyimage.com/600x300/000/fff" alt="React.js" />
        </div>

        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
