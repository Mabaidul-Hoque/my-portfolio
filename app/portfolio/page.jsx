"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/static_data/projectsData";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const PortFolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[400vh] relative" ref={ref}>
        <div className="h-[calc(100vh-6rem)] text-6xl flex items-center justify-center">
          My Works
        </div>
        <div className="h-screen sticky top-0 flex gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {projectsData.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color} p-6 sm:p-12 md:p-24 lg:p-48 pt-10 pb-10`}
                key={project.id}
              >
                <div className="flex flex-col justify-center items-center gap-2 text-black">
                  <h1 className="text-2xl text-center tracking-widest font-mono">
                    {project.title}
                  </h1>
                  <div className="w-9/10 sm:w-1/2 relative flex flex-col items-center md:items-center gap-2 ">
                    <Image
                      width={250}
                      height={50}
                      src={project.img}
                      alt="project-image"
                    />
                    <p className="text-center">{project.description}</p>
                  </div>
                  <Link href={project.link} className="mt-10">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-gradient-to-r from-purple-500 to-green-500">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1>Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[300px] md:h-[300px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0  "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                fronted developer fronted developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 mg:w-80 md:h-50 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortFolioPage;
