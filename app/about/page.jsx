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
      <div className="w-screen">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-16 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-5 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-xl font-bold">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, sit eligendi in neque dignissimos nam quos accusantium
              reiciendis autem fugiat saepe ratione ab alias exercitationem.
              Possimus, veniam aliquam in eos unde nisi, doloribus alias
              dignissimos, dicta delectus exercitationem. Itaque dolorem ratione
              facilis eum ipsa eveniet praesentium corporis vitae ipsum nobis.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>

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
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIANCE TITLE */}
            <div className="text-2xl font-bold">EXPERIANCE</div>
            {/* EXPERIANCE list */}
            <div className="">
              <div className="">
                {/* JOB TITLE */}
                <div className="">Teacher</div>
                {/* JOB SUB-TITLE */}
                <div className="">
                  Private school teacher and Tutor Part Time Apr 20 - Jan 24
                </div>
                {/* JOB DESCRIPTION */}
                <p className=""></p>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
