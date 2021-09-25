import "./App.css";
import { ActionBar } from "./components/action-bar";
import { Grid } from "./components/grid";
import { useEffect, useState } from "react";
import { Barchart } from "./components/barchart";
import "bootstrap/dist/css/bootstrap.min.css";
import { getModel } from "./utils/model-utils";
import { Spinner } from "react-bootstrap";

function App() {
  const [predictions, setPredictions] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [model, setModel] = useState(null);

  useEffect(() => {
    getModel().then((fetchedModel) => {
      setModel(fetchedModel);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <div>
          <Grid />
          <ActionBar setPredictions={setPredictions} model={model} />
          {predictions && (
            <Barchart results={predictions} id="predictions"></Barchart>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
