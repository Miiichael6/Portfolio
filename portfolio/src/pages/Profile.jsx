import React from "react";
import { motion } from "framer-motion";
// import peru from "../imgs/peru_flag.png";
import styles from "../styles/Profile.module.css";
import findYourTeacher from "../imgs/findYourTeacher.png";
import ProyectCard from "../components/ProyectCard";
import proyectos from "../javascript/projects.js";

const Profile = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // x: "-100vh",
        x: "-100vh",
      }}
      animate={{
        opacity: 1,
        x: "0vh",
      }}
      exit={{
        opacity: 0,
        y: "110vh",
      }}
      transition={{ type: "spring", duration: 0.4 }}
      className={`relative w-full overflow-auto ${styles.scrollbar} overflow-x-hidden`}
    >
      <div className="sm:pl-8 p-4 mt-20 sm:mt-0">
        <h1 className="text-4xl font-bold md:text-6xl from-green-400 to-blue-600 text-transparent h-20 bg-clip-text bg-gradient-to-r hover:translate-x-12 transition-transform cursor-pointer">
          ¿Quién Soy?
        </h1>
        <p className="sm:text-base">
          <span className="px-1 font-bold text-xl">¡Saludos!👋🏻</span>
          Soy Michael Canales Palomino, soy de{" "}
          <span className="font-bold">Lima, Perú</span>
         <br/> Actualmente tengo 19 años, soy
          <span className="font-bold px-2 from-pink-400 to-red-400 text-transparent h-20 bg-clip-text bg-gradient-to-r">
            Full-Stack Web Developer
          </span>
          <br />
          si estas aquí es porque seguro te 
          interesaste en ver mi Portfolio y 
          <br />
          Agradezco el tiempo que te
          quedes aquí ⚔
        </p>

        <h1
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-4xl mt-5 font-bold md:text-5xl from-pink-400 to-red-600 text-transparent h-20 bg-clip-text bg-gradient-to-r cursor-pointer text-center sm:text-4xl"
        >
          Mis Proyectos
        </h1>
        <div className="w-full p-6 bg-zinc-900 rounded-md flex flex-wrap">
          {proyectos.map((project, index) => {
            return (
              <ProyectCard
                key={index}
                title={project.title}
                photo={project.img}
                description={project.description}
                link={project.link}
                gitRepo={project.gitRepo}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
