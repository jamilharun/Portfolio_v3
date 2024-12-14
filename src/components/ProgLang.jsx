import { skills } from "../preDatasets/data";

export default function ProgLang() {
  return (
    <div className="flex justify-center">
      <div className="w-11/12">
        <div className="flex justify-between items-end">
          <div className="w-full text-5xl font-semibold my-5 flex justify-between">
            <h1>My Skills</h1>
            <p>Best to least</p>
          </div>
          <div className="w-40">
            <button>View All</button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-5">
          {skills.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <img src={data.img} alt={data.name} className="size-20 " />
                <h1 className="text-2xl">{data.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
