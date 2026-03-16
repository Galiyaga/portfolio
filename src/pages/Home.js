import Header from "../components/header/Header";
import { skills } from "../helpers/skillList";
import SkillCardWrapper from "../components/skill/SkillCardWrapper";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <div className="content-list">
            <div className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <ul className="skills-grid__wrapper">
                {Object.values(skills).map((category) => {
                  return (
                    <SkillCardWrapper category={category} key={category.categoryTitle} />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
