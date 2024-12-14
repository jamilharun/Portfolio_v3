import ProjectShowcase from "../components/ProjectShowcase";
import QuickIntro from "../components/QuickIntro";
import ProjectDisplay from "../components/ProjectDisplay";
import DevProcess from "../components/DevProcess";
import ProgLang from "../components/ProgLang";

export default function MainContent() {
  return (
    <>
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
    </>
  );
}
