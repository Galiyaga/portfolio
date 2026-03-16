import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { LiaCss3 } from "react-icons/lia";
import { SiWebpack } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaYarn } from "react-icons/fa6";
import { VscServerProcess } from "react-icons/vsc";
import { SiMaterialformkdocs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";
import { TbBrandStorybook } from "react-icons/tb";
import { SiAxios } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa6";





export const skills = {
  coreTechnologies: {
    categoryTitle: "Core technologies",
    items: [
      {
        title: "JavaScript",
        icon: <RiJavascriptFill size={100} color="#5a56ab" />,
      },
      {
        title: "TypeScript",
        icon: <BiLogoTypescript size={100} color="#5a56ab" />,
      },
      { title: "ReactJS", icon: <GrReactjs size={100} color="#5a56ab" /> },
      { title: "Redux/Toolkit", icon: <SiRedux size={100} color="#5a56ab" /> },
      { title: "HTML5", icon: <FaHtml5 size={100} color="#5a56ab" /> },
      { title: "CSS3", icon: <LiaCss3 size={100} color="#5a56ab" /> },
    ],
  },
  developmentTools: {
    categoryTitle: "Development tools",
    items: [
      { title: "Webpack", icon: <SiWebpack size={100} color="#28807d" /> },
      { title: "Vite", icon: <TbBrandVite size={100} color="#28807d" /> },
      { title: "Git", icon: <FaGithub size={100} color="#28807d" /> },
      { title: "Yarn", icon: <FaYarn size={100} color="#28807d" /> },
      {
        title: "Open Server Panel",
        icon: <VscServerProcess size={100} color="#28807d" />,
      },
    ],
  },
  libraries: {
    categoryTitle: "Libraries",
    items: [
      {
        title: "Material-UI",
        icon: <SiMaterialformkdocs size={100} color="#9e6f38" />,
      },
      { title: "Bootstrap", icon: <FaBootstrap size={100} color="#9e6f38" /> },
      {
        title: "Styled Components",
        icon: <SiStyledcomponents size={135} color="#9e6f38" />,
      },
      {
        title: "Storybook",
        icon: <TbBrandStorybook size={100} color="#9e6f38" />,
      },
      { title: "Axios", icon: <SiAxios size={100} color="#9e6f38" /> },
    ],
  },
  backendAndApi: {
    categoryTitle: "Backend, API and testing",
    items: [
          { title: "REST API", icon: <FaPinterestP size={100} color="#367089e4" /> },
          { title: "Postman", icon: <SiPostman size={100} color="#367089e4" /> },
          { title: "Node.js Basics", icon: <FaNodeJs size={100} color="#367089e4" /> },
          { title: "MySQL Basics", icon: <GrMysql size={100} color="#367089e4" /> },
          { title: "PHP Basics", icon: <FaPhp size={100} color="#367089e4" /> },
          { title: "Jest", icon: <SiJest size={100} color="#367089e4" /> }
    ],
  },
};
