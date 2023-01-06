import React from "react";
import { motion } from "framer-motion";

const abilities = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  "https://midu.dev/images/tags/node.png",
  "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png",
  "https://assets.stickpng.com/images/58482ee4cef1014c0b5e4a75.png",
  "https://api.civo.com/k3s-marketplace/mongodb.png",
  "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
  "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
  "https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png",
  "https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png?hl=es-419",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
  "https://i.postimg.cc/vTkGR0jV/html5.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
];

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
    >
      {/* <h1 className="text-lg">Siempre trato de expandir mis conocimientos y adecuarme a <br />lo que mas se necesita</h1> */}

      <div className="flex justify-around h-screen items-center flex-col-reverse md:flex-row">
        <div className="w-1/2 flex flex-wrap justify-center gap-7 ml-12">
          {abilities.map((ability, index) => (
            <motion.img
            initial={{x: 100}}
            animate={{x: 0}}
            transition={{duration: `${0}.${index}000`}}
              src={ability}
              key={index}
              alt={`imagen ${index}`}
              className="h-16 md:h-24"
            />
          ))}
        </div>

        <div className="mr-10">
          <h1 className="text-5xl font-semibold mb-4">Mis habilidades</h1>
          <p>
            Soy Full Stack en programacion manejo bases <br /> de datos SQL y
            NoSQL arientandome a ambas <br /> ramas con 60% Front-end y 40%
            Backend
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
