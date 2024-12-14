import PrimaryNavigator from "./PrimaryNavigator";

import { Navigate, Route, Routes } from "react-router-dom";
import MainContent from "../app/MainContent";
import AboutMe from "../app/AboutMe";
import Contact from "../app/Contact";
import ProjectList from "../app/ProjectList";

export default function Home() {
  return (
    // this will serve as the landing page for the app
    <div className="scroll-smooth">
      {/* https://github.com/jamilharun/Portfolio_v3.git
        secondary navigator
        */}
      {/* <SecondNavigator /> */}

      <div
        className="w-full flex flex-col bg-gradient-to-r from-gray-700 
      via-gray-500 to-gray-300 bg-[length:200%_200%] 
      animate-gradient-x-slow divide-y-2 divide-gray-700 "
      >
        <PrimaryNavigator />

        <Routes>
          <Route path="/" element={<Navigate to="/home/mainContent" />} />
          <Route path="/mainContent" element={<MainContent />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projectList" element={<ProjectList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
