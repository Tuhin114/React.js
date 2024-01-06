import Video from "./components/Video";
import "./App.css";

function App() {
  let videos = [
    {
      id: 1,
      views: "472K",
      channel: "Code With Harry",
      title: "React JS tutorial",
      time: "10 months ago",
      verified: true,
    },
    {
      id: 2,
      views: "789K",
      channel: "Web Dev Simplified",
      title: "JavaScript Basics",
      time: "1 year ago",
      verified: true,
    },
    {
      id: 3,
      views: "1.5M",
      channel: "Traversy Media",
      title: "CSS Grid Layout",
      time: "2 years ago",
      verified: false,
    },
    {
      id: 4,
      views: "250K",
      channel: "The Net Ninja",
      title: "Node.js Crash Course",
      time: "9 months ago",
      verified: false,
    },
    {
      id: 5,
      views: "600K",
      channel: "Academind",
      title: "Angular Fundamentals",
      time: "1.5 years ago",
      verified: true,
    },
    {
      id: 6,
      views: "1.2M",
      channel: "Programming with Mosh",
      title: "Python for Beginners",
      time: "3 years ago",
      verified: false,
    },
    {
      id: 7,
      views: "850K",
      channel: "freeCodeCamp.org",
      title: "Full Stack Web Development",
      time: "1.2 years ago",
      verified: true,
    },
    {
      id: 8,
      views: "370K",
      channel: "Corey Schafer",
      title: "Python OOP Tutorial",
      time: "2.5 years ago",
      verified: false,
    },
    {
      id: 9,
      views: "920K",
      channel: "The Coding Train",
      title: "Creative Coding with p5.js",
      time: "2 years ago",
      verified: true,
    },
  ];

  return (
    <div className="App">
      <div className="title">Video</div>
      {videos.map((video) => (
        <Video
          verified={video.verified}
          views={video.views}
          title={video.title}
          time={video.time}
          id={video.id}
        ></Video>
      ))}
    </div>
  );
}

export default App;
