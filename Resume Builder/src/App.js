import React from "react";
import "./App.css";
import Interests from "./Components/Interests/Interests";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Extracurriculars from "./Components/Extracurriculars/Extracurriculars";
import Heading from "./Components/Heading/Heading";
import Footer from "./Components/Footer";

const App = () => {
  let data = {
    title: "Tuhin Poddar",
    interests: [
      "Competitive Programming",
      "AI/ML",
      "3D Modeling",
      "Datascience",
      "Web Development",
    ],
    skills: ["Frontend", "Backend", "DataBases"],
    education: ["MAKAUT", "Sodepur High School"],
    experience: ["Hacktoberfest"],
    extracurriculars: ["YouTube", "Gamming", "Reading"],
  };
  return (
    <div>
      <div id="header"></div>
      <div className="left"></div>
      <div>
        <Heading {...data}></Heading>
        <Interests {...data}></Interests>
        <Skills {...data}></Skills>
        <Education {...data}></Education>
        <Experience {...data}></Experience>
        <Extracurriculars {...data}></Extracurriculars>
      </div>
      <div className="right"></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
