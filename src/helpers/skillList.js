// import typescriptIcon from "../img/icons/skills/typescript.svg";
// import reduxIcon from "../img/icons/skills/redux.svg";
// import reactIcon from "../img/icons/skills/react.svg";
// import javascriptIcon from "../img/icons/skills/javascript.svg";
// import htmlIcon from "../img/icons/skills/html.svg";
// import cssIcon from "../img/icons/skills/css.svg";
// import webpackIcon from "../img/icons/skills/webpack.svg";
// import viteIcon from "../img/icons/skills/vite.svg";
// import bootstrapIcon from "../img/icons/skills/bootstrap.svg";
// import gitIcon from "../img/icons/skills/git.svg";
// import restapiIcon from "../img/icons/skills/restapi.svg";
// import axiosIcon from "../img/icons/skills/axios.svg";
// import muiIcon from "../img/icons/skills/mui.svg";
// import yarnIcon from "../img/icons/skills/yarn.svg";
// import jestIcon from "../img/icons/skills/jest.svg";
// import postmanIcon from "../img/icons/skills/postman.svg";
// import storybookIcon from "../img/icons/skills/storybook.svg";
// import styledComponentsIcon from "../img/icons/skills/styledComponents.svg";
// import openServerIcon from "../img/icons/skills/openServer.svg";
// import nodejsIcon from "../img/icons/skills/nodejs.svg";
// import mysqlIcon from "../img/icons/skills/mysql.svg";
// import phpIcon from "../img/icons/skills/php.svg";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { GrReactjs   } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { LiaCss3 } from "react-icons/lia";
import { SiWebpack } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaYarn } from "react-icons/fa6";
import { VscServerProcess } from "react-icons/vsc";







export const skills = {
  coreTechnologies: [
    { title: "JavaScript", icon: <RiJavascriptFill size={100} color="#5a56ab"/> },
    { title: "TypeScript", icon: <BiLogoTypescript size={100} color="#3178C6"/> },
    { title: "ReactJS", icon: <GrReactjs size={100} color="#694bbb"/> },
    { title: "Redux/Toolkit", icon: <SiRedux size={100} color="#b940b1"/> },
    { title: "HTML5", icon: <FaHtml5 size={100} color="#9f64d0"/>},
    { title: "CSS3", icon: <LiaCss3 size={100} color="#9dcee5"/>},
  ],
  developmentTools: [
    { title: "Webpack", icon: <SiWebpack size={100} color="#28807d"/> },
    { title: "Vite", icon: <TbBrandVite size={100} color="#288045"/> },
    { title: "Git", icon: <FaGithub size={100} color="#639b28"/> },
    { title: "Yarn", icon: <FaYarn size={100} color="#177880"/> },
    { title: "Open Server Panel", icon: <VscServerProcess size={100} color="#80921b"/> },
  ],
//   libraries: [
//     { title: "Material-UI", img: muiIcon },
//     { title: "Bootstrap", img: bootstrapIcon },
//     { title: "Styled Components", img: styledComponentsIcon },
//     { title: "Storybook", img: storybookIcon },
//     { title: "Axios", img: axiosIcon },
//   ],
//   testing: [{ title: "Jest", img: jestIcon }],
//   backendAndApi: [
//     { title: "REST API", img: restapiIcon },
//     { title: "Postman", img: postmanIcon },
//     { title: "Node.js Basics", img: nodejsIcon },
//     { title: "MySQL Basics", img: mysqlIcon },
//     { title: "PHP Basics", img: phpIcon },
//   ],
};
