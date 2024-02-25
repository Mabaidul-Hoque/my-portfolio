"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/static_data/links";
import { socialLinks } from "@/static_data/links";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
    },
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LINKS */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-1'>Mabaidul</span>
          <span className='w-12 h-6 bg-white rounded text-black flex items-center justify-center'>
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        {socialLinks.map((link) => (
          <Link key={link.title} href={link.url} target='_blank'>
            <Image width={24} height={24} src={link.image} alt={link.title} />
          </Link>
        ))}
      </div>
      {/*  RESPONSIVE MENU*/}
      <div className='md:hidden'>
        <button
          onClick={handleMenuClick}
          className='w-10 h-8 flex flex-col z-50 justify-between relative'
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded  origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded '
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded  origin-left'
          ></motion.div>
        </button>
      </div>
      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVariants}
          initial='closed'
          animate='opened'
          transition={"1s ease-in-out"}
          className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-4xl z-40'
        >
          {links.map((link) => (
            <Link
              href={link.url}
              onClick={() => setOpen(false)}
              key={link.title}
              className=''
            >
              {link.title}
            </Link>
          ))}
        </motion.div>
      )}

      <div></div>
    </div>
  );
};

export default Navbar;
