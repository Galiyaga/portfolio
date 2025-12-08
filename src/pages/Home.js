import Header from "../components/header/Header";
import {skills} from '../helpers/skillList'
import Skill from '../components/skill/Skill'


const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            {skills.map((skill, index) => {
              return <Skill skill={skill} key={index} />
            })}
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, basic MySQL, basic PHP</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
