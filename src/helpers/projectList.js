import project01 from "../img/projects/01.jpg";
import project01Big from "../img/projects/01-big.jpg";
import project02 from "../img/projects/02.jpg";
import project02Big from "../img/projects/02-big.jpg";
// import project03 from "../img/projects/03.jpg";
import project03Big from "../img/projects/03-gif.gif";
import project04 from "../img/projects/04.jpg";
import project04Big from "../img/projects/04-big.jpg";
import imgGH from "./gitHub-black.svg";
import imgVC from "./vercel-black.svg";

const projects = [
  {
    title: "Сайт по поиску публикаций о компании по ИНН",
    skills: "Node.js, React, Redux, HTML5, CSS3",
    img: project01,
    imgBig: project01Big,
    video: "/videos/video-review-skan.mp4",
    links: {
      gitHubLink: {
        title: "GitHub repo",
        link: "https://github.com/Galiyaga/finally-project",
        icon: imgGH,
      },
      vercelLink: {
        title: "On the domain",
        link: "https://finally-project-three.vercel.app/",
        icon: imgVC,
      },
    },
  },
  {
    title: "Браузерное приложение таск-менеджер",
    skills: "Node.js, React, TypeScript, Redux, HTML5, CSS3",
    img: project02,
    imgBig: project02Big,
    video: "/videos/video-review-task-manager-ts.mp4",
    links: {
      gitHubLink: {
        title: "GitHub repo",
        link: "https://github.com/Galiyaga/task-manager-ts.project",
        icon: imgGH,
      },
      vercelLink: {
        title: "On the domain",
        link: "https://task-manager-ts-project.vercel.app",
        icon: imgVC,
      },
    },
  },
  {
    title: "Таск-менеджер на ванильном JS",
    skills: "Node.js, VanillaJS, Dragula, HTML5, CSS3",
    img: project02,
    imgBig: project03Big,
    links: {
      gitHubLink: {
        title: "GitHub repo",
        link: "https://github.com/Galiyaga/task-manager",
        icon: imgGH,
      },
      vercelLink: {
        title: "On the domain",
        link: "https://task-manager-vanillajs.vercel.app",
        icon: imgVC,
      },
    },
  },
  {
    title: "Верстка лендинга дизайнерского сайта",
    skills: "Node.js, VanillaJS, Dragula, HTML5, CSS3",
    img: project04,
    imgBig: project04Big,
    video: "/videos/video-review-lending.mp4",
    links: {
      gitHubLink: {
        title: "GitHub repo",
        link: "https://github.com/Galiyaga/lending_module18/tree/master",
        icon: imgGH,
      },
      vercelLink: {
        title: "On the domain",
        link: "https://lending-module18.vercel.app",
        icon: imgVC,
      },
    },
  },
];

export { projects };
