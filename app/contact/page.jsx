"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center h-[calc(100vh-6rem)] bg-gradient-to-r from-green-400 to-blue-500">
        <div className="flex gap-4 w-full max-w-5xl p-4 mx-auto">
          <div className="w-1/2 ">
            {/* Animation section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-inherit p-20 rounded-lg shadow-lg h-full"
            >
              {/* Insert your interesting animation here */}

              {/* <h1 className="text-white text-center text-4xl font-mono w-80">
                Say Hello
              </h1> */}
              {/* Hand wave animation with big hand logo */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                className="hand-wave"
              >
                <Image
                  src="/hand-wave.jpg"
                  alt="Big Hand Logo"
                  className="hand-logo"
                  width={50}
                  height={50}
                />
                <h1 className="text-white text-center text-4xl font-mono w-80">
                  Say Hello
                </h1>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-1/2 ">
            {/* Contact form section */}
            <form className="bg-inherit p-4 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl text-white text-center font-bold mb-4">
                Mabaidul Hoque
              </h2>
              <input
                type="email"
                className="w-full p-2  border border-gray-500 rounded bg-inherit text-white outline-none mt-4"
                placeholder="Email"
              />
              <textarea
                className="w-full p-2 mb-4 border border-gray-500 rounded bg-inherit text-white outline-none mt-4"
                placeholder="Regards"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
