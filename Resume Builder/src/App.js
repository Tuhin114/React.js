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
    interests: "Drawing",
    skills: "Web Design with HTML & CSS",
    education: "Wilton High School",
    experience: "Student Technology Intern for Wilton School District",
    extracurriculars: "Recycling Club",
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
