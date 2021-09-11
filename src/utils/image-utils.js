async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

export const getSmallBWImage = async (imageDataUrl) => {
  const canvas = document.createElement("canvas");
  const size = 28;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const imageContainer = new Image();
  await loadImage(imageDataUrl, imageContainer);
  ctx.drawImage(imageContainer, 0, 0, size, size);
  return ctx
    .getImageData(0, 0, canvas.width, canvas.height)
    .data.filter((element, index) => index % 4 === 0);
};
