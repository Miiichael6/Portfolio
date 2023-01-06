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
            <div className={`lg:text-7xl text-6xl ${styles.typed_out}`}>
              Full Stack <br /> Web Developer
            </div>
          </div>
        </div>
        <div>
          <img
            src={michael}
            alt="michael"
            className="w-64 h-64 rounded-full object-cover"
          />
          <>
            <motion.hr
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-5"
            />
            <motion.hr
              className="w-5/6 mt-4 mx-auto"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.hr
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-4/6 mt-4 mx-auto"
            />
            <motion.hr
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-3/6 mt-4 mx-auto"
            />
            <motion.hr
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="w-2/6 mt-4 mx-auto"
            />
          </>
        </div>
        <div className="absolute bottom-6 left-1/3 flex items-center gap-6 cursor-pointer">
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
