import React from "react";
import { motion } from "framer-motion";
import javascript from "../imgs/javascript.png";
import redux from "../imgs/redux.png";
import bootstrap from "../imgs/bootstrap.png";
import mongo from "../imgs/mongo.png";
import git from "../imgs/git.png";
import node from "../imgs/node.png";
import firebase from "../imgs/firebase.png";
import express from "../imgs/express.png";
import ts from "../imgs/ts.png";
import html from "../imgs/html.png";
import tailwind from "../imgs/tailwind.png";
import css from "../imgs/css.png";
import react from "../imgs/react.png";
import postgrest from "../imgs/postgres.png";

const More = () => {
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
      className="relative h-screen w-full"
    >
      <div className="flex justify-center text-center h-screen items-center flex-col-reverse sm:flex-row sm:gap-20">
        <div className="p-88 flex flex-wrap justify-center gap-5 sm:gap-7 sm:ml-12 w-1/2">
          <div className="flex flex-col gap-5">
            <motion.img
              src={postgrest}
              alt="post"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={javascript}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={redux}
              alt="tech"
              className="w-10 object-contain sm:w-16 lg:w-20"
            />
            <motion.img
              src={bootstrap}
              alt="tech"
              className="w-10 object-contain sm:w-16 lg:w-20"
            />
          </div>
          <div className="flex flex-col gap-5">
            <motion.img
              src={mongo}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={git}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={firebase}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={node}
              alt="tech"
              className="w-10  sm:w-16 lg:w-20 object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <motion.img
              src={express}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={ts}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={html}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />

            <motion.img
              src={tailwind}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
          </div>

          <div className="flex flex-col gap-5">
            <motion.img
              src={css}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
            <motion.img
              src={react}
              alt="tech"
              className="w-10 sm:w-16 lg:w-20 object-contain"
            />
          </div>
        </div>

        <div className="sm:mr-20 mb-10">
          <motion.h1
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-3xl sm:text-5xl font-semibold mb-4 text-amber-400"
          >
            Mis habilidades
          </motion.h1>
          <motion.p
            className="text-sm sm:text-xl"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Soy Full Stack en programacion manejo bases <br />
            de datos SQL y NoSQL arientandome a ambas <br />
            ramas con 60% Front-end y 40% Backend
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default More;
