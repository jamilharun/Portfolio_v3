export default function NothingBenefit() {
  return (
    <div
      className="pl-5 pb-6 snap-center w-[1000px] lg:w-[800px]  h-[600px] lg:h-[400px] bg-white min-w-[75%] 
            rounded-xl"
    >
      <div className="h-full  flex items-end">
        <h1 className="text-6xl lg:text-4xl ">
          nothing can
          <span className="before:block before:absolute before:-inset-1 before:bg-pink-700 relative inline-block">
            <span className="relative text-white text-7xl lg:text-5xl font-semibold">
              Benefit
            </span>
          </span>
          you <br /> except the
          <span className="before:block before:absolute before:-inset-1 before:bg-pink-700 relative inline-block">
            <span className="relative text-white text-8xl lg:text-6xl font-semibold">
              Truth
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
