"use client";

import { DownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { skillTitles } from "@/static_data/titles";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="w-full">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:px-48 flex flex-col gap-16 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-5 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-xl font-bold">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p>
              I am Mabaidul Hoque. Currently, I am pursuing a Full Stack
              Developer program at Newton School, where I am honing my skills in
              both frontend and backend development. I have successfully
              completed the frontend part of the program and am currently
              engaged in the backend portion. My goal is to become a proficient
              developer who can contribute significantly to the success of any
              company I work for. I am passionate about coding and enjoy the
              challenges and creativity that come with software development.
              Through my dedication and hard work, I aim to add value to the
              projects I work on and make meaningful contributions to the teams
              I am a part of. With a strong foundation in frontend development
              and an ongoing commitment to learning backend technologies, I am
              excited about the opportunities that lie ahead in my journey as a
              developer. I am eager to apply my skills and knowledge to
              real-world projects, solve complex problems, and continue growing
              both personally and professionally in the field of software
              development.
            </p>
            {/* BIOGRAPHY SIGN  */}
            <div className="flex justify-end">
              <img
                width={120}
                height={24}
                src="/my_digi_sign.svg"
                alt="sign_icon"
              />
            </div>
            {/*  BIOGRAPHY SCROLL */}
            <div>
              <DownOutlined />
            </div>
          </div>
          {/* SKILLS CONATINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <div className="text-2xl font-bold ">SKILLS</div>
            {/* SKILL LIST */}
            <div className="flex flex-wrap gap-4">
              {skillTitles.map((title) => (
                <div
                  key={title}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
          {/* EXPERIANCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* EXPERIANCE TITLE */}
            <div className="text-2xl font-bold">EXPERIANCE</div>
            {/* EXPERIANCE list */}
            <div>
              <div>
                {/* JOB TITLE */}
                <div>Teacher</div>
                {/* JOB SUB-TITLE */}
                <div>
                  Private school teacher and Tutor Part Time Apr 20 - Jan 24
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
