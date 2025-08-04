import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({ projectSrc, projectTitle, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
          <img src={projectSrc} alt={projectTitle} className="project__img" />
          <h3 className="project__title">{projectTitle}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
