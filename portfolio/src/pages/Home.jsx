import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import michael from "../imgs/michael.jpeg";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-100vh",
      }}
      animate={{
        opacity: 1,
        y: "0vh",
      }}
      exit={{
        opacity: 0,
        y: "110vh",
      }}
      transition={{ duration: 0.4 }}
      className="flex items-center"
    >
      <div className="text-center md:text-start flex flex-col md:flex-row items-center gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold lg:text-6xl">
            Hola!
          </h1>
          <p className="text-5xl md:text-6xl font-semibold lg:text-7xl bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Soy Michael
          </p>
          <div className={styles.container}>
            <div
              className={`sm:text-5xl lg:text-7xl text-4xl ${styles.typed_out}`}
            >
              Full Stack <br /> Web Developer
            </div>
          </div>
        </div>
        <div>
          <img
            src={michael}
            alt="michael"
            className="w-40 h-40 sm:w-64 sm:h-64 rounded-full object-cover"
          />
          
        </div>
        <div className="hidden absolute bottom-3 left-1/3 sm:flex items-center gap-6 cursor-pointer">
          <div className="flex gap-2">
            <IoMdMail className="text-2xl text-teal-900" />
            <p className="text-cyan-500">cdlsmichael.16@gmail.com</p>
          </div>
          <p className="mb-3">_________________________</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
