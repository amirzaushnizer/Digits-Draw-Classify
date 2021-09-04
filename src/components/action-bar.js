import React from "react";
import Button from "react-bootstrap/Button";

export const ActionBar = () => {
  async function loadImage(url, elem) {
    return new Promise((resolve, reject) => {
      elem.onload = () => resolve(elem);
      elem.onerror = reject;
      elem.src = url;
    });
  }

  const resizeImage = async (image) => {
    const canvas = document.createElement("canvas");
    const size = 28;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const imageContainer = new Image();
    await loadImage(image, imageContainer);
    ctx.drawImage(imageContainer, 0, 0, size, size);
    return ctx
      .getImageData(0, 0, canvas.width, canvas.height)
      .data.filter((element, index) => index % 4 === 0);
  };

  const analyzeGridAction = async () => {
    const canvas = document.getElementById("canvas");
    const bigImage = canvas.toDataURL();
    const smallImage = await resizeImage(bigImage);
    const pxArray = Array.from(smallImage)
    console.log(pxArray.join())
    
  };

  const cleanGridAction = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div id="action-bar">
      <Button onClick={analyzeGridAction}>Analayze Grid</Button>
      <Button onClick={cleanGridAction}>Clean Grid</Button>
    </div>
  );
};
