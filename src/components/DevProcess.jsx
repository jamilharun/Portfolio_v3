import { genProcess } from "../preDatasets/devTimeline";

export default function DevProcess() {
  return (
    <div className="w-11/12 m-auto py-10">
      <div
        className="text-5xl lg:text-3xl font-semibold my-5 bg-gradient-to-r bg-clip-text text-transparent 
          mix-blend-normal from-pal_emerald_green via-pal_baby_blue to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer animate-gradient-x bg-[length:200%_200%]"
      >
        <h1>Development Process</h1>
      </div>

      {/* checkpoint */}
      {genProcess.map((step, index) => {
        return (
          <div
            key={index}
            className="max-w-[34em] m-auto py-10 relative 
            odd:border-l-[3px] odd:pl-[3em] odd:translate-x-[270.5px]
            even:border-r-[3px] even:pr-[3em] even:-translate-x-[270.5px]
            before:content-[''] before:bg-white before:w-[3em] before:h-[3px] before:absolute 
            before:top-1/2 before:-translate-y-1/2 odd:before:left-0 even:before:right-0 group"
          >
            <div
              className="border-2 rounded-xl p-5 before:content-[''] before:bg-white before:shadow 
            before:w-[0.8em] before:h-[0.8em] before:absolute before:top-1/2 before:translate-x-1/2 before:rounded-full
            group-[:nth-of-type(odd)_&]:before:-left-[14px] group-[:nth-of-type(even)_&]:before:-right-[14px]"
            >
              <h2 className="text-white text-5xl">
                Step {index + 1}: {step.title}
              </h2>
              <p className="leading-7 text-white">{step.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
