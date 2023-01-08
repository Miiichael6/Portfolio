import React from "react";
import { motion } from "framer-motion";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BsPersonFill, BsPlusCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const XHeader = () => {
  const {pathname} = useLocation()

  return (
    <header className="sm:hidden z-50">
      <nav className="text-white bg-neutral-900 p-2">
        <ul className="flex justify-center gap-4">
          <motion.li
            initial={{}}
            transition={{ type: "spring", duration: 0.3 }}
            whileHover={{ scale: 1.2, rotate: 20 }}
            className="my-3 p-1"
          >
            <Link to="/">
              <AiFillHome
                className={`text-3xl hover:text-pink-400 ${
                  pathname === "/" ? "text-white" : "text-zinc-500 opacity-50"
                }`}
              />
            </Link>
          </motion.li>
          <motion.li
            transition={{ type: "spring", duration: 0.3 }}
            className="my-3 p-1"
            
            whileHover={{ scale: 1.2, rotate: 20 }}
          >
            <Link to="/more">
              <BsPlusCircleFill
                className={`text-3xl hover:text-orange-400 ${
                  pathname === "/more"
                    ? `text-white`
                    : "text-zinc-500 opacity-50"
                }`}
              />
            </Link>
          </motion.li>
          <motion.li
            transition={{ type: "spring", duration: 0.3 }}
            className="my-3 p-1"
            whileHover={{ scale: 1.2, rotate: 20 }}
          >
            <Link to="/profile">
              <BsPersonFill
                className={`text-3xl hover:text-green-800 ${
                  pathname === "/profile"
                    ? "text-white"
                    : "text-zinc-500 opacity-50"
                }`}
              />
            </Link>
          </motion.li>
          <motion.li
            transition={{ type: "spring", duration: 0.3 }}
            className="my-3 p-1"
            whileHover={{ scale: 1.2, rotate: 20 }}
          >
            <Link to="/contact">
              <AiOutlineInfoCircle
                className={`text-3xl hover:text-emerald-300 ${
                  pathname === "/contact"
                    ? `text-white`
                    : "text-zinc-500 opacity-50"
                }`}
              />
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default XHeader;
