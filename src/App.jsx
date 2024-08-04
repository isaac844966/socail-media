import {
  CardFollowersContainer,
  Header,
  OverViewCardContainer,
} from "./components";
import "./index.css";
import { useLocalStorage } from "./constom/useLocalStorage";

const App = () => {
  const [theme, setTheme] = useLocalStorage(false, "theme");

  const handleThemeChange = () => {
    setTheme((theme) => !theme);
    localStorage.setItem("theme", !theme);
  };

  return (
    <div className={theme ? "whiteBg" : "darkBg"}>
      <div className="wrapper-container">
        <Header onSetTheme={handleThemeChange} theme={theme} />
        <CardFollowersContainer theme={theme} />
        <OverViewCardContainer theme={theme} />
      </div>
    </div>
  );
};

export default App;
