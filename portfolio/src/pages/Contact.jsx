import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
      // exit={{ opacity: 0 }}
      exit={{
        opacity: 0,
        y: "110vh",
      }}
      transition={{ duration: .4 }}
      className="relative h-screen w-full"
    >
       <div className="fixed h-screen w-full flex justify-center items-center bg-black opacity-80 text-center">
        <h1 className="text-red-700 font-bold text-5xl opacity-100">
          Still in process...
          <br />
          <span className="text-xl block text-center">(aún en proceso)</span>
        </h1>
      </div>

      

    </motion.div>
  );
};

export default Contact;
