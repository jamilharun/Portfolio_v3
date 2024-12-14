import { projectList } from "../preDatasets/Projects";
import ProjectDisplayContainter from "./ProjectDisplayContainter";

export default function ProjectDisplay() {
  return (
    <div className="w-11/12 m-auto py-10">
      <div
        className="text-5xl lg:text-3xl font-semibold my-5 bg-gradient-to-r bg-clip-text text-transparent 
          mix-blend-normal from-pal_emerald_green via-pal_baby_blue to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer animate-gradient-x bg-[length:200%_200%]"
      >
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {projectList.map((data, index) => {
          return (
            <ProjectDisplayContainter
              key={index}
              image={data.image}
              alt={data.alt}
              title={data.title}
              desc={data.desc}
              cont={data.cont}
              imgsize={data.imgsize}
              link={data.link}
            />
          );
        })}
      </div>
    </div>
  );
}
