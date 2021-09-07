import "./App.css";
import { ActionBar } from "./components/action-bar";
import { Grid } from "./components/grid";
import { useState } from "react";
import { Barchart } from "./components/barchart";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [predictions, setPredictions] = useState(null);
  return (
    <div className="App">
      <Grid />
      <ActionBar setPredictions={setPredictions} />
      {predictions && (
        <Barchart results={predictions} id="predictions"></Barchart>
      )}
    </div>
  );
}

export default App;
