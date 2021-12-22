import { useState } from "react";
import { Buttons } from "./components/Buttons";
import { Card } from "./components/Card";
import { Colors } from "./components/Colors";
import { HomePage } from "./components/examplePage/HomePage";
import { Fonts } from "./components/Fonts";
import { GridSystem } from "./components/GridSystem";
import { Navbar } from "./components/Navbar";
import { ResponsiveTest } from "./components/ResponsiveTest";
import "./styles/index.scss";

function App() {
  const [examples, setExamples] = useState(false);

  return (
    <div className="App">
      <div id="#top" className="container mt-2 mb-2">
        <div className="row justify-center">
          <button
            className="btn-outlined-secondary text-secondary text-hover-white"
            onClick={() => setExamples((examples) => !examples)}
          >
            {examples ? "Show example homepage" : "Show examples"}
          </button>
        </div>
      </div>

      <a className="up-btn btn-secondary text-white font-lg" href="#top">
        ↑
      </a>

      {examples ? (
        <>
          <Navbar />

          <div className="container">
            <Card />
            <hr className="mt-4 mb-4"></hr>
            <Colors />
            <hr className="mt-4 mb-4"></hr>
            <Buttons />
            <hr className="mt-4 mb-4"></hr>
            <Fonts />
            <hr className="mt-4 mb-4"></hr>
            <ResponsiveTest />
            <hr className="mt-4 mb-4"></hr>
            <GridSystem />
          </div>
        </>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
