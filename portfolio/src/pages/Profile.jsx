import React from "react";
import { motion } from "framer-motion";
import peru from "../imgs/peru_flag.png";

const Profile = () => {
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
      className="relative h-screen w-full flex justify-center items-center"
    >
      <div className="pl-8">
        <h1 className="text-5xl font-bold md:text-6xl mb-7 from-green-400 to-blue-600 text-transparent h-20 bg-clip-text bg-gradient-to-r hover:scale-110 transition-transform cursor-pointer">
          ¿Quién Soy?
        </h1>
        <p className="text-lg">
          <span className="px-1 font-bold text-xl" >¡Saludos!👋🏻</span>
          Me llamo Michael Canales Palomino,soy de{" "}
          <span className="font-bold">Lima, Perú</span>
          <img src={peru} alt="peru" className="ml-3 w-10 inline" />
          <br />
          conocí la programacion a los 17 y quedé maravillado de este mundo
          <br />
          Actualmente tengo 18 años, soy
          <span className="font-bold px-2 from-pink-400 to-red-400 text-transparent h-20 bg-clip-text bg-gradient-to-r">
            Full-Stack
          </span>
          orientado a Front-end
        </p>
      </div>
    </motion.div>
  );
};

export default Profile;
