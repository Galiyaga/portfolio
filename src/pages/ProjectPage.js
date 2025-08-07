import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import BtnWithLink from "../components/btnWithLink/BtnWithLink";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  const gitHubLink = project.links?.gitHubLink;
  const vercelLink = project.links?.vercelLink;

  console.log("GitHub Link Data:", {
    link: gitHubLink.link,
    title: gitHubLink.title,
    iconType: typeof gitHubLink.icon,
    iconValue: gitHubLink.icon,
  });
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <a
            href={vercelLink.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.imgBig}
              alt=""
              className="project-details__cover"
            />
          </a>

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <div className="project-details__link">
            <BtnWithLink
              link={gitHubLink.link}
              title={gitHubLink.title}
              icon={gitHubLink.icon}
            />
            <BtnWithLink link={vercelLink.link} title={vercelLink.title} icon={vercelLink.icon} />
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
