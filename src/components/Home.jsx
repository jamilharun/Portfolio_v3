// import React from "react";
import SecondNavigator from "./SecondNavigator";
import PrimaryNavigator from "./PrimaryNavigator";
import { useRef } from "react";

// datas
import { accounts, skills } from "../preDatasets/data";

// image
import life from "../assets/symbols-final.jpg";
import myimage from "../assets/symbol_logo.svg";

export default function Home() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -1000,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });
      }
    }
  };
  return (
    // this will serve as the landing page for the app
    <div className="">
      {/* 
        secondary navigator
        */}
      {/* <SecondNavigator /> */}

      <div className="w-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 bg-[length:200%_200%] animate-gradient-x-slow">
        <PrimaryNavigator />

        {/* project Showcase */}
        <div className="relative  flex justify-center items-center gap-4">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Left
          </button>

          {/* Scrollable Projects */}
          <div
            className="flex gap-4 overflow-x-hidden snap-x w-11/12 rounded-3xl"
            ref={scrollContainerRef}
          >
            <div
              className="pl-5 pb-6 snap-center w-[1000px] h-[600px] bg-white min-w-[75%] rounded-xl object-cover"
              style={{ backgroundImage: `url(${life})` }}
            >
              <div className="h-full  flex items-end">
                <h1 className="text-7xl ">
                  More{" "}
                  <span className="text-8xl font-semibold">Experience</span>
                  <br /> into
                  <span className="text-9xl font-semibold">Expertise</span>
                </h1>
              </div>
            </div>
            <div className="pl-5 pb-6 snap-center w-[1000px] h-[600px] bg-white min-w-[75%] rounded-xl">
              <div className="h-full  flex items-end">
                <h1 className="text-7xl ">
                  More <span className="text-8xl">Experience</span>
                  <br /> into <span className="text-9xl">Expertise</span>
                </h1>
              </div>
            </div>
            <div className="pl-5 pb-6 snap-center w-[1000px] h-[600px] bg-white min-w-[75%] rounded-xl">
              <div className="h-full  flex items-end">
                <h1 className="text-7xl ">
                  More <span className="text-8xl">Experience</span>
                  <br /> into <span className="text-9xl">Expertise</span>
                </h1>
              </div>
            </div>
            <div className="pl-5 pb-6 snap-center w-[1000px] h-[600px] bg-white min-w-[75%] rounded-xl">
              <div className="h-full  flex items-end">
                <h1 className="text-6xl ">
                  nothing can
                  <span className="before:block before:absolute before:-inset-1 before:bg-pink-700 relative inline-block">
                    <span className="relative text-white text-7xl font-semibold">
                      {"  "}
                      Benefit
                    </span>
                  </span>
                  you <br /> except the
                  <span className="before:block before:absolute before:-inset-1 before:bg-pink-700 relative inline-block">
                    <span className="relative text-white text-8xl font-semibold">
                      {" "}
                      Truth
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Right
          </button>
        </div>

        <div className="flex justify-center mt-10 h-screen">
          <div className="flex flex-col justify-center items-center w-1/2 ">
            <img
              src={myimage}
              alt="my pic"
              className="w-2/12 bg-pal_emerald_green rounded-full object-cover"
            />
            <div className=" px-10 text-center">
              <h1 className="text-4xl">hi, Im Jamil Harun</h1>
              <p className="text-xl">
                i used to be a digital artist now after i graduated computer
                science, now im a full stack visionary, when learning
                programming discovered a particulr interest in solving hard
                problems and also real life problems. giving me the interest on
                how can i help and benefit other people. i believe that the
                process of developing a system can application to real life. not
                just in the computer.
                <br />i amalso interested in new texhnologies in programming
                wondering what system or app can i make with this
              </p>
              <div className="flex">
                {accounts.map((acc, index) => {
                  return (
                    <a key={index} href={acc.link}>
                      <img src={acc.img} alt={acc.name} className="size-10" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* projects*/}
        <div className="w-11/12 m-auto">
          <div>
            <h1>Projects</h1>
          </div>
          <div className="grid grid-cols-5">
            <div className=" row-span-2 bg-green-700 ">1</div>
            <div className=" col-span-2 bg-pink-400">2</div>
            <div className=" row-span-2 col-span-2 bg-pal_vibrant_yellow">
              3
            </div>
            <div className=" bg-blue-700">5</div>
            <div className=" bg-red-600">6</div>
            <div className=" bg-pal_soft_pastel_pink">9</div>
          </div>
        </div>

        {/* skills best to least */}
        <div className="flex justify-center">
          <div className="w-11/12">
            <div>
              <div>
                <h1>My Skills</h1>
                <p>Best to least</p>
              </div>
              <div>
                <button>View All</button>
              </div>
            </div>
            <div className="grid grid-rows-10 grid-cols-10 gap-5">
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
      </div>
    </div>
  );
}
