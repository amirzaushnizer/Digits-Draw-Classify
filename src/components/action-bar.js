import React from "react";
import Button from "react-bootstrap/Button";
import { makePrediction } from "../utils/model-utils";
import { getSmallBWImage } from "../utils/image-utils";

export const ActionBar = ({ setPredictions }) => {
  const analyzeGridAction = async () => {
    const canvas = document.getElementById("canvas");
    const bigImage = canvas.toDataURL();
    const smallImageBW = await getSmallBWImage(bigImage);
    const pxArray = Array.from(smallImageBW).map((px) => px / 255);
    const predictions = await makePrediction(pxArray);
    setPredictions(predictions);
  };

  const cleanGridAction = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    setPredictions([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  };

  return (
    <div id="action-bar">
      <Button onClick={analyzeGridAction}>Analayze Grid</Button>
      <Button onClick={cleanGridAction}>Clean Grid</Button>
    </div>
  );
};
