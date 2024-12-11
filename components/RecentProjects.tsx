"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-1">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title="Resources" href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-[#95a0e116] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center relative"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <div className="absolute inset-0 border-2 border-white rounded-full"></div> {/* Adding the background border */}
                        <img src={icon} alt="icon5" className="p-2 relative z-10" />
                      </div>
                    ))}
                  </div>

                  {/* Conditionally render the Visit Website button */}
                  {item.newLink && (
                    <a
                      href={item.newLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white bg-gradient-to-r from-[rgb(0,17,82)] via-[rgba(0,17,82,0.6)] to-[rgba(0,17,82,0.3)] px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[rgb(0,17,82)] hover:via-[rgba(0,17,82,0.8)] hover:to-[rgba(0,17,82,0.5)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
