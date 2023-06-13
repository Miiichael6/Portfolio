import fyt from "../imgs/findYourTeacher.png";
import countriesApp from "../imgs/countriesApp.png";
import amazingProjects from "../imgs/amazing.png";
import bad_jokes_app from "../imgs/bad_jokes_app.png"

const projects = [
  {
    img: fyt,
    title: "Find-Your-Teacher",
    description:
      "aplicacion que permite conectar a alumnos con un profesor particular, reservarlo, calificarlo, etc...",
    descriptionEN:
      "Application that allows students to connect with a private teacher, book it, talk to it, rate it, etc...",
    link: "https://youtu.be/PblFXtmDjss",
    gitRepo: "https://github.com/FedeU18/PF-client",
  },
  {
    img: countriesApp,
    title: "DabestCountriesApp",
    description:
      "aplicacion de paises que permite filtrarlos crear actividades eliminarlos, ordenarlos...",
    descriptionEN:
      "Country application that allows you to filter them, create activities, delete them, order them, etc...",
    link: "https://youtu.be/rFH44y1M5Zc",
    gitRepo: "https://github.com/Miiichael6/My-Proyecto-Countries",
  },
  {
    img: amazingProjects,
    title: "Amazing Proyects",
    description:
      "Administrador, creador de proyectos con autenticacion, agregar colaboradores, completar tareas, buscarlos, etc...",
    descriptionEN:
      "Administrator, creator of projects with authentication, add collaborators, complete tasks, search for them, etc...",
    link: "https://youtu.be/S7n1QsrAHQk",
    gitRepo: "https://github.com/Miiichael6/administrador-de-proyectos",
  },
  {
    img: bad_jokes_app,
    title: "BadJokes_app",
    description:
      "Una app muy simple de chistes que va pedida desde una api",
    descriptionEN:
      "An app very simple about some bad jokes making a request to an api",
    link: "aún no creado",
    gitRepo: "aún no creado",
  }
];

export default projects;
