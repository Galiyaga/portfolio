import "./style.css";
import inst from "../../img/icons/instagram.svg";
import vk from "../../img/icons/vk.svg";
import x from "../../img/icons/twitter.svg";
import gh from "../../img/icons/gitHub.svg";
import lkd from "../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={inst} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={x} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gh} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={lkd} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
