import * as tf from "@tensorflow/tfjs";

export const getModel = async () => {
  return await tf.loadLayersModel(
    "https://digit-classifier.s3.amazonaws.com/model.json"
  );
};

export const makePrediction = async (model, image) => {
  await model;
  const imgTensor = tf.tensor(image, [1, 784]);
  const results = model.predict(imgTensor);
  return Array.from(results.dataSync());
};
