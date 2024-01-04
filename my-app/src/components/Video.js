import "./Video.css";

function Video({ title, bgColor }) {
  let bg = "dark";

  return (
    <>
      <img src="https://dummyimage.com/600x300/000/fff" alt="React.js" />
      <div className={bg} style={{ backgroundColor: bgColor }}>
        {title}
      </div>
    </>
  );
}

export default Video;
