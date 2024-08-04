/* eslint-disable react/prop-types */
import Wrapper from "../assets/Wrappers/Header";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Header = ({ onSetTheme, theme }) => {
  const handleSetTheme = () => {
    onSetTheme((theme) => !theme);
  };
  return (
    <Wrapper>
      <header>
        <div className="header-content">
          <h1 style={{ color: theme ? "black" : "white" }}>
            Social media Dashboard
          </h1>
          <p style={{ color: "hsl(228, 34%, 66%)" }}>Total Followers:23,004</p>
        </div>
        <div className="toggleTheme">
          <h4 className={theme ? "darkText" : "lightText"}>Dark Mode</h4>
          <div className="button" onClick={handleSetTheme}>
            {theme ? <BsSun /> : <FaMoon />}
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
