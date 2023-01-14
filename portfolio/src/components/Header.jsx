import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineInfoCircle, AiOutlinePaperClip } from "react-icons/ai";
import { BsLinkedin, BsPersonFill, BsPlusCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/TextShadow.module.css";
import { VscGithubInverted } from "react-icons/vsc";
import michael from "../imgs/michael.jpeg";
import CV from "../download/CV-Michael-Hoja-De-Vida.pdf"

const Header = () => {
  const { pathname } = useLocation();
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateHeader(true);
    }, 6000);
  }, []);

  return (
    <header
      className={`h-screen w-20 sm:flex flex-col justify-between items-center pb-20 pt-10 px-2 fixed border-r-2 cursor-pointer z-50 hidden bg-black ${
        animateHeader && styles.hoverHeader
      }`}
      // style={{ backgroundColor: "#0F0F0F" }}
      // initial={{ x: 0 }}
      // animate={animateHeader}
      // transition={{ duration: 0.4 }}
      // whileHover={{ x: 0 }}
    >
      <div>
        <motion.img
          src={michael}
          alt="logo"
          className="rounded-full w-16 h-16 object-cover object-center"
          whileHover={{ scale: 4, x: 70, y: 50 }}
        />
      </div>
      <nav className="text-white bg-neutral-900 p-2 rounded-full">
        <ul>
          <motion.li
            initial={{}}
            transition={{ type: "spring", duration: 0.3 }}
            className="my-7 p-1"
            whileHover={{ scale: 1.2, rotate: 20 }}
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
            className="my-7 p-1"
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
            className="my-7 p-1"
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
            className="my-7 p-1"
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
      <div className="flex flex-col gap-6">
        <span className="text-3xl hover:text-green-500 transition-colors">
          <a download="Michael-Canales-CV" href={CV}>
            <AiOutlinePaperClip />
          </a>
            <p className="text-sm text-center font-bold">CV</p>
        </span>

        <span className="text-3xl hover:text-pink-500 transition-colors">
          <a href="https://github.com/Miiichael6" target="_blank">
            <VscGithubInverted />
          </a>
        </span>
        <span className="text-3xl hover:text-cyan-700 transition-colors">
          <a
            href="https://www.linkedin.com/in/michael-canales-665235236/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
