import React from "react";
import { useState } from "react";

export const Grid = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };

  const stopDrawing = (e) => {
    if (isDrawing) {
      draw(x, y, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(false);
      setX(0);
      setY(0);
    }
  };

  const onMouseMove = (e) => {
    if (isDrawing) {
      draw(x, y, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setX(e.nativeEvent.offsetX);
      setY(e.nativeEvent.offsetY);
    }
  };

  const draw = (x1, y1, x2, y2) => {
    const ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  };

  return (
    <div>
      <canvas
        className="grid"
        id="canvas"
        width="300px"
        height="300px"
        style={{ backgroundColor: "black" }}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={onMouseMove}
      ></canvas>
    </div>
  );
};
