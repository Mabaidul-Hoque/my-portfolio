"use client";

import { motion } from "framer-motion";

const PortFolioPage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      PortFolioPage
    </motion.div>
  );
};

export default PortFolioPage;
