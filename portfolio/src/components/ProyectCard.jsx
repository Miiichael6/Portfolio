import React from "react";
import { BsYoutube } from "react-icons/bs";

const ProyectCard = ({photo}) => {
  return (
    <div className="sm:w-1/2 w-full md:w-1/3 p-6">
      <img src={photo} alt="fyt" className="rounded-2xl" />
      <div>
        <h2 className="font-bold text-xl text-blue-400 text-center py-2">
          Find-Your-Teacher
        </h2>
        <p className="text-base">
          aplicacion que permite conectar a alumnos con un profesor particular,
          reservarlo, hablar con el, calificarlo, etc
        </p>
        <a
          className="text-sm text-sky-600 hover:underline"
          href="https://youtu.be/PblFXtmDjss"
          target="_blank"
        >
          Link youtube
          <span>
            <BsYoutube className="inline text-red-700 ml-1" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProyectCard;
