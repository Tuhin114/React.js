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
  return (
    <div>
      <div id="header"></div>
      <div className="left"></div>
      <div>
        <Heading></Heading>
        <Interests></Interests>
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <Extracurriculars></Extracurriculars>
      </div>
      <div className="right"></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
