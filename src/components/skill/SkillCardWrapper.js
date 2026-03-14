import "./style.css";
import SkillCard from "./SkillCard";

const SkillCardWrapper = ({category}) => {
  return (
    <>
      <h3 className="title-3">{category.categoryTitle}</h3>
      <ul className="skills-grid">
        {category.items.map((skill) => {
          return (
            <SkillCard
              title={skill.title}
              icon={skill.icon}
              key={skill.title}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SkillCardWrapper;
