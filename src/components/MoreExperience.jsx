import life from "../assets/symbols-final.jpg";
export default function MoreExperience() {
  return (
    <div
      className="snap-center w-[1000px] h-[600px] lg:h-[400px] lg:w-[800px] min-w-[75%] rounded-xl 
             bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 hover:from-purple-100
             hover:via-blue-400 hover:to-purple-600 duration-300 ease-linear 
             cursor-pointer text-xl font-bold animate-gradient-x bg-[length:200%_200%] p-1 "
      // style={{ backgroundImage: `url(${life})` }}
    >
      <div
        className="h-full w-full object-cover pl-5 pb-6 rounded-xl p-"
        style={{ backgroundImage: `url(${life})` }}
      >
        <div className="h-full  flex items-end">
          <h1 className="text-7xl ">
            More{" "}
            <span className="text-8xl lg:text-6xl font-semibold">
              Experience
            </span>
            <br /> into
            <span className="text-9xl lg:text-7xl font-semibold">
              Expertise
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
