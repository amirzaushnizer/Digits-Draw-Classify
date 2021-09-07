import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Bar = ({ digit, chance }) => {
  return (
    <div>
      <br></br>
      <ProgressBar now={chance * 100} min="0" max="100" label={`${digit}`}></ProgressBar>
      <br></br>
    </div>
  );
};
