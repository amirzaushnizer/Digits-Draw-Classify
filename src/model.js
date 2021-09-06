import * as tf from "@tensorflow/tfjs";

const getModel = async () => {
  
  return await tf.loadLayersModel("model/model.json");
};

export const makePrediction = async (image) => {
  const model = await getModel();
  const modelInput = tf.tensor(image, [1, 784]);
  console.log(model.predict(modelInput));
};
