const Skill = (props) => {
  return (
    <li>
      {props.icon}
      <span>{props.title}</span>
    </li>
  );
};

export default Skill;
