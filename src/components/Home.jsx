import PrimaryNavigator from "./PrimaryNavigator";

import DevProcess from "./DevProcess";
import ProjectShowcase from "./ProjectShowcase";
import QuickIntro from "./QuickIntro";
import ProjectDisplay from "./ProjectDisplay";
import ProgLang from "./ProgLang";

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

        {/* project Showcase */}
        <ProjectShowcase />

        {/* quickintro */}
        <QuickIntro />

        {/* projects*/}
        <ProjectDisplay />

        {/* Development Process */}
        <DevProcess />

        {/* Programming languages skills best to least */}
        <ProgLang />
      </div>
    </div>
  );
}
