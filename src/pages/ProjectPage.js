import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import BtnWithLink from "../components/btnWithLink/BtnWithLink";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  const gitHubLink = project.links?.gitHubLink;
  const vercelLink = project.links?.vercelLink;

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <video
            controls
            width="100%"
            poster={gitHubLink.posterVideo}
            alt="Видеообзор сайта"
            className="project-details__cover"
          >
            <source src={project.video} type="video/mp4" />
          </video>

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
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
