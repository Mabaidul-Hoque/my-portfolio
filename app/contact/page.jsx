"use client";

import { socialLinks } from "@/static_data/links";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" min-h-[calc(100vh-6rem)] bg-gradient-to-r from-gray-200 to-blue-200">
        <div className="flex items-end justify-center gap-5 py-10 flex-wrap">
          {socialLinks.map((link, index) => (
            <li key={index} className="list-none">
              <Link href={link.url} target="_blank">
                <img
                  className={`${index === 0 && "pb-1"}`}
                  width={50}
                  height={30}
                  src={link.image}
                  alt={link.title}
                />
                <p className="py-1">{link.title}</p>
              </Link>
            </li>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl p-4 mx-auto">
            <div className="w-full md:w-1/2 ">
              {/* Animation section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-inherit px-10 py-20 md:p-20 rounded-lg shadow-lg h-full"
              >
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
                  className="hand-wave flex flex-col items-start justify-center"
                >
                  <Image
                    src="/hand-wave.jpg"
                    alt="Big Hand Logo"
                    className="hand-logo bg-transparent"
                    width={50}
                    height={50}
                  />
                  <h1 className="text-gray-500 text-center text-4xl font-mono w-fit">
                    Say Hello
                  </h1>
                </motion.div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 ">
              {/* Contact form section */}
              <form className="bg-inherit p-4 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl text-gray-500 text-center font-bold mb-4">
                  Mabaidul Hoque
                </h2>
                <input
                  type="email"
                  className="w-full p-2  border border-gray-500 rounded bg-inherit text-gray-500 outline-none mt-4"
                  placeholder="Email"
                />
                <textarea
                  className="w-full p-2 mb-4 border border-gray-500 rounded bg-inherit text-gray-500 outline-none mt-4"
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
      </div>
    </motion.div>
  );
};

export default ContactPage;
