import { useEffect } from "react";
import detectDarkMode from "../../utils/detectDarkMode";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";
import { useLocalStorage } from "../../utils/useLocalStorage";

const BtnDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('theme', detectDarkMode());

  const toggleDarkMode = () => {
    setIsDarkMode((prevValue) => !prevValue);
  };
  
  useEffect(() => {
    window
     .matchMedia('(prefers-color-scheme: dark)')
     .addEventListener('change', (event) => {
      const newColorScheme = event.matches ? true : false
      setIsDarkMode(newColorScheme)
     })
  }, [setIsDarkMode])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]); 

  const btnNormal = "dark-mode-btn"
  const btnActive = "dark-mode-btn dark-mode-btn--active"

  return (
    <button className={isDarkMode ? btnActive : btnNormal} onClick={toggleDarkMode} >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
