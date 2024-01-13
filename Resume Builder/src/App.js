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
        {data.interests.length > 0 && <Interests {...data}></Interests>}
        {data.skills.length > 0 && <Skills {...data}></Skills>}
        {data.education.length > 0 && <Education {...data}></Education>}
        {data.experience.length > 0 && <Experience {...data}></Experience>}
        {data.extracurriculars.length > 0 && (
          <Extracurriculars {...data}></Extracurriculars>
        )}
      </div>
      <div className="right"></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
