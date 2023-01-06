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
    >
      Contacttttttttttttt
    </motion.div>
  );
};

export default Contact;
