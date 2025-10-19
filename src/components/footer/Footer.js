import "./style.css";
import vk from "../../img/icons/vk.svg";
import gh from "../../img/icons/gitHub.svg";
import tg from "../../img/icons/telegram.svg";

function Copyright() {
  return (
    <p className="copyright">
      {`© ${new Date().getFullYear()}. Все права защищены.`}
    </p>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://t.me/hikitzo">
                <img src={tg} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://vk.com/dikabashok">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Galiyaga">
                <img src={gh} alt="Link" />
              </a>
            </li>
          </ul>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
