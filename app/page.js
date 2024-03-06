"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* IMAAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="hero_image"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 items-start justify-center">
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Crafting Digital Experiance, Designing Tomorrow.
          </h1>
          {/* DESCRIPTION */}
          <p className="text-sm">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projectsthat reflect my
            commitmentto execellence.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/portfolio")}
              className="p-2 rounded-lg ring-1 ring-black bg-black text-white text-base"
            >
              View My Work
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="p-2 rounded-lg ring-1 ring-black text-base"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
