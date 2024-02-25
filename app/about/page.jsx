"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className=''>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 x l:gap-64'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* BIOGRAPHY TITLE */}
            <h1>BIOGRAPHY</h1>
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
          </div>
          {/* SKILLS CONATINER */}
          <div className=''>SKILLS</div>
          {/* EXPERIANCE CONTAINER */}
          <div className=''>EXPERIANCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className=''></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
