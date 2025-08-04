import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./MainPage";
import IntroOfMe from "./IntroOfMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <MainPage />
        <IntroOfMe/>
    </>
  );
}

export default App;
