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
              <div className="skills-grid__wrapper">
                <h3 className="title-3">Core technologies</h3>
                <ul className="skills-grid">
                  {skills.coreTechnologies.map((skill) => {
                    return (
                      <SkillCard
                        title={skill.title}
                        icon={skill.icon}
                        key={skill.title}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="skills-grid__wrapper">
                <h3 className="title-3">Developments tools</h3>
                <ul className="skills-grid">
                  {skills.developmentTools.map((skill) => {
                    return (
                      <SkillCard
                        title={skill.title}
                        icon={skill.icon}
                        key={skill.title}
                      />
                    );
                  })}
                </ul>
              </div>
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
