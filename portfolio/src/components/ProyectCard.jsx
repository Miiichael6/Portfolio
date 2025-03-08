import React from "react";
import { BsYoutube } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ProyectCard = ({ photo, title, description, link, gitRepo }) => {
  return (
    <div className="sm:w-1/2 w-full lg:w-1/3 p-6 hover:scale-110 transition-transform">
      <img src={photo} alt="fyt" className="rounded-2xl" />
      <div>
        <h2 className="font-bold text-xl text-blue-400 text-center py-2">
          {title}
        </h2>
        <p className="text-base">{description}</p>
        <div className="flex gap-3">
          {/* <a
            className="text-sm text-sky-600 hover:underline"
            href={link}
            target="_blank"
          >
            Link youtube
            <span>
              <BsYoutube className="inline text-red-700 ml-1" />
            </span>
          </a> */}
          <a
            className="text-sm text-sky-600 hover:underline"
            href={gitRepo}
            target="_blank"
          >
            repositorio
            <span>
              <AiFillGithub className="inline text-lg text-white ml-1" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
