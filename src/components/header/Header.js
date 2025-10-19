import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__img">
        <img 
        className="img__iam"
        src="/foto/my_foto_2.png"
        alt="Моя фотография"
        loading="lazy"
        />
      </div>
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Galiya</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>who's always excited to learn new things and bring ideas to life.</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
