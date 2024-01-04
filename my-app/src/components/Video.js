import "./Video.css";

function Video() {
  let bg = "dark";
  let name = "Katherine Johnson";
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
      <div className={bg}>{name}</div>
    </>
  );
}

export default Video;
