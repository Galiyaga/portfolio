const Skill = (props) => {
  return (
    <li>
      <img src={props.img} alt="Typescript" />
      <span>{props.title}</span>
    </li>
  );
};

export default Skill;
