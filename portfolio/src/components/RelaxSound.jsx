import React, { useRef, useState } from "react";
import WABHCD from "../assets/whatABrokenHearCanDo.mp3";
import { TiMediaPauseOutline, TiMediaPlayReverseOutline } from "react-icons/ti";
import { TbRepeat } from "react-icons/tb";
import { motion } from "framer-motion";
import styles from "../styles/Sound.module.css";
import takako from "../imgs/editTakako.jpg";

const RelaxSound = () => {
  const [isPlay, setIsPlay] = useState(false);
  const musicRef = useRef();

  const reproducir = () => {
    setIsPlay(!isPlay);
    const tag = musicRef.current;
    console.log(isPlay);
    if (!isPlay) {
      tag.play();
    } else {
      tag.pause();
    }
  };

  const resetSound = () => {
    const tag = musicRef.current;
    tag.currentTime = 0;
  };

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 95 }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: 0 }}
      className="bg-black p-4 rounded-lg absolute -right-3 top-10 cursor-pointer border-white border z-50"
    >
      <div className={styles.triangulo}></div>
      <div className="flex justify-center">
        {isPlay ? (
          <img src={takako} alt="takako-album-love-trip" className={`w-12 h-12  ${styles.disco} mb-1`} />
        ) : (
          <span className="text-black p-3">-</span>
        )}
      </div>
      <div className="flex justify-center gap-3 items-end text-white">
        <audio src={WABHCD} ref={musicRef}></audio>
        <button onClick={reproducir}>
          <span className="text-4xl">
            {!isPlay ? <TiMediaPlayReverseOutline /> : <TiMediaPauseOutline />}
          </span>
        </button>
        <button onClick={resetSound} className="mr-3">
          <span className="text-4xl">
            <TbRepeat />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default RelaxSound;
