import "./App.css";
import { ConfusionMatrix } from "./Components/ConfusionMatrix/index.jsx";

function App() {
  const arrayTest = [
    [3333333, 2, 0],
    [3, 31, 0],
    [0, 4, 41],
    // [3333, 2, 0, 0, 0, 0, 0, 0, 0, 1, 3],
    // [3, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 4, 41, 0, 0, 0, 0, 0, 0, 0, 1],
    // [0, 1, 0, 30, 0, 6, 0, 0, 0, 0, 1],
    // [0, 0, 0, 0, 38, 10, 0, 0, 0, 0, 0],
    // [0, 0, 0, 3, 1, 39, 0, 0, 0, 0, 4],
    // [0, 2, 2, 0, 4, 1, 31, 0, 0, 0, 2],
    // [0, 1, 0, 0, 0, 0, 0, 36, 0, 2, 0],
    // [0, 0, 0, 0, 0, 0, 1, 5, 37, 5, 1],
    // [3, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38],
  ];

  const testLabels = [
    "Test 1",
    "Test 2",
    "Test 3",
    // "Test 4",
    // "Test 5",
    // "Test 6",
    // "Test 7",
    // "Test 8",
    // "Test 9",
    // "Test 10",
    // "Test 11",
  ];

  return (
    <div className="App" style={{ width: "100%", maxHeight: "200px" }}>
      <ConfusionMatrix data={arrayTest} labels={testLabels} />
    </div>
  );
}

export default App;
