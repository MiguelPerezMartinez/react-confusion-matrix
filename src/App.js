import "./App.css";
import ConfusionMatrix from "./Components/ConfusionMatrix/index.jsx";

function App() {
  const arrayTest = [
    [33, 2, 0, 0, 0, 0, 0, 0, 0, 1, 3],
    [3, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 41, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 30, 0, 6, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 38, 10, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 1, 39, 0, 0, 0, 0, 4],
    [0, 2, 2, 0, 4, 1, 31, 0, 0, 0, 2],
    [0, 1, 0, 0, 0, 0, 0, 36, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 1, 5, 37, 5, 1],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38],
  ];

  const testLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

  return (
    <div className="App" style={{ width: "100%", maxHeight: "200px" }}>
      <ConfusionMatrix data={arrayTest} labels={testLabels} />
    </div>
  );
}

export default App;
