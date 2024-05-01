import { sigmoid } from './helpers/sigmoid.helper';

export const createNeuralNetwork = ({
  inputSize,
  hiddenSize,
  outputSize
}: {
  inputSize: number;
  hiddenSize: number;
  outputSize: number;
}) => {
  /**
   * Forward Propagation (using sigmoid to activate)
   * 
   * Calculate the output of network, for a given input
   * - Product from input to hidden layer
   * - Product from hidden to output layer
   */
  const forward = (input: number[]): number[] => {
    const hiddenLayer = arrayMatrixDot(input, weightsInputToHidden).map(
      sigmoid
    );

    const outputLayer = arrayMatrixDot(hiddenLayer, weightsHiddenToOutput).map(
      sigmoid
    );

    return outputLayer;
  };

  // weights to connect the input layer to the hidden layer
  const weightsInputToHidden = Array.from({ length: inputSize }).map(() =>
    Array.from({ length: hiddenSize }).map(Math.random)
  );

  // weights to connect the hidden layer to the output layer
  const weightsHiddenToOutput = Array.from({ length: hiddenSize }).map(() =>
    Array.from({ length: outputSize }).map(Math.random)
  );

  console.log(forward([0, 0, 0, 1, 1, 1, -1, -1, 0]));
};
