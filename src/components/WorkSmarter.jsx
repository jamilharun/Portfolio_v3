export default function WorkSmarter() {
  return (
    <div
      className="pl-5 pb-6 snap-center w-[1000px] h-[600px] lg:h-[400px] lg:w-[800px] 
      bg-white min-w-[75%] 
            rounded-xl"
    >
      <div className="h-full  flex items-end">
        <h1 className="text-7xl ">
          Work
          <span className="before:block before:absolute before:-inset-1 before:bg-green-500 relative inline-block">
            <span className="relative text-white text-9xl lg:text-7xl font-semibold">
              Smater
            </span>
          </span>
          <br /> not
          <span className="before:block before:absolute before:-inset-1 before:bg-red-400 relative inline-block">
            <span className="relative text-white text-8xl lg:text-6xl font-semibold">
              Harder
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
