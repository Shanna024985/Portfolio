import { useState } from "react";
import "./App.css";
import MainPage from "./MainPage";
import IntroOfMe from "./IntroOfMe";
import MyProjects from "./MyProjects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <MainPage />
        <IntroOfMe/>
        <MyProjects/>
    </>
  );
}

export default App;
