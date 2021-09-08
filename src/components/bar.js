import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Bar = ({ digit, chance }) => {
  return (
    <div>
      <br></br>
      {digit}
      <ProgressBar now={chance * 100} min="0" max="100"></ProgressBar>
      <br></br>
    </div>
  );
};
