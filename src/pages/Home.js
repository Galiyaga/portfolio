import Header from "../components/header/Header";
import { skills } from "../helpers/skillList";
import SkillCard from "../components/skill/SkillCard";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <div className="content-list">
            <div className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <ul className="skills-grid">
                {skills.coreTechnologies.map((skill) => {
                  return <SkillCard title={skill.title} icon={skill.icon} key={skill.title} />;
                })}
              </ul>
            </div>
            <div className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, basic MySQL, basic PHP</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
