import project01 from "../img/projects/01.png";
import project01Big from "../img/projects/01-big.png";
import project02 from "../img/projects/02.jpg";
import project02Big from "../img/projects/02-big.jpg";
import project03 from "../img/projects/03.jpg";
import project03Big from "../img/projects/03-big.jpg";
import imgGH from "./gitHub-black.svg";
import imgVC from "./vercel-black.svg";

const projects = [
  {
    title: "Сайт по поиску публикаций",
    skills: "Node.js, React, Redux, HTML5, CSS3",
    img: project01,
    imgBig: project01Big,
    links: {
      gitHubLink: {
        title: "GitHub repo",
        link: "https://github.com/Galiyaga/finally-project",
        icon: imgGH,
      },
      vercelLink: {
        title: "On the domain",
        link: "https://finally-project-three.vercel.app/",
        icon: imgVC
      },
    },
  },
  {
    title: "Браузерное приложение таск-менеджер",
    skills: "Node.js, React, TypeScript, Redux, HTML5, CSS3",
    img: project02,
    imgBig: project02Big,
    links: {
      gitHubLink: {
        title: "GitHub repo",
        link: "https://github.com/Galiyaga/task-manager-ts.project",
      },
      vercelLink: {
        title: "On the domain",
        link: "https://task-manager-ts-project.vercel.app/login",
      },
    },
  },
  {
    title: "Таск-менеджер",
    skills: "Node.js, VanillaJS, HTML5, CSS3",
    img: project03,
    imgBig: project03Big,
    gitHubLink: "https://github.com/Galiyaga/task-manager",
    vercelLink: "https://task-manager-ts-project.vercel.app/todolists",
  },
];

export { projects };
