import * as tf from "@tensorflow/tfjs";

const getModel = async () => {
  return await tf.loadLayersModel("http://localhost:8080/model.json");
};

export const makePrediction = async (image) => {
  const model = await getModel();
  const imgTensor = tf.tensor(image, [1, 784]);
  const results = model.predict(imgTensor);
  return Array.from(results.dataSync());
};
