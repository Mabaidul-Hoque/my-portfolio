"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { links } from "@/static_data/links";
import { socialLinks } from "@/static_data/links";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { DataContext } from "@/contexts/DataProvider";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const { open, setOpen } = useContext(DataContext).menuData;

  const handleMenuClick = () => {
    setOpen((prev) => !prev);
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Mabaidul</span>
          <span className="w-12 h-6 bg-white rounded text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {socialLinks.map((link, index) => (
          <Link key={link.title} href={link.url} target="_blank">
            <Image
              className={`${index === 0 && "pt-1"}`}
              width={24}
              height={24}
              src={link.image}
              alt={link.title}
            />
          </Link>
        ))}
      </div>
      {/*  RESPONSIVE MENU*/}
      <div className="md:hidden absolute top-8 right-10">
        <button
          onClick={handleMenuClick}
          className="w-10 h-8 flex flex-col z-50 justify-between relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded  origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded "
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded  origin-left"
          ></motion.div>
        </button>
      </div>
      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-4xl z-40"
        >
          {links.map((link) => (
            <motion.div
              onClick={() => setOpen(false)}
              variants={listItemVariants}
              key={link.title}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
