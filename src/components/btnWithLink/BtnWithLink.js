import "./style.css";

const BtnGitHub = ({link, title, icon}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
      <img src={icon} alt="Иконка источника" />
      {title}
    </a>
  );
};

export default BtnGitHub;
