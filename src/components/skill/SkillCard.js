import "./style.css"

const SkillCard = (props) => {
  return (
    <li className="skill-card">
      <div className="skill-icon-wrapper">
        {props.icon}
      </div>
      <span className="skills-title">{props.title}</span>
    </li>
  );
};

export default SkillCard;
