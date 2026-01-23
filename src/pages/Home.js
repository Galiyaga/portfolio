import Header from "../components/header/Header";
import { skills } from "../helpers/skillList";
import Skill from "../components/skill/Skill";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <div className="content-list">
            <div className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <ul>
                {skills.coreTechnologies.map((skill) => {
                  console.log("title:", skill.title, "img:", skill.icon)
                  return <Skill title={skill.title} icon={skill.icon} key={skill.title} />;
                })}
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, StyledComponents
              </ul>
            </div>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, basic MySQL, basic PHP</p>
            </li>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
