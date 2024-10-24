// import React from "react";
import SecondNavigator from "./SecondNavigator";
import PrimaryNavigator from "./PrimaryNavigator";
import { useRef } from "react";

// datas
import { accounts, skills } from "../preDatasets/data";

// image
import life from "../assets/symbols-final.jpg";
import myimage from "../assets/symbol_logo.svg";
import DevProcess from "./DevProcess";

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
    <div className="scroll-smooth">
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
              className="snap-center w-[1000px] h-[600px] min-w-[75%] rounded-xl 
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
                    <span className="text-8xl font-semibold">Experience</span>
                    <br /> into
                    <span className="text-9xl font-semibold">Expertise</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="pl-5 pb-6 snap-center w-[1000px] h-[600px] bg-white min-w-[75%] rounded-xl">
              <div className="h-full  flex items-end">
                <h1 className="text-7xl ">
                  Work
                  <span className="before:block before:absolute before:-inset-1 before:bg-green-500 relative inline-block">
                    <span className="relative text-white text-9xl font-semibold">
                      {"  "}
                      Smater
                    </span>
                  </span>
                  <br /> not
                  <span className="before:block before:absolute before:-inset-1 before:bg-red-400 relative inline-block">
                    <span className="relative text-white text-8xl font-semibold">
                      {"  "}
                      Harder
                    </span>
                  </span>
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
          <div className="flex flex-col justify-center items-center w-2/5 ">
            <img
              src={myimage}
              alt="my pic"
              className="w-1/4 bg-pal_emerald_green rounded-full object-cover m-5"
            />
            <div className=" px-10 text-center ">
              <h1 className="text-4xl capitalize ">
                hi, Im{" "}
                <span
                  className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r 
                  before:from-pink-500 before:via-pal_baby_blue before:to-violet-500 before:rounded-xl 
                  before:px-5 relative inline-block before:animate-gradient-x before:bg-[length:200%_200%]"
                >
                  <span className="relative text-white">Jamil Harun</span>
                </span>
              </h1>
              <p className="text-xl">
                i used to be a digital artist now after i graduated computer
                science, now im a{" "}
                <span className="text-2xl font-medium">
                  full stack visionary
                </span>
                , when learning programming discovered a particulr interest in
                solving hard problems and also{" "}
                <span className="text-2xl font-medium">real life problems</span>
                . giving me the interest on how can i help and benefit other
                people. i believe that the process of developing a system can
                application to real life. not just in the computer.
                <br />i amalso interested in new texhnologies in programming
                wondering what system or app can i make with this
              </p>
              <div className="flex mt-20 gap-3">
                {accounts.map((acc, index) => {
                  return (
                    <a key={index} href={acc.link}>
                      <img src={acc.img} alt={acc.name} className="size-10" />
                    </a>
                  );
                })}
                <div
                  onClick={() => {
                    // download resume
                  }}
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:from-violet-500 
                  hover:to-fuchsia-500 hover:animate-gradient-x hover:bg-[length:200%_200%] transition rounded-xl ease-linear duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-800 to-pink-300 bg-clip-text text-transparent ">
                    <h1 className="text-2xl font-medium px-5 ">
                      Download Resume
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex justify-center items-center">
            <img src={life} alt="" />
          </div>
        </div>

        {/* projects*/}
        <div className="w-11/12 m-auto">
          <div
            className="text-5xl font-semibold my-5 bg-gradient-to-r bg-clip-text text-transparent 
          mix-blend-normal from-pal_emerald_green via-pal_baby_blue to-pal_neon_purple 
          duration-300 ease-linear cursor-pointer animate-gradient-x bg-[length:200%_200%]"
          >
            <h1>Projects</h1>
          </div>
          <div className="grid grid-cols-5 gap-5">
            <div className="break-inside-avoid row-span-2 bg-gray-400 rounded-xl overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Campus+bytes"
                alt="Project"
                className=" w-full rounded-t-xl"
              />
              <div className="p-3 relative">
                <h1 className="text-2xl font-medium">CampusBytes Mobile</h1>
                {/* <p>
                  1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, officia quidem reiciendis tempora quia recusandae
                  libero harum consectetur ratione ipsam? Et ipsa porro voluptas
                  explicabo quasi, totam minus est facilis?
                </p> */}
              </div>
            </div>
            <div className="break-inside-avoid col-span-3 bg-pink-400 flex rounded-xl">
              <img
                src="https://ui-avatars.com/api/?name=Mini+Data+Center"
                alt="Project"
                className="h-full rounded-l-xl"
              />
              <div className="p-3 relative">
                <h1 className="text-2xl font-medium">Mini Data Center</h1>
                <p>
                  1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, officia quidem reiciendis tempora quia recusandae
                  libero harum consectetur ratione ipsam? Et ipsa porro voluptas
                  explicabo quasi, totam minus est facilis?
                </p>
              </div>
            </div>
            <div className="break-inside-avoid row-span-2 col-span-2 bg-pal_vibrant_yellow flex rounded-xl ">
              <img
                src="https://ui-avatars.com/api/?name=Data+Management"
                alt="Project"
                className="  rounded-l-xl"
              />
              <div className="p-3 relative">
                <h1 className="text-2xl font-medium">
                  Data Management Website
                </h1>
                <p>
                  1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, officia quidem reiciendis tempora quia recusandae
                  libero harum consectetur ratione ipsam? Et ipsa porro voluptas
                  explicabo quasi, totam minus est facilis?
                </p>
              </div>
            </div>
            <div className="break-inside-avoid bg-blue-700 row-span-2 rounded-xl">
              <img
                src="https://ui-avatars.com/api/?name=Data+Management"
                alt="Project"
                className="w-full rounded-t-xl"
              />
              <div className="p-3 relative">
                <h1 className="text-2xl font-medium">Lorem, ipsum dolor.</h1>
                {/* <p>
                  1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, officia quidem reiciendis tempora quia recusandae
                  libero harum consectetur ratione ipsam? Et ipsa porro voluptas
                  explicabo quasi, totam minus est facilis?
                </p> */}
              </div>
            </div>
            <div className="break-inside-avoid bg-red-600 row-span-2 rounded-xl">
              <img
                src="https://ui-avatars.com/api/?name=Data+Management"
                alt="Project"
                className="w-full rounded-t-xl"
              />
              <div className="p-3 relative">
                <h1 className="text-2xl font-medium">Lorem, ipsum dolor.</h1>
                {/* <p>
                  1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, officia quidem reiciendis tempora quia recusandae
                  libero harum consectetur ratione ipsam? Et ipsa porro voluptas
                  explicabo quasi, totam minus est facilis?
                </p> */}
              </div>
            </div>
            <div className="break-inside-avoid bg-pal_soft_pastel_pink col-span-2 flex rounded-xl">
              <img
                src="https://ui-avatars.com/api/?name=Mini+Data+Center"
                alt="Project"
                className="h-full rounded-l-xl"
              />
              <div className="p-3 relative">
                <h1 className="text-2xl font-medium">Mini Data Center</h1>
                <p>
                  1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, officia quidem reiciendis tempora quia recusandae
                  libero harum consectetur ratione ipsam? Et ipsa porro voluptas
                  explicabo quasi, totam minus est facilis?
                </p>
              </div>
            </div>
            <div className="break-inside-avoid  bg-white row-span-2 rounded-xl">
              <div className="break-inside-avoid row-span-2 bg-gray-400 rounded-xl overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Campus+bytes"
                  alt="Project"
                  className=" w-full rounded-t-xl"
                />
                <div className="p-3 relative">
                  <h1 className="text-2xl font-medium">CampusBytes Mobile</h1>
                  {/* <p>
                  1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, officia quidem reiciendis tempora quia recusandae
                  libero harum consectetur ratione ipsam? Et ipsa porro voluptas
                  explicabo quasi, totam minus est facilis?
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <DevProcess />

        {/* skills best to least */}
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
      </div>
    </div>
  );
}
