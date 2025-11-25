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
        <div class="header-bg">
          <img
            className="header-bg__img"
            src="/foto/header-bg.png"
            alt="Элемент дизайна"
          />
        </div>
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Galiya</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>
            who's always excited to learn new things and bring ideas to life.
          </p>
        </div>
        <a
          href="https://kazan.hh.ru/resume_converter/%D0%AE%D0%BD%D1%83%D1%81%D0%BE%D0%B2%D0%B0%20%D0%93%D0%B0%D0%BB%D0%B8%D1%8F%20%D0%9A%D1%83%D1%82%D0%B4%D1%83%D1%81%D0%BE%D0%B2%D0%BD%D0%B0.pdf?hash=8ff229efff0f8d00610039ed1f644f43487052&type=pdf&hhtmFrom=resume&hhtmSource=resume"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
