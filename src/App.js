import { Buttons } from "./components/Buttons";
import { Card } from "./components/Card";
import { Colors } from "./components/Colors";
import { Fonts } from "./components/Fonts";
import { GridSystem } from "./components/GridSystem";
import { ResponsiveTest } from "./components/ResponsiveTest";
import "./styles/index.scss";

function App() {
  return (
    <div className="App container">
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
  );
}

export default App;
