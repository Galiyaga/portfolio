import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import BtnWithLink from "../components/btnWithLink/BtnWithLink";
import {skills} from "../helpers/skillList"
import Skillcard from "../components/skill/SkillCard"

const ProjectPage = () => {
  const findSkillIcon = (skillTitle) => {
  for (const category of Object.values(skills)) {
    const found = category.items.find(item => 
      item.title.toLowerCase().includes(skillTitle.toLowerCase())
    );
    if (found) return found;
  }
  return null;
};

  const { id } = useParams();
  const project = projects[id];
  const gitHubLink = project.links?.gitHubLink;
  const vercelLink = project.links?.vercelLink;

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          {project.video ? (
            <video
              controls
              width="100%"
              aria-label="Видеообзор сайта"
              className="project-details__cover"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.imgBig}
              alt="Обложка проекта"
              className="project-details__cover"
            />
          )}

          <div className="project-details__desc">
            <p>Skills: </p>
            <div className="skills-container">
          {project.skills.split(', ').map(skill => {
            const skillData = findSkillIcon(skill)
            return skillData ? (
              <Skillcard 
          key={skill}
          icon={skillData.icon}
          title={skill}
        />
      ) : (
        <span key={skill}>{skill}</span> 
      );
    })}
            </div>
          </div>

          <div className="project-details__link">
            <BtnWithLink
              link={gitHubLink.link}
              title={gitHubLink.title}
              icon={gitHubLink.icon}
            />
            <BtnWithLink
              link={vercelLink.link}
              title={vercelLink.title}
              icon={vercelLink.icon}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
